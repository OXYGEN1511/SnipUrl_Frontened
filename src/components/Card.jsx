import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc, icon: Icon, badge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-indigo-200 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-5">
          {Icon ? (
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100/80 dark:border-blue-800/60 text-[#0066FF] dark:text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300 shadow-sm">
              <Icon />
            </div>
          ) : (
            <div className="w-3 h-3 rounded-full bg-[#0066FF]" />
          )}

          {badge && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-slate-900 dark:text-white text-lg font-display font-bold mb-2 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center text-xs font-semibold text-[#0066FF] dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200">
        <span>Explore capability &rarr;</span>
      </div>
    </motion.div>
  );
};

export default Card;