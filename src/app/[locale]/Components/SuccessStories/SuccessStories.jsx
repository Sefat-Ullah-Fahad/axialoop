"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SuccessStories = () => {
  const t = useTranslations("Stories");
  const [activeTab, setActiveTab] = useState("evaliscert");

  const stories = [
    { id: "evaliscert", label: t("evaliscert.label"), resultValue: "€75.000" },
    { id: "fashion", label: t("fashion.label"), resultValue: "€45.000" },
    { id: "realestate", label: t("realestate.label"), resultValue: "€85.000" },
  ];

  const activeStory = stories.find((s) => s.id === activeTab);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="success" className="text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white md:text-5xl font-medium mb-10">
            {t("titleNormal")}{" "}
            <span className="text-[#51CB20] italic font-light">
              {t("titleHighlight")}
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => setActiveTab(story.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer border border-[#5B8BA5] transition-all duration-500 ${
                  activeTab === story.id
                    ? "bg-[#5B8BA5] text-black border-[#5B8BA5]"
                    : "bg-transparent text-gray-500 border-[#5B8BA5]"
                }`}
              >
                {story.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#0F0F0F] border border-white/5 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center min-h-[550px] transition-all duration-500 hover:border-[#51CB20]/20 shadow-2xl"
          >
            <div className="flex-[1.5] space-y-10">
              <motion.div variants={itemVariants}>
                <span className="bg-[#51CB20]/10 text-[#51CB20] px-4 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase border border-[#51CB20]/20">
                  {t(`${activeTab}.industry`)}
                </span>
              </motion.div>

              <div className="space-y-10">
                <motion.div variants={itemVariants} className="group/text">
                  <h4 className="text-[11px] font-bold tracking-[0.25em] text-white/50 mb-4 uppercase">
                    {t("challengeTitle")}
                  </h4>
                  <p className="text-white text-[18px] md:text-[20px] leading-relaxed font-light max-w-xl">
                    {t(`${activeTab}.challengeDesc`)}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="group/text">
                  <h4 className="text-[11px] font-bold tracking-[0.25em] text-white/50 mb-4 uppercase">
                    {t("solutionTitle")}
                  </h4>
                  <p className="text-white text-[18px] md:text-[20px] leading-relaxed font-light max-w-xl">
                    {t(`${activeTab}.solutionDesc`)}
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block w-px h-72 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            ></motion.div>

            <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-6xl md:text-7xl font-bold mb-3 bg-clip-text text-white">
                  {activeStory.resultValue}
                </h3>
                <p className="text-[11px] font-bold tracking-[0.2em] text-[#51CB20] uppercase">
                  {t("resultLabel")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <button className="bg-[#5B8BA5] cursor-pointer text-black px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#71a4c0] transition-all duration-300 group">
            {t("btn")}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
