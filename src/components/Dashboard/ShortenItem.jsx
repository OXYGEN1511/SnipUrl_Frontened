import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoCopy, IoCheckmark } from "react-icons/io5";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import api from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contextApi/ContextApi";
import { RotatingLines } from "react-loader-spinner";
import Graph from "./Graph";

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate }) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);

  const frontendBase =
    import.meta.env.VITE_REACT_FRONT_END_URL || window.location.origin;
  const cleanDomain = frontendBase.replace(/^https?:\/\//, "");
  const fullShortUrl = `${frontendBase}/s/${shortUrl}`;

  const analyticsHandler = (url) => {
    if (!analyticToggle) {
      setSelectedUrl(url);
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShortUrl = async () => {
    setLoader(true);
    try {
      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=2024-01-01T00:00:00&endDate=2030-12-31T23:59:59`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setAnalyticsData(data);
    } catch (error) {
      navigate("/error");
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();
    }
  }, [selectedUrl]);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-blue-500/40 transition-all duration-200 overflow-hidden">
      <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left Column: Link details */}
        <div className="space-y-2 min-w-0 flex-1">
          {/* Short Link */}
          <div className="flex items-center gap-2">
            <Link
              to={`/s/${shortUrl}`}
              target="_blank"
              rel="noreferrer"
              className="font-display font-bold text-base sm:text-lg text-[#0066FF] hover:text-[#0052CC] transition-colors flex items-center gap-1.5 truncate group"
            >
              <span>{`${cleanDomain}/s/${shortUrl}`}</span>
              <FaExternalLinkAlt className="text-xs opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/60 shrink-0">
              Active
            </span>
          </div>

          {/* Original Destination */}
          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono truncate max-w-xl">
            {originalUrl}
          </div>

          {/* Badges / Meta info */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <MdOutlineAdsClick className="text-sm" />
              <span>
                {clickCount} {clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              <FaRegCalendarAlt className="text-xs" />
              <span>Created {dayjs(createdDate).format("MMM DD, YYYY")}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Actions */}
        <div className="flex items-center gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
          <CopyToClipboard onCopy={handleCopy} text={fullShortUrl}>
            <button
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 shadow-sm ${
                isCopied
                  ? "bg-emerald-600 text-white"
                  : "bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-blue-500/20"
              }`}
            >
              {isCopied ? (
                <>
                  <IoCheckmark className="text-base" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <IoCopy className="text-sm" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </CopyToClipboard>

          <button
            onClick={() => analyticsHandler(shortUrl)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 border ${
              analyticToggle
                ? "bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700 text-[#0066FF] dark:text-blue-400"
                : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            <MdAnalytics className="text-base text-[#0066FF]" />
            <span>{analyticToggle ? "Hide Analytics" : "Analytics"}</span>
          </button>
        </div>
      </div>

      {/* Analytics Drawer */}
      {analyticToggle && (
        <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/60 p-5 sm:p-6 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Clicks Breakdown for /s/{shortUrl}
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400">Live Telemetry</span>
          </div>

          <div className="h-64 sm:h-80 relative w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 p-4">
            {loader ? (
              <div className="h-full flex flex-col items-center justify-center gap-2">
                <RotatingLines
                  visible={true}
                  height="36"
                  width="36"
                  strokeColor="#0066FF"
                  strokeWidth="4"
                  animationDuration="0.75"
                />
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Fetching link telemetry...
                </p>
              </div>
            ) : analyticsData.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center text-lg mb-2">
                  <MdAnalytics />
                </div>
                <h5 className="font-display font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">
                  No Clicks Recorded Yet
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  Once users click this short URL, visit spikes and timestamps will
                  populate here.
                </p>
              </div>
            ) : (
              <Graph graphData={analyticsData} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortenItem;