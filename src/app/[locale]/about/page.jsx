"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AboutUs = () => {
  const t = useTranslations("aboutUs");

  return (
    <section className="bg-black text-white py-24 mt-10 px-6 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#51CB20]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-[#51CB20]/30 bg-[#51CB20]/5 rounded-full px-4 py-1 mb-6"
          >
            <span className="text-[#51CB20] text-[10px] font-bold uppercase tracking-[0.2em]">
              {t("badge")}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]"
          >
            {t("titleMain")}<br />
            <span className="italic font-serif font-light text-[#51CB20]">
              {t("titleItalic")}
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-white/10 pt-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-10"
          >
            <div>
               <h3 className="text-[#51CB20] text-xs font-bold uppercase tracking-[0.4em] mb-8 opacity-70">
                 {t("storyTitle")}
               </h3>
               <div className="space-y-8 text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                 <p className="text-white text-2xl font-medium leading-snug">
                   {t("storyP1")}
                 </p>
                 <p>{t("storyP2")}</p>
                 <p>{t("storyP3")}</p>
                 <p className="text-[#51CB20]/90 font-normal italic">
                   {t("storyP4")}
                 </p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#51CB20]/20 transition-all duration-700">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#51CB20]/40 group-hover:bg-[#51CB20] transition-colors duration-700" />
               
               <h3 className="text-2xl font-semibold text-white mb-6">
                 {t("missionTitle")}
               </h3>
               
               <p className="text-gray-400 text-lg leading-relaxed font-light">
                 {t("missionContent")}
               </p>

               <div className="mt-12 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#51CB20]" />
                 <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Axialoop Vision</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;