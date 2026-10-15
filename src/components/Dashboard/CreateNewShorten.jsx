import React, { useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FiLink, FiCheck } from "react-icons/fi";
import api from "../../api/api";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import Logo from "../Logo";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const frontendUrl = import.meta.env.VITE_REACT_FRONT_END_URL || window.location.origin;
      const shortenUrl = `${frontendUrl}/s/${res.shortUrl}`;

      try {
        await navigator.clipboard.writeText(shortenUrl);
        toast.success("Short URL created & copied to clipboard!", {
          duration: 3500,
        });
      } catch (err) {
        toast.success("Short URL created successfully!");
      }

      if (refetch) {
        await refetch();
      }

      reset();
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create short URL. Please verify the URL format.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-4 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
      {/* Modal Header */}
      <div className="p-6 sm:p-8 pb-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <Logo size="md" />
            <div>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                Snip a New Link
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Generate an instant, trackable short URL
              </p>
            </div>
          </div>

          <Tooltip title="Close">
            <button
              disabled={loading}
              onClick={() => setOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RxCross2 className="text-xl" />
            </button>
          </Tooltip>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit(createShortUrlHandler)} className="mt-6 space-y-6">
          <TextField
            label="Destination URL"
            required
            id="originalUrl"
            placeholder="https://example.com/very/long/destination/url"
            type="url"
            message="A valid destination URL is required"
            register={register}
            errors={errors}
          />

          <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/50 rounded-xl p-3 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <FiLink className="text-[#0066FF] text-sm shrink-0" />
            <span>
              Your link will be secured with HTTPS redirection and automated click tracking.
            </span>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              disabled={loading}
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>

            <button
              disabled={loading}
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <RotatingLines
                    visible={true}
                    height="16"
                    width="16"
                    strokeColor="white"
                    strokeWidth="4"
                    animationDuration="0.75"
                  />
                  <span>Generating...</span>
                </div>
              ) : (
                <>
                  <FiCheck className="text-sm" />
                  <span>Create SnipUrl</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewShorten;