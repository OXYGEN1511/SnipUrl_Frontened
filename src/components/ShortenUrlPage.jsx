import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      window.location.href = `${backendUrl}/${url}`;
    }
  }, [url]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-white text-center">
      <div className="mb-6 animate-bounce">
        <img
          src="/logo.png"
          alt="SnipUrl Logo"
          className="w-16 h-16 rounded-2xl shadow-xl shadow-blue-500/30 object-cover"
        />
      </div>

      <h1 className="text-2xl font-display font-bold tracking-tight mb-2">
        Snip<span className="text-[#0066FF]">Url</span> Fast Redirect
      </h1>

      <p className="text-sm text-slate-400 max-w-sm mb-6">
        Safely routing your connection to the intended destination...
      </p>

      <RotatingLines
        visible={true}
        height="32"
        width="32"
        strokeColor="#0066FF"
        strokeWidth="4"
        animationDuration="0.75"
        ariaLabel="redirecting"
      />
    </div>
  );
};

export default ShortenUrlPage;