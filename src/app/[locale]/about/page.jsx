"use client"

import React, { useState } from 'react';
import { useTranslations } from 'next-intl'; 

const teamMembersData = [
  { id: 1, img: "/assets/team/riccardo-7Xnr19HD.png", social: { linkedin: "#", youtube: "#" } },
  { id: 2, img: "/assets/team/andrea-CnTGcT5p.png", social: { linkedin: "#" } },
  { id: 3, img: "/assets/team/tommaso-D6UXRBo-.png", social: { linkedin: "#" } },
  { id: 4, img: "/assets/team/paolo-CJCYYSBg.png", social: { linkedin: "#" } },
  { id: 5, img: "/assets/team/filippo-vuTm_iSY.png", social: { linkedin: "#" } },
  { id: 6, img: "/assets/team/giovanni-B5FrXoI2.png", social: { linkedin: "#" } },
  { id: 7, img: "/assets/team/luca-CT9Sf4L-.png", social: { linkedin: "#" } },
  { id: 8, img: "/assets/team/ilaria-2lG1fWpG.png", social: { linkedin: "#" } },
];

const AboutUs = () => {
  const t = useTranslations('aboutUs'); 
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="bg-black text-white py-24 px-6 min-h-screen">
      <div className="text-center mb-20 relative">

        
        <div className="inline-block border border-[#1e3a2a] bg-[#051109] rounded-full px-4 py-1 mb-8">
          <span className="text-[#4ade80] text-[11px] font-bold uppercase tracking-widest">
            {t("badge")}
          </span>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-semibold">
          {t("titleMain")}{" "}
          <span className="italic font-light" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            {t("titleItalic")}
          </span>
        </h2>
        
        <p className="text-gray-400 mt-8 text-xl max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {teamMembersData.map((member) => (
          <div
            key={member.id}
            onClick={() => toggleCard(member.id)}
            className={`relative h-[480px] rounded-[24px] cursor-pointer transition-all duration-700 overflow-hidden border ${
              activeCard === member.id ? 'border-[#4ade80]' : 'border-white/5'
            } bg-[#080808]`}
          >
            {/* Front Side */}
            <div className={`absolute inset-0 transition-opacity duration-700  ${activeCard === member.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <img
                src={member.img}
                alt={t(`members.member${member.id}.name`)}
                className="w-[400px] h-auto object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="text-xl font-bold">{t(`members.member${member.id}.name`)}</h3>
                <p className="text-[#4ade80] text-[10px] font-bold tracking-widest uppercase">
                  {t(`members.member${member.id}.role`)}
                </p>
              </div>
            </div>

            {/* Back Side (Details) */}
            <div className={`absolute inset-0 p-10 flex flex-col justify-center items-center text-center transition-all duration-700 bg-[#050505] ${
              activeCard === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <p className="text-gray-200 text-lg leading-relaxed mb-8 font-medium">
                "{t(`members.member${member.id}.desc`)}"
              </p>

              <div className="flex gap-3 mb-10">
                {member.social.linkedin && (
                  <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-400 border border-white/5">
                    <span className="text-xs font-bold">in</span>
                  </div>
                )}
                {member.social.youtube && (
                  <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-400 border border-white/5">
                    <span className="text-sm">▶</span>
                  </div>
                )}
              </div>

              <button className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                {t("clickToClose")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;