import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const hasError = Boolean(errors && errors[id]?.message);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={id}
        className={`text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 ${
          className || ""
        }`}
      >
        {label}
        {required && <span className="text-rose-500 ml-1">*</span>}
      </label>

      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          id={id}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 ${
            isPassword ? "pr-11" : ""
          } text-sm rounded-xl outline-none transition-all duration-200 bg-slate-50/60 dark:bg-slate-800/80 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border ${
            hasError
              ? "border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10"
              : "border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-blue-500 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-blue-500/10"
          } ${className || ""}`}
          {...register(id, {
            required: { value: required, message },
            minLength: min
              ? {
                  value: min,
                  message: `Minimum ${min} characters required`,
                }
              : undefined,
            pattern:
              type === "email"
                ? {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  }
                : type === "url"
                  ? {
                      value:
                        /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                      message:
                        "Please enter a valid URL (e.g. https://example.com)",
                    }
                  : undefined,
          })}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-slate-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {hasError && (
        <p className="text-xs font-medium text-rose-500 mt-0.5">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
};

export default TextField;
