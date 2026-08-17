import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Description = ({ property }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="
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
        sm:p-8
      "
    >
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        About this Property
      </h2>

      <AnimatePresence mode="wait">
        <motion.p
          key={expanded}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={`
            leading-8
            text-gray-600
            dark:text-slate-300
            ${expanded ? "" : "line-clamp-4"}
          `}
        >
          {property.description}
        </motion.p>
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="
          mt-5
          font-semibold
          text-blue-600
          transition
          hover:text-blue-700
          dark:text-blue-400
          dark:hover:text-blue-300
        "
      >
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </section>
  );
};

export default Description;