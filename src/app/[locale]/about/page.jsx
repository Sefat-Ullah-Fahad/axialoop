"use client";

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
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="inline-block border border-[#1e3a2a] bg-[#051109] rounded-full px-4 py-1 mb-8">
          <span className="text-[#51CB20] text-[11px] font-bold uppercase tracking-widest">
            {t("badge")}
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-semibold mb-6">
          {t("titleMain")}{" "}
          <span className="italic font-serif font-light text-[#51CB20]">
            {t("titleItalic")}
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-light">
          {t("description")}
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembersData.map((member) => (
          <div
            key={member.id}
            onClick={() => toggleCard(member.id)}
            className={`group relative h-[450px] rounded-[24px] cursor-pointer transition-all duration-500 overflow-hidden border ${
              activeCard === member.id ? 'border-[#51CB20]/50 shadow-[0_0_20px_rgba(81,203,32,0.1)]' : 'border-white/5 hover:border-white/20'
            } bg-[#0D0D0D]`}
          >
            {/* Front Side: Image and Basic Info */}
            <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              activeCard === member.id ? 'opacity-0 translate-y-[-20px] scale-90' : 'opacity-100 translate-y-0 scale-100'
            }`}>
              {/* Image Container */}
              <div className="h-[350px] w-full flex items-end justify-center overflow-hidden">
                <img
                  src={member.img}
                  alt={t(`members.member${member.id}.name`)}
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Gradient & Name Section */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-black/40 backdrop-blur-sm">
                <h3 className="text-lg font-bold tracking-tight text-white mb-1">
                  {t(`members.member${member.id}.name`)}
                </h3>
                <p className="text-[#51CB20] text-[10px] font-bold tracking-widest uppercase">
                  {t(`members.member${member.id}.role`)}
                </p>
              </div>
            </div>

            {/* Back Side: Details Text */}
            <div className={`absolute inset-0 p-10 flex flex-col justify-center items-center text-center transition-all duration-700 ease-out bg-[#050505] ${
              activeCard === member.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible pointer-events-none'
            }`}>
              <div className="mb-6">
                <div className="w-12 h-1 bg-[#51CB20] mx-auto rounded-full mb-6"></div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light italic">
                  "{t(`members.member${member.id}.desc`)}"
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-10">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center text-gray-400 hover:text-[#51CB20] border border-white/5 transition-colors">
                    <span className="text-xs font-bold">IN</span>
                  </a>
                )}
                {member.social.youtube && (
                  <a href={member.social.youtube} onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 border border-white/5 transition-colors">
                    <span className="text-sm">▶</span>
                  </a>
                )}
              </div>

              <button className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px] hover:text-white transition-colors">
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