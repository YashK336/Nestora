import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";

import { contactInfo } from "../../data/contactInfo";
import { useNavbar } from "../../context/NavbarContext";
import useClickOutside from "../../hooks/useClickOutside";

const ContactDropdown = ({ sticky = false }) => {
  const { activeMenu, openMenu, closeMenu } = useNavbar();

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, closeMenu);

  const isOpen = activeMenu === "contact";

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => openMenu("contact")}
      onMouseLeave={closeMenu}
    >
      <button
        className={`group flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
          sticky
            ? "text-gray-700 hover:bg-gray-100"
            : "text-white hover:bg-white/10"
        }`}
      >
        <FaPhoneAlt />
        <span>Contact</span>

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
              y: 15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.22,
            }}
            className="absolute right-0 mt-4 w-80 overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="border-b p-6">
              <h3 className="text-lg font-semibold">Customer Support</h3>
              <p className="mt-1 text-sm text-gray-500">We're happy to help.</p>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex gap-4">
                <FaPhoneAlt className="mt-1 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Toll Free</p>
                  <p className="font-semibold">{contactInfo.tollFree}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaGlobe className="mt-1 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">International</p>
                  <p className="font-semibold">{contactInfo.international}</p>
                </div>
              </div>

              <button className="mt-2 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
                Request Call Back
              </button>

              <p className="text-center text-xs text-gray-400">
                {contactInfo.workingHours}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactDropdown;
