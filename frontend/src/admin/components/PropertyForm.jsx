import {
  Upload,
  ImagePlus,
  X,
  Check,
  Star,
  MapPin,
  Building2,
  CircleDollarSign,
  BedDouble,
  Bath,
  Ruler,
  Sofa,
  ClipboardCheck,
} from "lucide-react";

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
  const inputClass = `
    w-full
    rounded-xl
    border
    border-slate-300
    bg-white
    p-3
    text-slate-900
    placeholder:text-slate-400
    transition-all
    duration-200
    focus:border-blue-500
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500/20

    dark:border-slate-700
    dark:bg-slate-800
    dark:text-white
    dark:placeholder:text-slate-500
    dark:focus:border-blue-400
  `;

  const labelClass = `
    mb-2
    block
    text-sm
    font-semibold
    text-slate-800
    dark:text-slate-200
  `;

  const sectionClass = `
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-6
    shadow-sm
    transition-colors
    duration-300

    dark:border-slate-700
    dark:bg-slate-900
  `;

  return (
    <form onSubmit={handleSubmit}>

      {/* =====================================================
          BASIC INFORMATION
      ====================================================== */}

      <section className={sectionClass}>
        <div className="mb-6 flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-blue-100
              text-blue-600
              dark:bg-blue-900/40
              dark:text-blue-400
            "
          >
            <Building2 size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Basic Information
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter the basic details of the property.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Title */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Property Title
            </label>

            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Luxury 3BHK Apartment in Noida"
              className={inputClass}
            />
          </div>

          {/* Type */}
          <div>
            <label className={labelClass}>
              Property Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Describe the property, location advantages, facilities, surroundings, etc."
              className={`${inputClass} resize-y`}
            />

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Provide a clear and useful description for potential buyers.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          LOCATION & BUILDER
      ====================================================== */}

      <section className={`${sectionClass} mt-6`}>
        <div className="mb-6 flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-emerald-100
              text-emerald-600
              dark:bg-emerald-900/40
              dark:text-emerald-400
            "
          >
            <MapPin size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Location & Builder
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Where is this property located?
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* City */}
          <div>
            <label className={labelClass}>
              City
            </label>

            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className={inputClass}
            />
          </div>

          {/* Locality */}
          <div>
            <label className={labelClass}>
              Locality
            </label>

            <Input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              placeholder="Enter locality"
              className={inputClass}
            />
          </div>

          {/* Builder */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Builder
            </label>

            <Input
              type="text"
              name="builder"
              value={formData.builder}
              onChange={handleChange}
              placeholder="Builder or developer name"
              className={inputClass}
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          PROPERTY DETAILS
      ====================================================== */}

      <section className={`${sectionClass} mt-6`}>
        <div className="mb-6 flex items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-amber-100
              text-amber-600
              dark:bg-amber-900/40
              dark:text-amber-400
            "
          >
            <ClipboardCheck size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Property Details
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Add pricing, size and property specifications.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Price */}
          <div>
            <label className={labelClass}>
              Price
            </label>

            <div className="relative">
              <CircleDollarSign
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="number"
                name="price"
                min="0"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          {/* Area */}
          <div>
            <label className={labelClass}>
              Area (sq.ft)
            </label>

            <div className="relative">
              <Ruler
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="number"
                name="area"
                min="0"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g. 1200"
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <label className={labelClass}>
              Bedrooms
            </label>

            <div className="relative">
              <BedDouble
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="number"
                name="bedrooms"
                min="0"
                value={formData.bedrooms}
                onChange={handleChange}
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <label className={labelClass}>
              Bathrooms
            </label>

            <div className="relative">
              <Bath
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="number"
                name="bathrooms"
                min="0"
                value={formData.bathrooms}
                onChange={handleChange}
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          {/* Furnishing */}
          <div>
            <label className={labelClass}>
              Furnishing
            </label>

            <div className="relative">
              <Sofa
                size={18}
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <select
                name="furnishing"
                value={formData.furnishing}
                onChange={handleChange}
                className={`${inputClass} pl-10`}
              >
                <option>Unfurnished</option>
                <option>Semi Furnished</option>
                <option>Fully Furnished</option>
              </select>
            </div>
          </div>

          {/* Condition */}
          <div>
            <label className={labelClass}>
              Condition
            </label>

            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Ready to Move</option>
              <option>Under Construction</option>
            </select>
          </div>
        </div>
      </section>


      {/* =====================================================
          AMENITIES
      ====================================================== */}

      <section className={`${sectionClass} mt-6`}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Amenities
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Select everything included with this property.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {amenitiesList.map((amenity) => {
            const selected =
              (formData.amenities || []).includes(amenity);

            return (
              <label
                key={amenity}
                className={`
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  p-4
                  transition-all
                  duration-200

                  ${
                    selected
                      ? `
                        border-blue-400
                        bg-blue-50
                        text-blue-700
                        shadow-sm

                        dark:border-blue-600
                        dark:bg-blue-900/30
                        dark:text-blue-400
                      `
                      : `
                        border-slate-200
                        bg-slate-50
                        text-slate-700
                        hover:border-blue-300
                        hover:bg-blue-50

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-300
                        dark:hover:border-blue-600
                        dark:hover:bg-blue-900/20
                      `
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    handleAmenityChange(amenity)
                  }
                  className="
                    h-5
                    w-5
                    cursor-pointer
                    rounded
                    border-slate-300
                    text-blue-600
                    focus:ring-blue-500

                    dark:border-slate-600
                    dark:bg-slate-700
                  "
                />

                <span className="font-medium">
                  {amenity}
                </span>

                {selected && (
                  <Check
                    size={18}
                    className="ml-auto text-blue-600 dark:text-blue-400"
                  />
                )}
              </label>
            );
          })}
        </div>
      </section>


      {/* =====================================================
          IMAGES
      ====================================================== */}

      <section className={`${sectionClass} mt-6`}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Property Images
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Upload high-quality images of the property.
            </p>
          </div>

          {imagePreviews.length > 0 && (
            <span
              className="
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-sm
                font-semibold
                text-blue-700

                dark:bg-blue-900/40
                dark:text-blue-400
              "
            >
              {imagePreviews.length}{" "}
              {imagePreviews.length === 1
                ? "Image"
                : "Images"}
            </span>
          )}
        </div>

        {/* Upload Area */}

        <label
          className="
            group
            flex
            min-h-[180px]
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-3xl
            border-2
            border-dashed
            border-slate-300
            bg-slate-50
            p-8
            text-center
            transition-all
            duration-300
            hover:border-blue-500
            hover:bg-blue-50

            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:border-blue-500
            dark:hover:bg-blue-900/20
          "
        >
          <div
            className="
              mb-4
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              text-blue-600
              transition-transform
              duration-300
              group-hover:scale-110

              dark:bg-blue-900/40
              dark:text-blue-400
            "
          >
            <Upload size={30} />
          </div>

          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Click to upload images
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            JPG, PNG or WEBP
          </p>

          <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            You can select multiple images
          </p>

          <input
            hidden
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>


        {/* Image Previews */}

        {imagePreviews.length > 0 && (
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <ImagePlus
                size={18}
                className="text-blue-600 dark:text-blue-400"
              />

              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Selected Images
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {imagePreviews.map((image, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-sm

                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >
                  <img
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="
                      h-40
                      w-full
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  {/* Image number */}

                  <div
                    className="
                      absolute
                      left-2
                      top-2
                      rounded-full
                      bg-black/60
                      px-2
                      py-1
                      text-xs
                      font-medium
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    {index + 1}
                  </div>

                  {/* Remove */}

                  <button
                    type="button"
                    onClick={() =>
                      removeImage?.(index)
                    }
                    aria-label={`Remove image ${index + 1}`}
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-red-600
                      text-white
                      shadow-lg
                      transition-all
                      duration-200
                      hover:scale-110
                      hover:bg-red-700
                    "
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>


      {/* =====================================================
          PUBLISHING
      ====================================================== */}

      <section className={`${sectionClass} mt-6`}>
        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-yellow-100
                text-yellow-600

                dark:bg-yellow-900/30
                dark:text-yellow-400
              "
            >
              <Star size={22} />
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Featured Property
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Highlight this property in featured listings.
              </p>
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="
                h-5
                w-5
                cursor-pointer
                rounded
                border-slate-300
                text-blue-600
                focus:ring-blue-500

                dark:border-slate-600
                dark:bg-slate-700
              "
            />

            <span className="font-medium text-slate-700 dark:text-slate-300">
              Mark as Featured
            </span>
          </label>
        </div>
      </section>


      {/* =====================================================
          SUBMIT
      ====================================================== */}

      <div
        className="
          mt-6
          flex
          flex-col-reverse
          gap-3
          sm:flex-row
          sm:justify-end
        "
      >
        <button
          type="submit"
          disabled={loading}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            px-8
            py-3
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:translate-y-0
          "
        >
          {loading ? (
            <>
              <span
                className="
                  h-5
                  w-5
                  animate-spin
                  rounded-full
                  border-2
                  border-white/30
                  border-t-white
                "
              />

              Saving...
            </>
          ) : (
            <>
              <Check size={18} />

              Save Property
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;