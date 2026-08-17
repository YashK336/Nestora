import { motion } from "framer-motion";

import Container from "../Common/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MiniSearch from "./MiniSearch";
import ContactDropdown from "./ContactDropdown";
import ActivityDropdown from "./ActivityDropdown";
import PostPropertyButton from "./PostPropertyButton";
import SidebarTrigger from "./SidebarTrigger";

const TransparentNavbar = ({ mode }) => {
  return (
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -30,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          absolute
          left-0
          top-0
          z-50
          w-full
        "
      >
        <Container className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Logo />

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">

            {/* Navigation / Search */}
            {mode === "home" ? (
              <div className="hidden xl:block">
                <NavLinks />
              </div>
            ) : (
              <div className="hidden md:block">
                <MiniSearch />
              </div>
            )}

            {/* Contact */}
            <div className="hidden lg:block">
              <ContactDropdown />
            </div>

            {/* Activity */}
            <div className="hidden lg:block">
              <ActivityDropdown />
            </div>

            {/* Post Property */}
            <div className="hidden lg:block">
              <PostPropertyButton />
            </div>

            {/* Sidebar */}
            <SidebarTrigger />
          </div>
        </Container>
      </motion.header>
  );
};
export default TransparentNavbar;