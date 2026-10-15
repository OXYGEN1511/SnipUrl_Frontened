import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FiLogOut, FiLayout, FiLogIn, FiUserPlus } from "react-icons/fi";
import { useStoreContext } from "../contextApi/ContextApi";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const location = useLocation();
  const path = location.pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group"
            onClick={() => setNavbarOpen(false)}
          >
            <Logo size="md" showText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800 shadow-inner">
            <Link
              to="/"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                path === "/"
                  ? "bg-white dark:bg-slate-800 text-[#0066FF] dark:text-blue-400 shadow-sm font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                path === "/about"
                  ? "bg-white dark:bg-slate-800 text-[#0066FF] dark:text-blue-400 shadow-sm font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
              }`}
            >
              About
            </Link>
            {token && (
              <Link
                to="/dashboard"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  path === "/dashboard"
                    ? "bg-white dark:bg-slate-800 text-[#0066FF] dark:text-blue-400 shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                }`}
              >
                <FiLayout className="text-xs" />
                <span>Dashboard</span>
              </Link>
            )}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors duration-150 flex items-center gap-1.5"
                >
                  <FiLogIn className="text-base" />
                  <span>Log In</span>
                </Link>
                <Link
                  to="/register"
                  className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm font-semibold shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                >
                  <FiUserPlus className="text-base" />
                  <span>Get Started Free</span>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-[#0066FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-150 flex items-center gap-1.5 border border-blue-200/50 dark:border-blue-800/50"
                >
                  <FiLayout className="text-base" />
                  <span>My Workspace</span>
                </Link>
                <button
                  onClick={onLogOutHandler}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-all duration-150 flex items-center gap-1.5 border border-rose-200/50 dark:border-rose-800/50"
                >
                  <FiLogOut className="text-base" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-[#0066FF] hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {navbarOpen ? (
                <RxCross2 className="text-2xl" />
              ) : (
                <IoIosMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {navbarOpen && (
        <div className="md:hidden glass-panel border-t border-slate-200/80 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              onClick={() => setNavbarOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                path === "/"
                  ? "bg-blue-50 dark:bg-slate-800 text-[#0066FF] dark:text-blue-400 font-semibold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setNavbarOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                path === "/about"
                  ? "bg-blue-50 dark:bg-slate-800 text-[#0066FF] dark:text-blue-400 font-semibold"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
              }`}
            >
              About
            </Link>
            {token && (
              <Link
                to="/dashboard"
                onClick={() => setNavbarOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                  path === "/dashboard"
                    ? "bg-blue-50 dark:bg-slate-800 text-[#0066FF] dark:text-blue-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                Dashboard
              </Link>
            )}
          </nav>

          <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-col gap-2">
            {!token ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setNavbarOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setNavbarOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold shadow-md shadow-blue-500/25"
                >
                  Get Started Free
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  setNavbarOpen(false);
                  onLogOutHandler();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-semibold hover:bg-rose-100 dark:hover:bg-rose-900/40"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;