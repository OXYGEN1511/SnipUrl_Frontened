import React from "react";

const Logo = ({ size = "md", className = "", showText = false, textClassName = "" }) => {
  const sizeClasses = {
    xs: "w-6 h-6 rounded-lg",
    sm: "w-8 h-8 rounded-lg",
    md: "w-10 h-10 rounded-xl",
    lg: "w-12 h-12 rounded-2xl",
    xl: "w-16 h-16 rounded-3xl",
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        alt="SnipUrl Logo"
        className={`${currentSizeClass} object-cover shadow-sm shadow-blue-500/25 ring-1 ring-blue-500/10 flex-shrink-0 transition-transform duration-200 group-hover:scale-105`}
      />
      {showText && (
        <div className="flex items-center gap-1.5">
          <span className={`text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight ${textClassName}`}>
            Snip<span className="text-[#0066FF]">Url</span>
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950/60 text-[#0066FF] dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
            PRO
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
