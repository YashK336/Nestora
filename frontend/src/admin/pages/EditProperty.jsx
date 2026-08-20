import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import toast from "react-hot-toast";

import PropertyForm from "../components/PropertyForm";

import {
  getProperty,
  updateProperty,
} from "../../services/propertyService";

import { uploadImages } from "../services/uploadService";

import FormSkeleton from "../components/skeletons/FormSkeleton";
import { validateProperty } from "../utils/propertyValidation";

const amenitiesList = [
  "Gym",
  "Pool",
  "Parking",
  "Clubhouse",
  "Security",
  "Garden",
];

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

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [loadingSave, setLoadingSave] =
    useState(false);

  const [selectedImages, setSelectedImages] =
    useState([]);

  const [imagePreviews, setImagePreviews] =
    useState([]);

  const [formData, setFormData] =
    useState(initialFormData); 

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);

        const data =
          await getProperty(id);

        const images =
          data.images || [];

        setFormData({
          title: data.title || "",
          type:
            data.type ||
            "Apartment",
          city: data.city || "",
          locality:
            data.locality || "",
          builder:
            data.builder || "",
          price:
            data.price ?? "",
          area:
            data.area ?? "",
          bedrooms:
            data.bedrooms ?? 1,
          bathrooms:
            data.bathrooms ?? 1,
          furnishing:
            data.furnishing ||
            "Semi Furnished",
          condition:
            data.condition ||
            "Ready to Move",
          description:
            data.description ||
            "",
          featured:
            Boolean(data.featured),
          amenities:
            data.amenities || [],
          images,
        });

        setImagePreviews(images);
        setSelectedImages([]);
      } catch (error) {
        console.error(
          "Load property error:",
          error
        );

        toast.error(
          "Failed to load property."
        );

        navigate(
          "/admin/properties"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, navigate]);

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

  const handleAmenityChange = (
    amenity
  ) => {
    setFormData((prev) => ({
      ...prev,

      amenities:
        prev.amenities.includes(
          amenity
        )
          ? prev.amenities.filter(
              (item) =>
                item !== amenity
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
    const existingCount =
      formData.images.length;

    setImagePreviews((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );

    if (index < existingCount) {
      setFormData((prev) => ({
        ...prev,

        images:
          prev.images.filter(
            (_, i) =>
              i !== index
          ),
      }));

      return;
    }

    const newIndex =
      index - existingCount;

    setSelectedImages((prev) =>
      prev.filter(
        (_, i) =>
          i !== newIndex
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const totalImages =
    formData.images.length + selectedImages.length;
  
  const errors = validateProperty(
    formData,
    totalImages
  );
  
  if (Object.keys(errors).length > 0) {
    toast.error(Object.values(errors)[0]);
    return;
  }  

    try {
      setLoadingSave(true);

      let uploadedUrls = [];

      if (
        selectedImages.length > 0
      ) {
        uploadedUrls =
          await uploadImages(
            selectedImages
          );
      }

      await updateProperty(id, {
        ...formData,
        images: [
          ...formData.images,
          ...uploadedUrls,
        ],
      });

      toast.success(
        "Property updated successfully!"
      );

      navigate(
        "/admin/properties"
      );
    } catch (error) {
      console.error(
        "Update property error:",
        error
      );

      toast.error(
        "Failed to update property."
      );
    } finally {
      setLoadingSave(false);
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
            Edit Property
          </h1>

          <p className="mt-2 text-gray-500 dark:text-slate-400">
            Update the details of this property listing.
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
          loading={loadingSave}
        />
      </div>
    </main>
  );
};

export default EditProperty;