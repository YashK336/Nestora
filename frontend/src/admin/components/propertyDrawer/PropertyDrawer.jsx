import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import PropertyGallery from "./PropertyGallery";
import DrawerHeader from "./DrawerHeader";
import PropertyStats from "./PropertyStats";
import PropertyAmenities from "./PropertyAmenities";
import PropertyOverview from "./PropertyOverview";
import StickyActions from "./StickyActions";
import { useEffect, useState } from "react";
import DrawerSkeleton from "../skeletons/DrawerSkeleton";
import {
  containerVariants,
  sectionVariants,
} from "../../utils/drawerAnimations";

const PropertyDrawer = ({
  open,
  property,
  onClose,
  onEdit,
  onDelete,
  loading,
}) => {
  const [showGallery, setShowGallery] = useState(false);
  
  useEffect(() => {
    if (!open) {
      setShowGallery(false);
      return;
    }
  
    const timer = setTimeout(() => {
      setShowGallery(true);
    }, 320);
  
    return () => clearTimeout(timer);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            onClose();
        }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () =>
        window.removeEventListener(
            "keydown",
            handleKeyDown
        );
}, [open, onClose]);
useEffect(() => {
  if (open)
      document.body.style.overflow = "hidden";
  return () => {
      document.body.style.overflow = "";
  };

}, [open]);
  if (!open || !property) return null;

  return (
    <AnimatePresence>
      {open && property && (

<>

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
    />

    <motion.aside
        initial={{
          x: 500,
          opacity: .6
      }}
      animate={{
          x:0,
          opacity:1
      }}
      exit={{
          x:500,
          opacity:.6
      }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 24,
          mass: 0.9,
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-2xl flex-col bg-gradient-to-b from-slate-50 to-white shadow-2xl"
    > 
    <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:.15 }}
    >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 overflow-y-auto bg-slate-50"
        >
        {<DrawerSkeleton /> && (
          <PropertyGallery images={property.images} />
        )}
          <DrawerHeader
            property={property}
          />
          <div className="px-8 py-7">
          
            <motion.div variants={sectionVariants}>
              <PropertyStats property={property} />
            </motion.div>
            
            <motion.div variants={sectionVariants}>
              <PropertyAmenities amenities={property.amenities} />
            </motion.div>
            
            <motion.div variants={sectionVariants}>
              <PropertyOverview property={property} />
            </motion.div>
            <motion.section
              variants={sectionVariants}
              className="mx-6 mt-6 mb-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
            >
                <h2 className="text-2xl font-bold text-slate-900">
                  Description
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {property.description ||
                    "No description available."}
                </p>
              </motion.section>
            
            </div>
        </motion.div>
        </motion.div>
      </motion.aside>
    </>
      )}
    </AnimatePresence>
  );
};
export default PropertyDrawer;