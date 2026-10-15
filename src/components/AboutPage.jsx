import React from "react";
import {
  FaLink,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
  FaGlobe,
  FaUserShield,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#0b1120] min-h-[calc(100vh-80px)] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full border border-blue-200/60 dark:border-blue-800/60">
            About SnipUrl
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built for Speed, Designed for <span className="text-[#0066FF]">Impact</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            SnipUrl is a next-generation link management platform built to help
            creators, marketers, and enterprises turn lengthy, chaotic URLs into
            clean, memorable, and measurable assets.
          </p>
        </div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-card"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#0066FF] uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Democratizing advanced link intelligence for everyone
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Links are the bedrock of the modern web. Every conversation,
                social campaign, newsletter, and transaction begins with a click.
                Yet most URLs remain brittle, unnecessarily long, and opaque.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                At SnipUrl, our mission is to make every link shorter, faster,
                and smarter — equipping you with actionable click analytics,
                airtight security, and seamless redirection performance across
                the globe.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-2xl border border-blue-100 text-center">
                <FaRocket className="text-[#0066FF] text-2xl mx-auto mb-2" />
                <span className="block text-2xl font-bold font-display text-blue-950">
                  99.99%
                </span>
                <span className="text-xs text-blue-700 font-medium">
                  Reliability SLA
                </span>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-sky-100/50 p-5 rounded-2xl border border-sky-100 text-center">
                <FaBolt className="text-sky-600 text-2xl mx-auto mb-2" />
                <span className="block text-2xl font-bold font-display text-blue-950">
                  &lt; 35ms
                </span>
                <span className="text-xs text-sky-700 font-medium">
                  Edge Latency
                </span>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 p-5 rounded-2xl border border-cyan-100 text-center">
                <FaGlobe className="text-cyan-600 text-2xl mx-auto mb-2" />
                <span className="block text-2xl font-bold font-display text-blue-950">
                  Global
                </span>
                <span className="text-xs text-cyan-700 font-medium">
                  Anycast Routing
                </span>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-5 rounded-2xl border border-emerald-100 text-center">
                <FaUserShield className="text-emerald-600 text-2xl mx-auto mb-2" />
                <span className="block text-2xl font-bold font-display text-emerald-950">
                  HTTPS
                </span>
                <span className="text-xs text-emerald-700 font-medium">
                  End-to-End SSL
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Pillars */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              The Four Pillars of SnipUrl
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Engineered from the ground up for maximum performance and user privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900/80 p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0066FF] flex items-center justify-center text-xl shrink-0">
                <FaLink />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-1">
                  Effortless Shortening
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Turn cumbersome query parameters and long paths into clean,
                  snappy short links that look beautiful on social media, print,
                  and presentations.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/80 p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center text-xl shrink-0">
                <FaChartLine />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-1">
                  Intelligent Analytics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Keep tabs on click growth, historical trends, and engagement
                  timing with our interactive visualization charts updated in real time.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/80 p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center text-xl shrink-0">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-1">
                  Enterprise Security
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Every link is screened against known threats, phishing attempts,
                  and malicious destinations before traffic is forwarded.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/80 p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0066FF] flex items-center justify-center text-xl shrink-0">
                <FaBolt />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-1">
                  Ultra-Fast Edge Architecture
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimized HTTP 302/301 redirects delivered with caching layers
                  to eliminate delay and preserve traffic conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Footer */}
        <div className="mt-16 text-center text-xs text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1.5">
          <span>Crafted with</span>
          <FaHeart className="text-rose-500 inline" />
          <span>by the SnipUrl Team for the global developer and creator community.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;