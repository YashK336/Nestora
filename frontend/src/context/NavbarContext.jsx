import { createContext, useContext, useState } from "react";

const NavbarContext = createContext(null);

export const NavbarProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const openMenu = (menu) => {
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <NavbarContext.Provider
      value={{
        activeMenu,
        openMenu,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbar must be used within NavbarProvider");
  }

  return context;
};
