import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Description = ({ property }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
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
            text-gray-600
            leading-8
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
        "
      >
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>

    </section>
  );
};

export default Description;