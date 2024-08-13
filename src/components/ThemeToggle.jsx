import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import "../styles/animations.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [animateIcon, setAnimateIcon] = useState("");

  const handleToggleTheme = () => {
    setAnimateIcon(theme === "dark" ? "moon-animation" : "sun-animation");
    toggleTheme();

    // Reset animation class after it finishes
    setTimeout(() => {
      setAnimateIcon("");
    }, 500);
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="p-2 rounded-full focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className={`w-6 h-6 text-gray-200 ${animateIcon}`} />
      ) : (
        <Moon className={`w-6 h-6 text-gray-800 ${animateIcon}`} />
      )}
    </button>
  );
};

export default ThemeToggle;
