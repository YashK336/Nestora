export const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };
  
  export const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };