import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useStoreContext } from "../contextApi/ContextApi";

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useStoreContext();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <FiSun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <FiMoon className="w-5 h-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
