import { AnimatePresence } from "framer-motion";

import StickyNavbar from "./StickyNavbar";
import TransparentNavbar from "./TransparentNavbar";
import Sidebar from "./Sidebar";

const Navbar = ({ mode = "home", isSticky }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {isSticky ? (
          <StickyNavbar key="sticky" mode={mode} />
        ) : (
          <TransparentNavbar key="transparent" mode={mode} />
        )}
      </AnimatePresence>

      {/* Sidebar lives OUTSIDE the animated navbar */}
      <Sidebar />
    </>
  );
};

export default Navbar;