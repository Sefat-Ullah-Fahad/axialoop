"use client";
import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const logos = [
    "images.jpeg", "chatgpt.avif" ,"aws-color.webp", "azure-color.webp", 
    "gemini-color.webp", "googlecloud-color.webp", "langchain-color.webp",
    "make-color.webp", "images (1).jpeg", "n8n-color.webp", "vertexai-color.webp"
  ];

  return (
    /* মেইন সেকশন ডার্ক ব্যাকগ্রাউন্ডে থাকবে */
    <section className="w-full py-16 bg-[#0a0a0a]">
      {/* এখানে max-w-7xl ব্যবহার করা হয়েছে যেন স্লাইডারটি আপনার কন্টেন্ট এরিয়ার সাথে এলাইন থাকে */}
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        
        <Marquee 
          gradient={true} 
          gradientColor="#0a0a0a" 
          gradientWidth={50} // সীমানার ভেতরে অল্প শ্যাডো দিলে প্রিমিয়াম লাগে
          speed={120}
          pauseOnHover={true}
          autoFill={true} 
        >
          {logos.map((logo, index) => (
            <div 
              key={index} 
              // লোগোর সাইজ এবং গ্যাপ আপনার চাহিদা মতো বড় রাখা হয়েছে
              className="mx-8 flex items-center justify-center w-[180px] h-[100px]" 
            >
              <img 
                src={`/assets/images/${logo}`} 
                alt={`Partner ${index}`} 
                className="max-h-[80px] w-auto object-contain filter grayscale opacity-100 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </Marquee>
        
      </div>
    </section>
  );
};

export default MarqueeSection;