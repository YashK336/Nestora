import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaUserCircle,
  FaArrowRight,
} from "react-icons/fa";

import { activityLinks } from "../../data/activityLinks";
import { useNavbar } from "../../context/NavbarContext";
import useClickOutside from "../../hooks/useClickOutside";

const ActivityDropdown = ({ sticky = false }) => {
  const { activeMenu, openMenu, closeMenu } = useNavbar();

  const dropdownRef = useRef(null);

  const isOpen = activeMenu === "activity";

  useClickOutside(dropdownRef, closeMenu, isOpen);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => openMenu("activity")}
      onMouseLeave={closeMenu}
    >
      <button
        className={`group flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
          sticky
            ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900/40"
            : "text-white hover:bg-white/10 dark:text-white dark:hover:bg-gray-900/40"
        }`}
      >
        <FaUserCircle />
        <span>My Activity</span>
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.22,
            }}
            className="absolute right-0 mt-4 w-[360px] overflow-hidden rounded-3xl bg-white 
            shadow-[0_20px_60px_rgba(0,0,0,0.18)] dark:bg-slate-800 dark:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="border-b p-6">
              <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition 
              hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                Login / Register
              </button>
            </div>

            <div className="p-3">
              {activityLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    className="group flex w-full items-center justify-between rounded-2xl p-4 transition-all duration-300 hover:bg-blue-50 
                    dark:hover:bg-blue-900/40"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 
                      dark:bg-blue-900/40 dark:text-blue-400">
                        <Icon />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                      </div>
                    </div>

                    <FaArrowRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600 
                    dark:text-gray-400 dark:group-hover:text-blue-400" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActivityDropdown;
