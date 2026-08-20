import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { createProperty } from "../../services/propertyService";
import { uploadImages } from "../services/uploadService";

import PropertyForm from "../components/PropertyForm";
import FormSkeleton from "../components/skeletons/FormSkeleton";
import { validateProperty } from "../utils/propertyValidation";

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

  const [formData, setFormData] =
    useState(initialFormData);

  const [selectedImages, setSelectedImages] =
    useState([]);

  const [imagePreviews, setImagePreviews] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,

      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(
            (item) => item !== amenity
          )
        : [
            ...prev.amenities,
            amenity,
          ],
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(
      e.target.files || []
    );

    if (!files.length) return;

    setSelectedImages((prev) => [
      ...prev,
      ...files,
    ]);

    setImagePreviews((prev) => [
      ...prev,
      ...files.map((file) =>
        URL.createObjectURL(file)
      ),
    ]);

    e.target.value = "";
  };

  const removeImage = (index) => {
    setSelectedImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setImagePreviews((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const errors = validateProperty(
      formData,
      selectedImages.length
    );
  
    if (Object.keys(errors).length > 0) {
      toast.error(Object.values(errors)[0]);
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
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <FormSkeleton />;
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 dark:bg-slate-950">
      <div
        className="
          mx-auto
          max-w-5xl
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-8
          shadow-lg

          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Add Property
          </h1>

          <p className="mt-2 text-gray-500 dark:text-slate-400">
            Add a new property listing to Nestora.
          </p>
        </div>

        <PropertyForm
          formData={formData}
          handleChange={handleChange}
          handleAmenityChange={
            handleAmenityChange
          }
          handleSubmit={handleSubmit}
          amenitiesList={amenitiesList}
          handleImageChange={
            handleImageChange
          }
          imagePreviews={imagePreviews}
          removeImage={removeImage}
          loading={loading}
        />
      </div>
    </main>
  );
};

export default AddProperty;