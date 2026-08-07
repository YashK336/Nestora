import { motion } from "framer-motion";
import Container from "../Common/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MiniSearch from "./MiniSearch";
import ContactDropdown from "./ContactDropdown";
import ActivityDropdown from "./ActivityDropdown";
import PostPropertyButton from "./PostPropertyButton";
import Sidebar from "./Sidebar";

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
      className="absolute top-0 left-0 z-50 w-full"
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">

          {mode === "home" ? (
            <div className="hidden xl:block">
              <NavLinks />
            </div>
          ) : (
            <div className="hidden md:block">
              <MiniSearch />
            </div>
          )}

          <div className="hidden lg:block">
            <ContactDropdown />
          </div>

          <div className="hidden lg:block">
            <ActivityDropdown />
          </div>

          <div className="hidden lg:block">
            <PostPropertyButton />
          </div>

          <Sidebar />

        </div>
      </Container>
    </motion.header>
  );
};

export default TransparentNavbar;
