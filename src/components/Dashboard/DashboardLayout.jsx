import React, { useState } from "react";
import Graph from "./Graph";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery";
import ShortenPopUp from "./ShortenPopUp";
import { FaLink, FaPlus, FaChartBar, FaMousePointer } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  const {
    isLoading,
    data: myShortenUrls = [],
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const { isLoading: loader, data: totalClicks = [] } = useFetchTotalClicks(
    token,
    onError
  );

  function onError() {
    navigate("/error");
  }

  // Calculate overview metrics
  const totalClickCount = Array.isArray(totalClicks)
    ? totalClicks.reduce((sum, item) => sum + (Number(item?.count) || 0), 0)
    : 0;


  const linkCount = Array.isArray(myShortenUrls) ? myShortenUrls.length : 0;

  const avgClicksPerLink =
    linkCount > 0 ? (totalClickCount / linkCount).toFixed(1) : 0;

  return (
    <div className="bg-slate-50 dark:bg-[#0b1120] min-h-[calc(100vh-80px)] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loader ? (
          <Loader />
        ) : (
          <div className="space-y-8">
            {/* Dashboard Header & Quick Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Dashboard Overview
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Manage your SnipUrls and track performance analytics in real time.
                </p>
              </div>

              <button
                onClick={() => setShortenPopUp(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FaPlus className="text-xs" />
                <span>Snip a New Link</span>
              </button>
            </div>

            {/* Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Total Links
                  </span>
                  <div className="text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                    {linkCount}
                  </div>
                  <span className="text-xs text-[#0066FF] dark:text-blue-400 font-medium">
                    Active shortened links
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/50 text-[#0066FF] dark:text-blue-400 flex items-center justify-center text-xl">
                  <FiLayers />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Total Engagements
                  </span>
                  <div className="text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                    {totalClickCount}
                  </div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Total redirects served
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl">
                  <FaMousePointer />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Avg Clicks / Link
                  </span>
                  <div className="text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                    {avgClicksPerLink}
                  </div>
                  <span className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                    Engagement density
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800/50 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl">
                  <FaChartBar />
                </div>
              </div>
            </div>

            {/* Analytics Graph Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h2 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                    Click Trends Activity
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Aggregated daily visits across all your active short links
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#0066FF] dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                  Global Analytics
                </span>
              </div>

              <div className="h-80 sm:h-96 relative w-full">
                {totalClicks.length === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm z-10 text-center p-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center text-xl mb-3">
                      <FaChartBar />
                    </div>
                    <h3 className="text-slate-800 dark:text-slate-200 font-display font-bold text-lg mb-1">
                      No Click Activity Yet
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                      Share your shortened links on social media or email to view
                      engagement metrics here.
                    </p>
                  </div>
                )}
                <Graph graphData={totalClicks} />
              </div>
            </div>

            {/* Links List Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    Your Links
                  </h2>
                  <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {linkCount}
                  </span>
                </div>
              </div>

              {!isLoading && linkCount === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center text-2xl mx-auto mb-4">
                    <FaLink />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-display font-bold text-lg mb-1">
                    No links created yet
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6">
                    Create your first custom SnipUrl to start redirecting traffic
                    and tracking click metrics.
                  </p>
                  <button
                    onClick={() => setShortenPopUp(true)}
                    className="px-6 py-2.5 rounded-xl bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] shadow-md shadow-blue-500/20 transition-all"
                  >
                    Create Short Link Now
                  </button>
                </div>
              ) : (
           <ShortenUrlList
  data={myShortenUrls}
  onDelete={() => refetch()}
/>
              )}
            </div>
          </div>
        )}

        <ShortenPopUp
          refetch={refetch}
          open={shortenPopUp}
          setOpen={setShortenPopUp}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;