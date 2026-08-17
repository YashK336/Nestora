import { motion } from "framer-motion";

import Logo from "./Logo";
import ContactDropdown from "./ContactDropdown";
import ActivityDropdown from "./ActivityDropdown";
import SidebarTrigger from "./SidebarTrigger";
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
          transition-colors
          duration-300
          dark:bg-slate-900
          dark:shadow-black/30
        "
      >
        <Container>
          <div
            className="
              flex
              w-full
              min-w-0
              items-center
              gap-3
              py-3
              md:gap-5
            "
          >

            {/* Logo */}
            <div className="shrink-0">
              <Logo sticky />
            </div>

            {/* Search */}
            <div className="min-w-0 flex-1">
              <MiniSearch />
            </div>

            {/* Desktop controls */}
            <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
              <ContactDropdown sticky />
              <ActivityDropdown sticky />
            </div>

            {/* Sidebar trigger */}
            <SidebarTrigger sticky />
          </div>
        </Container>
      </motion.header>
  );
};

export default StickyNavbar;