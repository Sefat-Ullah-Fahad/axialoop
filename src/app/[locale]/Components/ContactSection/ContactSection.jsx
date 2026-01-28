"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SendHorizontal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const scrollbarStyle = `
  .custom-scrollbar::-webkit-scrollbar { width: 5px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #51CB20; border-radius: 10px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #45b51b; }
`;

const CustomSelect = ({ label, options, placeholder, isPhone = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className={`flex flex-col gap-3 relative ${isPhone ? 'w-[100px]' : 'w-full'}`}>
      <style>{scrollbarStyle}</style>
      {!isPhone && (
        <label className="text-[10px] font-bold text-white/50 tracking-[0.15em] uppercase ml-1">
          {label}
        </label>
      )}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        // Input background updated to dark and added white border with low opacity
        className={`w-full bg-[#0a0a0a] border ${isOpen ? 'border-[#51CB20]' : 'border-white/10'} rounded-xl p-4 flex justify-between items-center cursor-pointer transition-all h-[56px] hover:border-white/20`}
      >
        <span className={selected ? "text-white text-sm" : "text-white/40 text-sm"}>
          {selected || placeholder}
        </span>
        <ChevronDown className={`text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={16} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-20" onClick={() => setIsOpen(false)} />
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              // Dropdown background made dark
              className="absolute top-[105%] left-0 w-full bg-[#111111] border border-white/10 rounded-xl overflow-hidden z-30 shadow-2xl max-h-52 overflow-y-auto custom-scrollbar"
            >
              {options.map((option, index) => (
                <li 
                  key={index}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`p-4 text-sm transition-colors cursor-pointer border-b border-white/[0.05] last:border-0
                    ${selected === option ? 'text-black bg-[#51CB20]' : 'text-white/70 hover:bg-[#51CB20]/10 hover:text-white'}
                  `}
                >
                  {option}
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactSection = () => {
  const t = useTranslations('Contact');

  return (
    <section className="bg-black text-white py-24 px-6 selection:bg-[#51CB20]/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="px-5 py-1.5 border border-[#51CB20]/30 bg-[#51CB20]/5 rounded-full mb-10">
          <span className="text-[#51CB20] text-[10px] font-bold tracking-[0.25em] uppercase">
            {t('badge')}
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
            {t('titleNormal')} <span className="text-[#51CB20]">{t('titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col gap-3">
            <label className="input-label">{t('form.name')}</label>
            <input type="text" className="form-input" />
          </div>

          <div className="flex flex-col gap-3">
            <label className="input-label">{t('form.email')}</label>
            <input type="email" className="form-input" />
          </div>

          <div className="flex flex-col gap-3">
            <label className="input-label">{t('form.phone')}</label>
            <div className="flex gap-2 items-center">
               <CustomSelect 
                options={["🇮🇹 +39", "🇬🇧 +44", "🇫🇷 +33", "🇩🇪 +49", "🇪🇸 +34", "🇺🇸 +1"]} 
                placeholder="🇮🇹 +39" 
                isPhone={true}
              />
              <input type="tel" className="form-input flex-1" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="input-label">{t('form.company')}</label>
            <input type="text" className="form-input" />
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <label className="input-label">{t('form.role')}</label>
            <input type="text" placeholder={t('placeholders.role') || "es. CEO, Marketing Manager..."} className="form-input placeholder:text-white/20" />
          </div>

          <div className="md:col-span-2">
            <CustomSelect 
              label={t('form.service')} 
              options={["AI Transformation Partner", "Prisma Agent", "Altro"]} 
              placeholder="Select a service" 
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <label className="input-label">{t('form.project')}</label>
            <textarea rows="4" className="form-input resize-none"></textarea>
          </div>

          <CustomSelect 
            label={t('form.revenue')} 
            options={["< 500k", "500k - 1M", "1M - 5M", "> 5M"]} 
            placeholder="Select range" 
          />

          <div className="flex flex-col gap-3">
            <label className="input-label">{t('form.website')}</label>
            <input type="text" placeholder="www.tuaazienda.it" className="form-input placeholder:text-white/20" />
          </div>

          <CustomSelect 
            label={t('form.size')} 
            options={["1-10 dipendenti", "11-50 dipendenti", "51-150 dipendenti", "150+ dipendenti"]} 
            placeholder="Company size" 
          />

          <CustomSelect 
            label={t('form.investment')} 
            options={["< 5.000 €", "5.000 € - 10.000 €", "10.000 € - 20.000 €", "20.000 € - 40.000 €", "> 40.000 €"]} 
            placeholder="Investment range" 
          />

          <div className="md:col-span-2">
            <CustomSelect 
              label={t('form.source')} 
              options={["LinkedIn", "YouTube", "Instagram", "TikTok", "Passaparola"]} 
              placeholder="How did you find us?" 
            />
          </div>

          <div className="md:col-span-2 mt-8">
            <button className="w-full bg-[#5B8BA5] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#4a738a] transition-all active:scale-[0.99] shadow-lg shadow-[#5B8BA5]/20">
              {t('form.submit')} <SendHorizontal size={18} strokeWidth={2.5} />
            </button>
          </div>

        </form>
      </div>

      <style jsx>{`
        .input-label {
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-left: 4px;
        }
        .form-input {
          width: 100%;
          background-color: #0a0a0a; /* Dark background like the card */
          border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle white border */
          border-radius: 0.75rem;
          padding: 1rem;
          outline: none;
          transition: all 0.3s;
          font-size: 14px;
          height: 56px;
          color: white;
        }
        .form-input:focus {
          border-color: #51CB20; /* Green border on focus */
          background-color: #111111;
          box-shadow: 0 0 0 4px rgba(81, 203, 32, 0.1);
        }
        textarea.form-input {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;