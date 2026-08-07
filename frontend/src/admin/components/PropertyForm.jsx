import Input from "../../components/ui/Input";

const PropertyForm = ({
  formData,
  handleChange,
  handleAmenityChange,
  handleSubmit,
  amenitiesList = [],
  imagePreviews = [],
  handleImageChange,
  removeImage,
  loading = false,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Property Title</label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Luxury Apartment"
            className="w-full rounded-xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Property Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          >
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
            <option>Commercial</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">City</label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Locality</label>
          <Input
            type="text"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Builder</label>
          <Input
            type="text"
            name="builder"
            value={formData.builder}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Price</label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Area (sq.ft)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Furnishing</label>
          <select
            name="furnishing"
            value={formData.furnishing}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          >
            <option>Unfurnished</option>
            <option>Semi Furnished</option>
            <option>Fully Furnished</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Condition</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3"
          >
            <option>Ready to Move</option>
            <option>Under Construction</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-xl border border-gray-300 p-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-3 block font-medium">Amenities</label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {amenitiesList.map((amenity) => (
              <label
                key={amenity}
                className="flex cursor-pointer items-center gap-2 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  checked={(formData.amenities || []).includes(amenity)}
                  onChange={() => handleAmenityChange(amenity)}
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="flex h-40 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-500">
            <div className="text-center">
              <p className="font-semibold">Click to Upload Images</p>
              <p className="text-sm text-gray-500">JPG • PNG • WEBP</p>
            </div>
            <input
              hidden
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              {imagePreviews.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="h-36 w-full rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage?.(index)}
                    className="absolute right-2 top-2 rounded-full bg-red-600 px-2 text-white"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center gap-3 font-medium">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured Property
          </label>
        </div>

        <div className="mt-8 flex justify-end md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Property"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PropertyForm;
