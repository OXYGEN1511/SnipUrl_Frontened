import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";
import { FiUserPlus } from "react-icons/fi";
import { RotatingLines } from "react-loader-spinner";
import Logo from "./Logo";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      await api.post("/api/auth/public/register", data);
      reset();
      toast.success("Account created successfully! Please sign in.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(
        "Registration failed. Please check your details and try again.",
      );
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
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-4 group justify-center"
            >
              <Logo size="lg" showText={true} />
            </Link>

            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Create your account
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Start shortening links and analyzing clicks with SnipUrl
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(registerHandler)} className="space-y-4">
            <TextField
              label="Username"
              required
              id="username"
              type="text"
              message="Username is required"
              placeholder="e.g. alexdev"
              register={register}
              errors={errors}
            />

            <TextField
              label="Email"
              required
              id="email"
              type="email"
              message="Email is required"
              placeholder="alex@example.com"
              register={register}
              errors={errors}
            />

            <TextField
              label="Password"
              required
              id="password"
              type="password"
              message="Password is required"
              placeholder="Minimum  8 characters"
              register={register}
              min={8}
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
                  <span>Creating Account...</span>
                </div>
              ) : (
                <>
                  <FiUserPlus className="text-base" />
                  <span>Get Started Free</span>
                </>
              )}
            </button>

            <div className="pt-4 text-center border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#0066FF] hover:text-[#0052CC] underline"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
