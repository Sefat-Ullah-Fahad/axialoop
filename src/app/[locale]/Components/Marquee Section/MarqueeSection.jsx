"use client";
import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const logos = [
    "allcore-DlACiny8.png", "Aquadra-CvcURKOr.png", "citybeach-DdGrCnKL.png",
    "clinica_santa_lucia-D7-b74d-.png", 
    "ecommerceparts-logo-B6MilpeZ.png", "fantozzi-3PRnpbWI.png", "gsp_logo-CaKSaZML.png",
    "kerberos-Photoroom-DtKdw7Th.png", "logo_divinea-BTk_agLy.png", "logo-bluvacanze-xoM7PZ0A.png",
    "Logo-Build-Up-_ihOBvEb.png", "monni_srl-CbL7bDbO.png", "neutralia-logo-D1JM_OEA.png",
    "restworld-CXfPOzoe.png", "shapeup-Photoroom-WbWnJl-s.png", "turnover-Photoroom-BRtAkjc-.png",
    "winesuite_logo-Photoroom-C01_axl6.png"
  ];

  return (
    // Background set to black
    <section className="w-full py-20 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative px-4">
        
        <Marquee 
          gradient={true} 
          // Gradient color matched with black background
          gradientColor="black" 
          gradientWidth={150}
          speed={70} // Speed slightly adjusted for smoother feel
        >
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="mx-10 flex items-center justify-center w-[200px] h-[80px]" 
            >
              
              <img 
                src={`/assets/images/${logo}`} 
                alt={`Partner ${index}`} 
              
                className="max-h-full max-w-full w-auto h-auto object-contain grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          ))}
        </Marquee>
        
      </div>
    </section>
  );
};

export default MarqueeSection;