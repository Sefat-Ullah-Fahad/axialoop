"use client";

import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TemplatePage() {
  const benefits = [
    "Complete N8N Course",
    "Complete Vibe Coding Course",
    "AI Agent Templates",
    "Workflow Templates",
  ];

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-20 font-sans selection:bg-[#4ade80]/30">
      <div className="max-w-4xl w-full text-center">
        
        {/* Sub-title: ACCESS OUR AI TEMPLATE LIBRARY */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-8"
        >
          Access our AI template library
        </motion.p>

        {/* Headline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-2"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white">
            Download Free
          </h1>
          <h2 className="text-5xl md:text-8xl font-serif italic text-[#51CB20] font-normal tracking-tight">
            Templates
          </h2>
        </motion.div>

        {/* Input Container with Glow & Gradient Border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-[550px] mx-auto relative group"
        >
          {/* Outer Soft Glow */}
          <div className="absolute -inset-1 bg-[#4ade80]/5 rounded-[24px] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-[#0a0a0a] border border-neutral-800/80 rounded-[20px] p-2 flex items-center shadow-2xl ring-1 ring-white/5">
            <div className="pl-5 text-neutral-500">
              <Mail size={20} strokeWidth={1.5} />
            </div>
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent border-none outline-none w-full px-4 py-4 text-neutral-200 placeholder:text-neutral-600 text-base"
            />
            <button className="bg-[#4ade80]/10 hover:bg-[#4ade80]/20 text-[#51CB20] p-3.5 rounded-[14px] transition-all border border-[#4ade80]/20 flex items-center justify-center">
              <ArrowRight size={22} strokeWidth={2.5} />
            </button>
          </div>
          
          <p className="text-neutral-500 text-[13px] mt-8 leading-relaxed max-w-[420px] mx-auto">
            Within minutes you will receive a magic link via email to access the entire folder with <span className="text-neutral-200 font-medium italic">ALL templates and courses.</span>
          </p>
        </motion.div>

        {/* Footer Benefits List */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 max-w-3xl mx-auto  pt-12"
        >
          {benefits.map((item, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start space-x-3 text-neutral-400 text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
              <span className="hover:text-neutral-200 transition-colors cursor-default">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}