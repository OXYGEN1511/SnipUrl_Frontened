import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[400px] gap-3">
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeColor="#0066FF"
        strokeWidth="4"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
      <p className="text-sm font-medium text-slate-500 animate-pulse">
        Loading SnipUrl telemetry...
      </p>
    </div>
  );
}

export default Loader;