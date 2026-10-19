import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";
import {
  FaLink,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
  FaQrcode,
  FaArrowRight,
  FaCheckCircle,
  FaGlobeAmericas,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  const [heroCopied, setHeroCopied] = useState(false);
  const [demoUrl, setDemoUrl] = useState("https://snipurl.live/s/growth-2025");

  const handleHeroAction = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  const handleCopyDemo = () => {
    navigator.clipboard.writeText(demoUrl);
    setHeroCopied(true);
    setTimeout(() => setHeroCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-[#0b1120] min-h-[calc(100vh-80px)] w-full">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-16 pb-16 sm:pb-20 w-full min-w-0">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full min-w-0">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 text-center lg:text-left min-w-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800/60 text-[#0066FF] dark:text-blue-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm max-w-full"
            >
              <IoSparkles className="text-[#0066FF] animate-pulse shrink-0" />
              <span className="truncate sm:whitespace-normal">Next-Gen Link Management & Analytics</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-slate-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] break-words"
            >
              Smarter, Shorter, Faster Links with{" "}
              <span className="text-[#0066FF]">SnipUrl</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 sm:mt-6 text-slate-600 dark:text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform long, complex URLs into concise, high-converting links.
              Track clicks in real-time, analyze audience geography, and boost
              engagement across all channels with enterprise security.
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
            >
              <button
                onClick={handleHeroAction}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>{token ? "Go to Dashboard" : "Get Started Free"}</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const elem = document.getElementById("features-section");
                  if (elem) elem.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#0066FF] dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 font-semibold text-sm sm:text-base shadow-sm transition-all duration-200"
              >
                Explore Features
              </button>
            </motion.div>

            {/* Social proof badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-700/60 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5 text-xs text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span>Real-time click insights</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span>Global SSL protection</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Product Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full min-w-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none w-full min-w-0">
              {/* Glowing halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-3xl blur-lg opacity-30 animate-pulse pointer-events-none" />

              {/* Glassmorphic Mockup Container */}
              <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 rounded-2xl p-4 sm:p-7 shadow-2xl space-y-5 overflow-hidden w-full min-w-0">
                {/* Header preview */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 min-w-0">
                    <img src="/logo.png" alt="Logo" className="w-6 h-6 rounded-md object-cover shadow-sm shrink-0" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 ml-1 truncate">
                      SnipUrl Intelligence
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">
                    Live
                  </span>
                </div>

                {/* Original URL Preview */}
                <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-3 sm:p-3.5 space-y-1 min-w-0 overflow-hidden">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                    Destination URL
                  </span>
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate block w-full">
                    https://marketing.globalcampaign.io/promotions/q4-launch?utm_source=twitter&utm_medium=growth
                  </p>
                </div>

                {/* Generated Short Link */}
                <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/50 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-2 sm:gap-3 shadow-inner min-w-0 overflow-hidden">
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-semibold text-[#0066FF] uppercase tracking-wider block">
                      SnipUrl Short Link
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-200 font-mono truncate">
                      {demoUrl}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyDemo}
                    className="shrink-0 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                  >
                    {heroCopied ? (
                      <>
                        <FaCheck className="text-xs" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-xs" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mini Click Analytics Simulation */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/60 p-3 sm:p-4 shadow-sm min-w-0">
                  <div className="flex items-center justify-between mb-3 min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <FaChartLine className="text-indigo-600 text-sm shrink-0" />
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                        Performance Metrics
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                      +148%
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center pt-1 min-w-0">
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-2 sm:p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50 min-w-0">
                      <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        Total Clicks
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display truncate block">
                        12,840
                      </span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-2 sm:p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50 min-w-0">
                      <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        Top Country
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display truncate block">
                        USA (46%)
                      </span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-2 sm:p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50 min-w-0">
                      <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        Avg Latency
                      </span>
                      <span className="text-sm sm:text-base font-bold text-emerald-600 font-display truncate block">
                        28ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Performance Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 py-8 px-6 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-card grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold gradient-text">
              10M+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Links Shortened
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold gradient-text">
              99.99%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Platform Uptime SLA
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold gradient-text">
              &lt; 35ms
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Global Redirect Speed
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-extrabold gradient-text">
              190+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              Countries Tracked
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <section id="features-section" className="mt-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/60">
              Why SnipUrl
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Engineered for Speed, Reliability, and Insight
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Everything you need to convert bulky links into engaging, trackable
              assets that give your brand an unfair advantage.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon={FaLink}
              badge="Instant"
              title="Lightning URL Shortener"
              desc="Generate clean, memorable, and aesthetic short URLs in milliseconds. Simplify sharing across socials, SMS, and documents."
            />
            <Card
              icon={FaChartLine}
              badge="Real-time"
              title="Deep Link Analytics"
              desc="Comprehensive insights into click volume, daily trends, geographical distribution, and engagement velocity over time."
            />
            <Card
              icon={FaShieldAlt}
              badge="Enterprise"
              title="Bank-Grade Security"
              desc="Automated malware scanning, phishing shields, and HTTPS encryption ensure every visitor lands safely."
            />
            <Card
              icon={FaBolt}
              badge="99.99%"
              title="Global Edge Delivery"
              desc="Distributed across low-latency edge nodes worldwide to guarantee sub-50ms redirect speed wherever your users are."
            />
          </div>
        </section>

        {/* 3-Step Workflow Section */}
        <section className="mt-28 bg-gradient-to-br from-[#003899] via-slate-900 to-[#001D4D] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-blue-500/20 px-3.5 py-1 rounded-full border border-blue-400/30">
              Simple 3-Step Process
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight">
              How SnipUrl Works
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Get your custom shortened links up and running in less than 30 seconds.
            </p>
          </div>

          <div className="relative z-10 mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/30 border border-blue-400/30 text-blue-200 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                Paste Destination URL
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Paste any long, clunky link into SnipUrl. No setup or complex configurations required.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/30 border border-cyan-400/30 text-cyan-200 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                Snip & Customize
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hit create and receive an instantly generated, lightning-fast short URL ready for immediate distribution.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-sky-500/30 border border-sky-400/30 text-sky-200 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                Analyze & Optimize
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Track every click in our visual interactive analytics dashboard and refine your marketing campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="mt-28 text-center bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-10 sm:p-16 shadow-card relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Ready to Upgrade Your Link Game?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Start shortening URLs and collecting granular link performance data
              with SnipUrl today. Free forever for essentials.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleHeroAction}
                className="px-8 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-base shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {token ? "Launch Workspace" : "Create Free Account"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;