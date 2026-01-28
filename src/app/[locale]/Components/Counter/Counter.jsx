"use client";
import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = ({ value }) => {
  const numericValue = parseInt(value.replace(/\D/g, '')); 
  const suffix = value.replace(/[0-9]/g, ''); 
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, numericValue, { 
      duration: 2, 
      ease: "easeOut" 
    });
    return animation.stop;
  }, [numericValue, count]);

  return (
    <div className="flex items-baseline justify-center tracking-tighter">
      {/* কাউন্টার নাম্বার এখন ডার্ক টেক্সট */}
      <motion.span className="text-5xl md:text-6xl font-medium ">
        {rounded}
      </motion.span>
      <span className="text-5xl md:text-6xl font-medium ">
        {suffix}
      </span>
    </div>
  );
};

const Counters = () => {
  const t = useTranslations('Impact');

  const stats = [
    { id: 'stat1', value: "60+" },
    { id: 'stat2', value: "70+" },
    { id: 'stat3', value: "5M+" },
  ];

  return (
    // Section Background updated to #E4F1F4
    <section className=" py-24 px-6 select-none">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col items-center mb-20">
          {/* Title color updated to black with #5B8BA5 highlight */}
          <h2 className="text-white text-2xl md:text-4xl font-medium mb-4 tracking-tight text-center">
            {t('titleNormal')} <span className="text-[#51CB20]">{t('titleHighlight')}</span>
          </h2>
          {/* Underline color updated to #5B8BA5 */}
          <div className="w-16 h-[2px] bg-[#51CB20] rounded-full"></div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-8">
  {stats.map((stat) => (
    <motion.div 
      key={stat.id}
      whileHover={{ y: -5 }}
      /* bg-[#0a0a0a] ইমেজের মতো কালো রঙের জন্য এবং বর্ডার কালার অ্যাড করা হয়েছে */
      className="bg-[#0a0a0a] text-white border border-white/10 rounded-[24px] py-14 px-8 flex flex-col items-center justify-center transition-all hover:border-[#5B8BA5]/30 group relative overflow-hidden shadow-sm"
    >
      <div className="absolute inset-0 bg-[#5B8BA5]/0 group-hover:bg-[#5B8BA5]/5 transition-colors duration-500" />
      
      <div className="relative z-10 text-center">
        {/* কাউন্টার বা বড় টেক্সট সাদা রাখার জন্য className="text-white" নিশ্চিত করুন */}
        <div className="text-4xl md:text-5xl font-medium text-white mb-2">
           <Counter value={stat.value} />
        </div>

        {/* নিচের ছোট লেবেলটি ধূসর করার জন্য text-gray-400 ব্যবহার করা হয়েছে */}
        <p className="text-gray-400 text-xs md:text-[11px] font-bold tracking-[0.2em] mt-6 uppercase opacity-80 group-hover:opacity-100 transition-opacity">
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