import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../../services/propertyService";
import PropertyForm from "../components/PropertyForm";
import { uploadImages } from "../services/uploadService";
import toast from "react-hot-toast";
import FormSkeleton from "../components/skeletons/FormSkeleton";

const initialFormData = {
  title: "",
  type: "Apartment",
  city: "",
  locality: "",
  builder: "",
  price: "",
  area: "",
  bedrooms: 1,
  bathrooms: 1,
  furnishing: "Semi Furnished",
  condition: "Ready to Move",
  description: "",
  featured: false,
  amenities: [],
  images: [],
};

const amenitiesList = [
  "Gym",
  "Pool",
  "Parking",
  "Clubhouse",
  "Security",
  "Garden",
];

const AddProperty = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }));
  };
  if (loading) return <FormSkeleton />;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);

    setSelectedImages((prev) => [...prev, ...files]);
    setImagePreviews((prev) => [
      ...prev,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
    e.target.value = "";
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (selectedImages.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }

    if (Number(formData.price) <= 0) {
      toast.error("Invalid price");
      return;
    }

    try {
      setLoading(true);

      const imageUrls = await uploadImages(selectedImages);

      await createProperty({
        ...formData,
        images: imageUrls,
      });

      toast.success("Property added successfully!");
      setFormData(initialFormData);
      setSelectedImages([]);
      setImagePreviews([]);
      navigate("/admin/properties");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">
      <h1 className="mb-8 text-3xl font-bold">Add Property</h1>
      <PropertyForm
        formData={formData}
        handleChange={handleChange}
        handleAmenityChange={handleAmenityChange}
        handleSubmit={handleSubmit}
        amenitiesList={amenitiesList}
        handleImageChange={handleImageChange}
        imagePreviews={imagePreviews}
        removeImage={removeImage}
        loading={loading}
      />
    </div>
  );
};

export default AddProperty;
