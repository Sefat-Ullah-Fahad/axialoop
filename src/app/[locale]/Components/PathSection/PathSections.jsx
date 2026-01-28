


"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const PathSections = () => {
  const t = useTranslations('ChoosePath');

  const cards = [
    { id: 'card1', img: "/assets/images/box_ATP-CeFTeEVE.png" },
    { id: 'card2', img: "/assets/images/box_prisma-Df1Ado1S.png" }
  ];

  return (
    <section id='path' className=" text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl text-white md:text-6xl font-medium mb-6 tracking-tight">
          {t('titleNormal')} 
          <span className="text-[#51CB20]"> {t('titleHighlight')}</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
          {t('subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card) => <Card key={card.id} card={card} t={t} />)}
      </div>
    </section>
  );
};

const Card = ({ card, t }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const shadowX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const shadowY = useSpring(mouseY, { damping: 40, stiffness: 300 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5 }}
      className="group relative bg-black/12 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-14 transition-all duration-500 hover:border-[#4ade80]/40 overflow-hidden cursor-default"
    >
   
      <motion.div 
        className="pointer-events-none absolute w-48 h-48 bg-[#4ade80]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          x: shadowX, 
          y: shadowY, 
          translateX: "-50%", 
          translateY: "-50%",
          boxShadow: "0 0 100px 40px rgba(74, 222, 128, 0.15)" 
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <h3 className="text-3xl text-white md:text-[40px] font-medium mb-1 tracking-tight">
          {t(`${card.id}.titleNormal`)}
        </h3>
        
        <p className="text-[#51CB20] font-serif italic text-3xl md:text-[42px] font-light mb-12 tracking-wide leading-tight">
          {t(`${card.id}.titleHighlight`)}
        </p>

        <div className="flex justify-center mb-14">
          <img 
            src={card.img} 
            alt="Box Image" 
            className="w-full max-w-[280px] object-contain transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="mt-auto">
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mb-10">
            {t(`${card.id}.desc`)}
          </p>

          <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-10"></div>
          
          <button className="flex items-center gap-3 text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:text-[#51CB20] transition-all group/btn">
            {t(`${card.id}.btn`)}
            <div className="p-2 rounded-full border border-white/20 group-hover/btn:border-[#4ade80] group-hover/btn:translate-x-2 transition-all">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PathSections;