"use client";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = ({ value }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
    });
    return animation.stop;
  }, [numericValue, count]);

  return (
    <div className="flex items-baseline justify-center tracking-tighter">
      <motion.span className="text-5xl md:text-7xl font-bold text-[#51CB20]">
        {rounded}
      </motion.span>
      <span className="text-5xl md:text-7xl font-bold text-[#51CB20]">{suffix}</span>
    </div>
  );
};

const Counters = () => {
  const t = useTranslations("Impact");

  const stats = [
    { id: "stat1", value: "40+" },
    { id: "stat2", value: "50+" },
    { id: "stat3", value: "2M+" },
  ];

  return (
    <section className="bg-black py-24 px-6 select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-white text-4xl md:text-5xl font-medium mb-4 tracking-tight text-center">
            {t("titleNormal")}{" "}
            <span className="text-[#51CB20]">{t("titleHighlight")}</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#51CB20] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ y: -8 }}
              className="bg-[#0a0a0a] text-white border border-white/10 rounded-[32px] py-16 px-8 flex flex-col items-center justify-center transition-all hover:border-[#51CB20]/40 group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[#51CB20]/0 group-hover:bg-[#51CB20]/5 transition-colors duration-500" />

              <div className="relative z-10 text-center">
                <div className="mb-2">
                  <Counter value={stat.value} />
                </div>

                <p className="text-gray-400 text-xs md:text-[11px] font-bold tracking-[0.2em] mt-6 uppercase opacity-80 group-hover:opacity-100 transition-opacity leading-relaxed max-w-[200px]">
                  {t(`${stat.id}Label`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;