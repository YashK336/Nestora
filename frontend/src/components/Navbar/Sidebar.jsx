import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

import { sidebarSections } from "../../data/sidebarLinks";
import { useNavbar } from "../../context/NavbarContext";
import ThemeToggle from "../ThemeToggle";

const Sidebar = () => {
  const { activeMenu, closeMenu } = useNavbar();

  const isOpen = activeMenu === "sidebar";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9998]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <div
            className="
              absolute
              inset-0
              bg-black/50
              backdrop-blur-sm
            "
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeMenu();
              }
            }}
          />

          {/* SIDEBAR */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 32,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              absolute
              right-0
              top-0
              z-10
              h-screen
              w-full
              max-w-[360px]
              overflow-y-auto
              bg-white
              shadow-2xl
              dark:bg-slate-800
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-gray-200
                p-6
                dark:border-slate-700
              "
            >
              <div>
                <h2 className="text-2xl font-bold dark:text-white">
                  Nestora
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Real Estate
                </p>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="
                  rounded-full
                  p-2
                  transition
                  hover:bg-gray-100
                  dark:hover:bg-slate-700
                "
              >
                <FaTimes />
              </button>
            </div>

            {/* WELCOME */}
            <div className="m-6 rounded-2xl bg-blue-600 p-6 text-white">
              <h3 className="text-xl font-semibold">
                Welcome
              </h3>

              <p className="mt-2 text-blue-100">
                Login to save searches, shortlist properties,
                and contact sellers.
              </p>

              <button
                type="button"
                className="
                  mt-5
                  w-full
                  rounded-xl
                  bg-white
                  py-3
                  font-semibold
                  text-blue-600
                "
              >
                Login / Register
              </button>
            </div>

            {/* THEME */}
            <div
              className="
                mx-6
                mb-6
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-4
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Appearance
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Switch between light and dark mode
                </p>
              </div>

              <ThemeToggle />
            </div>

            {/* LINKS */}
            <div className="px-4 pb-10">
              {sidebarSections.map((section) => (
                <div
                  key={section.title}
                  className="mb-8"
                >
                  <h4
                    className="
                      mb-3
                      px-3
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-gray-400
                    "
                  >
                    {section.title}
                  </h4>

                  {section.links.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        type="button"
                        key={item.label}
                        className="
                          group
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-2xl
                          px-4
                          py-4
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:bg-blue-50
                          dark:hover:bg-blue-900/40
                        "
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              bg-blue-100
                              text-blue-600
                              dark:bg-blue-900/40
                              dark:text-blue-400
                            "
                          >
                            <Icon />
                          </div>

                          <span className="font-medium dark:text-white">
                            {item.label}
                          </span>
                        </div>

                        <FaArrowRight
                          className="
                            text-gray-400
                            transition
                            group-hover:translate-x-1
                            group-hover:text-blue-600
                          "
                        />
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;