import { useState } from "react";
import { motion } from "framer-motion";
import GalleryModal from "./GalleryModal";

const ImageGallery = ({ property }) => {
  const images =
    property?.images?.length > 0
      ? property.images
      : ["https://placehold.co/1200x800/e2e8f0/64748b?text=No+Image"];

  const [openGallery, setOpenGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">

        {/* Main Image */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <img
              src={images[selectedIndex]}
              alt={property?.title || "Property"}
              onClick={() => setOpenGallery(true)}
              className="
                h-[250px]
                w-full
                cursor-pointer
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.02]
                sm:h-[350px]
                md:h-[450px]
                lg:h-[520px]
              "
            />

            {/* Image count */}
            <div
              className="
                absolute
                bottom-4
                right-4
                rounded-full
                bg-black/60
                px-4
                py-2
                text-sm
                font-medium
                text-white
                backdrop-blur-sm
              "
            >
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div
            className="
              flex
              gap-3
              overflow-x-auto
              pb-1
              lg:col-span-4
              lg:flex-col
              lg:overflow-visible
            "
          >
            {images.slice(0, 2).map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`
                  group
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  border-2
                  transition-all
                  duration-300
                  lg:rounded-2xl
                  ${
                    selectedIndex === index
                      ? "border-blue-600 shadow-lg dark:border-blue-400"
                      : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
                  }
                `}
              >
                <img
                  src={image}
                  alt=""
                  className="
                    h-24
                    w-32
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    sm:h-28
                    sm:w-40
                    lg:h-full
                    lg:min-h-[250px]
                    lg:w-full
                  "
                />

                {/* Remaining images */}
                {index === 1 && images.length > 2 && (
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/60
                      text-2xl
                      font-bold
                      text-white
                      backdrop-blur-[2px]
                    "
                  >
                    +{images.length - 2}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Gallery Modal */}
      {openGallery && (
        <GalleryModal
          images={images}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          onClose={() => setOpenGallery(false)}
        />
      )}
    </>
  );
};

export default ImageGallery;