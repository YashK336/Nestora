import { AnimatePresence } from "framer-motion";

import StickyNavbar from "./StickyNavbar";
import TransparentNavbar from "./TransparentNavbar";

const Navbar = ({ mode = "home", isSticky }) => {
  return (
    <AnimatePresence mode="wait">
      {isSticky ? (
        <StickyNavbar key="sticky" mode={mode}/>
      ) : (
        <TransparentNavbar key="transparent" mode={mode} />
      )}
    </AnimatePresence>
  );
};

export default Navbar;