import uploadToCloudinary from "../utils/cloudinaryUpload.js";

export const uploadImages = async (req, res) => {
  console.log(req.files);
  try {
    const uploads = await Promise.all(
      req.files.map((file) =>
        uploadToCloudinary(file.buffer)
      )
    );
    const imageUrls = uploads.map(
      (image) => image.secure_url
    );
    res.status(200).json({
      images: imageUrls,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:");
    console.error(error);
  
    res.status(500).json({
      message: "Image upload failed",
      error: error.message,
    });
  }
};