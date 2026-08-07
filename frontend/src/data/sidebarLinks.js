import {
    FaHome,
    FaBuilding,
    FaKey,
    FaStore,
    FaCity,
    FaInfoCircle,
    FaPhoneAlt,
    FaQuestionCircle,
    FaShieldAlt,
  } from "react-icons/fa";
  
  export const sidebarSections = [
    {
      title: "Explore",
      links: [
        { label: "Home", icon: FaHome },
        { label: "Buy", icon: FaBuilding },
        { label: "Rent", icon: FaKey },
        { label: "Commercial", icon: FaStore },
        { label: "Plots", icon: FaCity },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", icon: FaInfoCircle },
        { label: "Contact Us", icon: FaPhoneAlt },
        { label: "Help Center", icon: FaQuestionCircle },
        { label: "Privacy Policy", icon: FaShieldAlt },
      ],
    },
  ];