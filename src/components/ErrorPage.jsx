import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-slate-50 dark:bg-[#0b1120] p-6 relative">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center text-3xl mx-auto shadow-sm">
          <FaExclamationTriangle />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Oops! Page Not Found
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">
            {message || "The link or page you are looking for might have expired, been removed, or is temporarily unavailable."}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
        >
          <FiArrowLeft className="text-base" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;