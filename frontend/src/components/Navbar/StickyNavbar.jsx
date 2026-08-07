import { motion } from "framer-motion";

import Logo from "./Logo";
import ContactDropdown from "./ContactDropdown";
import ActivityDropdown from "./ActivityDropdown";
import Sidebar from "./Sidebar";
import MiniSearch from "./MiniSearch";
import Container from "../Common/Container";

const StickyNavbar = ({mode}) => {
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
        top-0
        left-0
        right-0
        z-50
        bg-blue-100
        shadow-lg
      "
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}

        <Logo sticky />

        {/* Mini Search */}

        {
          mode === "home" ? (
            <MiniSearch />
          ) : (
            <MiniSearch />
          )
        }

        {/* Right */}

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
          <div className="hidden lg:block">
          <ContactDropdown sticky />
          </div>
          <div className="hidden lg:block">
          <ActivityDropdown sticky />
          </div>
          <div className="hidden lg:block">
          <Sidebar sticky />
          </div>
        </div>

      </Container>
    </motion.header>
  );
};

export default StickyNavbar;