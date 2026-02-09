"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PathSections = () => {
  const t = useTranslations("ChoosePath");

  const cards = [
    { id: "card1", img: "/assets/images/path/atp_1b_hologram.png" },
    { id: "card2", img: "/assets/images/path/docflow_2b_robot.png" },
  ];

  return (
    <section id="path" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl text-white md:text-5xl font-medium mb-6 tracking-tight">
          {t("titleNormal")}
          <span className="text-[#51CB20]"> {t("titleHighlight")}</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col">
            <div className="mb-6">
              <span className="text-[#51CB20] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                {t(`${card.id}.badge`)}
              </span>

              <h3 className="text-3xl text-white md:text-[40px] font-medium mb-1 tracking-tight">
                {t(`${card.id}.titleNormal`)}
              </h3>
              <p className="text-[#51CB20] font-serif italic text-2xl md:text-[32px] font-light">
                {t(`${card.id}.titleHighlight`)}
              </p>
            </div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 group mb-8"
            >
              <img
                src={card.img}
                alt="Path Image"
                className="w-full h-full object-cover transform transition-transform duration-1000"
              />
            </motion.div>

            <div className="space-y-6">
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                {t(`${card.id}.desc`)}
              </p>

              <button className="flex items-center gap-4 text-white text-[13px] font-bold uppercase tracking-[0.2em] group/btn">
                <span className="group-hover:text-[#51CB20] transition-colors">
                  {t(`${card.id}.btn`)}
                </span>
                <div className="p-2 rounded-full border border-white/30 group-hover/btn:border-[#51CB20] group-hover/btn:translate-x-2 transition-all">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PathSections;
