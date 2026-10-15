import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../contextApi/ContextApi";
import { FiLogIn } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";
import Logo from "./Logo";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/login",
        data
      );
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Welcome back! Login successful.");
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Invalid username or password. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-[#0b1120]">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl shadow-blue-500/5">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group justify-center">
              <Logo size="lg" showText={true} />
            </Link>

            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Enter your credentials to access your link dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(loginHandler)} className="space-y-5">
            <TextField
              label="Username"
              required
              id="username"
              type="text"
              message="Username is required"
              placeholder="Enter your username"
              register={register}
              errors={errors}
            />

            <TextField
              label="Password"
              required
              id="password"
              type="password"
              message="Password is required"
              placeholder="••••••••"
              register={register}
              min={6}
              errors={errors}
            />

            <button
              disabled={loader}
              type="submit"
              className="w-full mt-2 py-3 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loader ? (
                <div className="flex items-center gap-2">
                  <RotatingLines
                    visible={true}
                    height="18"
                    width="18"
                    strokeColor="white"
                    strokeWidth="4"
                    animationDuration="0.75"
                  />
                  <span>Signing in...</span>
                </div>
              ) : (
                <>
                  <FiLogIn className="text-base" />
                  <span>Sign In</span>
                </>
              )}
            </button>

            <div className="pt-4 text-center border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#0066FF] hover:text-[#0052CC] underline"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;