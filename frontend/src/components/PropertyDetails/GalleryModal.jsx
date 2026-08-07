import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const GalleryModal = ({
  images,
  selectedIndex,
  setSelectedIndex,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose, setSelectedIndex]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95"
      >
        <button
          onClick={onClose}
          className="absolute right-8 top-8 rounded-full bg-white/10 p-4 text-white hover:bg-white/20"
        >
          <FaTimes />
        </button>

        <div className="absolute left-8 top-8 text-lg font-semibold text-white">
          {selectedIndex + 1} / {images.length}
        </div>

        <div className="flex h-full items-center justify-center">
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex]}
            alt=""
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80vh] rounded-2xl"
          />
        </div>

        <button
          onClick={() =>
            setSelectedIndex(
              selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() =>
            setSelectedIndex((selectedIndex + 1) % images.length)
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`overflow-hidden rounded-xl border-2 ${
                selectedIndex === index
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <img src={image} alt="" className="h-20 w-28 object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
