import { useEffect, useState } from "react";

const useStickyNavbar = (targetRef, offset = 20) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const { top } = targetRef.current.getBoundingClientRect();

      setIsSticky(top <= offset);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef, offset]);

  return isSticky;
};

export default useStickyNavbar;