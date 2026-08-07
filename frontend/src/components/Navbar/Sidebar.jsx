import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { sidebarSections } from "../../data/sidebarLinks";
import { useNavbar } from "../../context/NavbarContext";

const Sidebar = ({ sticky = false }) => {
  const { activeMenu, toggleMenu, closeMenu } = useNavbar();
  const isOpen = activeMenu === "sidebar";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => toggleMenu("sidebar")}
        className={`rounded-full p-3 transition hover:bg-white/10 ${
          sticky ? "text-gray-700 hover:bg-gray-100" : "text-white"
        }`}
      >
        <FaBars className="text-xl" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
              className="fixed right-0 top-0 z-50 h-screen w-full max-w-[360px] overflow-y-auto bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <h2 className="text-2xl font-bold">Nestora</h2>
                  <p className="text-sm text-gray-500">Real Estate</p>
                </div>

                <button
                  onClick={closeMenu}
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="m-6 rounded-2xl bg-blue-600 p-6 text-white">
                <h3 className="text-xl font-semibold">Welcome</h3>
                <p className="mt-2 text-blue-100">
                  Login to save searches, shortlist properties, and contact
                  sellers.
                </p>
                <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-blue-600">
                  Login / Register
                </button>
              </div>

              <div className="px-4 pb-10">
                {sidebarSections.map((section) => (
                  <div key={section.title} className="mb-8">
                    <h4 className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                      {section.title}
                    </h4>

                    {section.links.map((item) => {
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.label}
                          onClick={closeMenu}
                          className="group flex w-full items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300 hover:translate-x-1 hover:bg-blue-50"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                              <Icon />
                            </div>
                            <span className="font-medium">{item.label}</span>
                          </div>

                          <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
