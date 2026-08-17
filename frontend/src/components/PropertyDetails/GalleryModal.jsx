import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const GalleryModal = ({
  images = [],
  selectedIndex,
  setSelectedIndex,
  onClose,
}) => {
  useEffect(() => {
    if (!images.length) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex(
          (prev) => (prev + 1) % images.length
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (prev) =>
            prev === 0
              ? images.length - 1
              : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent background page scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [images.length, onClose, setSelectedIndex]);

  if (!images.length) return null;

  const previousImage = () => {
    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex(
      (selectedIndex + 1) % images.length
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="
          fixed
          inset-0
          z-[100]
          bg-black/95
          backdrop-blur-sm
        "
        onClick={onClose}
      >

        {/* Top Bar */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-20
            flex
            items-center
            justify-between
            px-4
            py-4
            sm:px-8
            sm:py-6
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Counter */}

          <div
            className="
              rounded-full
              bg-white/10
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
            "
          >
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Close */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition
              hover:bg-white/20
              active:scale-95
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* Main Image Area */}

        <div
          className="
            flex
            h-full
            items-center
            justify-center
            px-4
            pb-32
            pt-20
            sm:px-16
            lg:px-24
          "
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex]}
            alt=""
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              max-h-[70vh]
              max-w-full
              rounded-xl
              object-contain
              shadow-2xl
              sm:max-h-[75vh]
              sm:rounded-2xl
            "
          />
        </div>

        {/* Previous */}

        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
            className="
              absolute
              left-3
              top-1/2
              z-20
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/15
              text-white
              backdrop-blur-md
              transition-all
              hover:bg-white/25
              active:scale-95
              sm:left-6
              sm:h-12
              sm:w-12
            "
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Next */}

        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/15
              text-white
              backdrop-blur-md
              transition-all
              hover:bg-white/25
              active:scale-95
              sm:right-6
              sm:h-12
              sm:w-12
            "
          >
            <FaChevronRight />
          </button>
        )}

        {/* Thumbnails */}

        {images.length > 1 && (
          <div
            className="
              absolute
              bottom-4
              left-0
              right-0
              z-20
              flex
              justify-start
              gap-2
              overflow-x-auto
              px-4
              pb-1
              sm:bottom-6
              sm:justify-center
              sm:px-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((image, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View image ${index + 1}`}
                className={`
                  shrink-0
                  overflow-hidden
                  rounded-lg
                  border-2
                  transition-all
                  duration-200
                  ${
                    selectedIndex === index
                      ? "border-blue-500 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }
                `}
              >
                <img
                  src={image}
                  alt=""
                  className="
                    h-14
                    w-20
                    object-cover
                    sm:h-16
                    sm:w-24
                  "
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;