import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
      className="flex h-10 w-10 items-center justify-center rounded-full border bg-white dark:bg-slate-800"
    >
      {darkMode ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
};
export default ThemeToggle;
