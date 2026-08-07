import { motion } from "framer-motion";

import Logo from "./Logo";
import ContactDropdown from "./ContactDropdown";
import ActivityDropdown from "./ActivityDropdown";
import Sidebar from "./Sidebar";
import MiniSearch from "./MiniSearch";
import Container from "../Common/Container";

const StickyNavbar = ({ mode }) => {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.98,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        bg-blue-100
        shadow-lg
      "
    >
      <Container>
        <div className="flex w-full min-w-0 flex-col gap-3 py-3 md:flex-row md:items-center md:gap-5">
          
          {/* Top row on mobile */}
          <div className="flex w-full items-center justify-between md:w-auto md:flex-shrink-0">
            <Logo sticky />

            {/* Mobile menu */}
            <div className="lg:hidden">
              <Sidebar sticky />
            </div>
          </div>

          {/* Search */}
          <div className="w-full min-w-0 flex-1">
            <MiniSearch />
          </div>

          {/* Desktop right controls */}
          <div className="hidden flex-shrink-0 items-center gap-4 lg:flex xl:gap-6">
            <ContactDropdown sticky />
            <ActivityDropdown sticky />
            <Sidebar sticky />
          </div>
        </div>
      </Container>
    </motion.header>
  );
};

export default StickyNavbar;