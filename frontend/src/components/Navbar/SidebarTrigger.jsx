import { FaBars } from "react-icons/fa";
import { useNavbar } from "../../context/NavbarContext";

const SidebarTrigger = ({ sticky = false }) => {
  const { toggleMenu } = useNavbar();

  const handleOpen = () => {
    toggleMenu("sidebar");
  };

  return (
    <button
      type="button"
      aria-label="Open menu"
      onClick={handleOpen}
      className={`
        relative
        z-[60]
        flex
        h-10
        w-10
        shrink-0
        cursor-pointer
        items-center
        justify-center
        rounded-full
        transition-colors
        duration-200

        ${
          sticky
            ? `
              text-gray-700
              hover:bg-gray-100
              dark:text-gray-300
              dark:hover:bg-slate-800
            `
            : `
              text-white
              hover:bg-white/10
            `
        }
      `}
    >
      <FaBars className="text-xl" />
    </button>
  );
};

export default SidebarTrigger;