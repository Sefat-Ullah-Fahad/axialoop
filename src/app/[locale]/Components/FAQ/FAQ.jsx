"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslations, useMessages } from 'next-intl';

const FAQSection = () => {
  const t = useTranslations('FAQ');
  const messages = useMessages();
  const [activeId, setActiveId] = useState(null);

  const faqItems = messages.FAQ?.items || [];

  return (
    <section className="relative bg-[#080808] text-white py-24 px-6 overflow-hidden">
      {/* Background Subtle Glow - Section alada korar jonno */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#51CB20]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#1e3a2a] bg-[#051109] rounded-full px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#51CB20] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#51CB20]"></span>
            </span>
            <span className="text-[#51CB20] text-[10px] font-bold uppercase tracking-[0.2em]">
              {t('badge')}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]">
            {t('titleNormal')} <br />
            <span className="text-[#51CB20] italic font-serif font-light">{t('titleHighlight')}</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqItems.map((_, index) => {
            const isOpen = activeId === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group border transition-all duration-500 rounded-3xl overflow-hidden ${
                  isOpen 
                  ? 'border-[#51CB20]/30 bg-white/[0.03] shadow-[0_10px_40px_-15px_rgba(81,203,32,0.1)]' 
                  : 'border-white/5 bg-transparent hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setActiveId(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-7 md:p-9 text-left focus:outline-none"
                >
                  <span className={`text-xl md:text-2xl font-medium pr-8 transition-colors duration-300 ${
                    isOpen ? 'text-[#51CB20]' : 'text-white/90 group-hover:text-white'
                  }`}>
                    {t(`items.${index}.question`)}
                  </span>
                  
                  <div className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen 
                    ? 'bg-[#51CB20] border-[#51CB20] rotate-180 shadow-[0_0_15px_rgba(81,203,32,0.4)]' 
                    : 'bg-white/5 border-white/10 group-hover:border-white/30'
                  }`}>
                    {isOpen ? (
                      <Minus size={18} className="text-black stroke-[3px]" />
                    ) : (
                      <Plus size={18} className="text-white stroke-[2px]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-7 md:px-9 pb-9 text-gray-400 text-lg font-light leading-relaxed">
                        <div className="w-full h-[1px] bg-gradient-to-r from-[#51CB20]/20 via-transparent to-transparent mb-6" />
                        <p className="max-w-3xl">
                          {t(`items.${index}.answer`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[150px] bg-[#51CB20]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default FAQSection;