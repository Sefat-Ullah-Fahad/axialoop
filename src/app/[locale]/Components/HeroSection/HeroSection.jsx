"use client";
import React, { useEffect, useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particlesArray = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      constructor() {
        this.init();
      }

      init() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.atan2(this.y - centerY, this.x - centerX);
        this.dist = Math.sqrt(
          Math.pow(this.x - centerX, 2) + Math.pow(this.y - centerY, 2),
        );
        this.speed = Math.random() * 0.1 + 0.7;
        this.dir = Math.random() > 0.5 ? 1 : -1;
        this.minSize = Math.random() * 1 + 0.5;
        this.maxSize = this.minSize + 4;
        this.pulseSpeed = Math.random() * 0.01 + 0.005;
        this.pulseVal = Math.random() * Math.PI;

        const greenShades = [
          "rgba(74, 222, 128,",
          "rgba(34, 197, 94,",
          "rgba(20, 83, 45,",
          "rgba(134, 239, 172,",
        ];
        this.colorBase =
          greenShades[Math.floor(Math.random() * greenShades.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.dist += this.speed * this.dir;
        if (
          this.dist > Math.max(canvas.width, canvas.height) / 1.5 ||
          this.dist < 10
        ) {
          this.dir *= -1;
        }
        this.pulseVal += this.pulseSpeed;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        let currentSize =
          this.minSize + (Math.sin(this.pulseVal) + 1) * (this.maxSize / 2);
        const posX = centerX + Math.cos(this.angle) * this.dist;
        const posY = centerY + Math.sin(this.angle) * this.dist;

        ctx.fillStyle = this.colorBase + this.opacity + ")";
        ctx.fillRect(
          posX - currentSize / 2,
          posY - currentSize / 2,
          currentSize,
          currentSize,
        );
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 400; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => p.update());
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="   relative w-full min-h-screen py-20 pt-32 md:pt-40 bg-black flex flex-col items-center justify-center overflow-hidden custom-bottom-border   "
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-6 md:mb-10 lg:mb-12"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border border-white/10 relative z-10 shadow-2xl bg-[#5B8BA5] backdrop-blur-sm flex items-center justify-center">
            <Image
              src="/assets/images/logo.png"
              alt="Hero Image"
              width={140}
              height={140}
            ></Image>
          </div>
        </motion.div>

        <div className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-12 max-w-5xl mx-auto cursor-default">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="leading-[1.5]"
          >
            <span className=" font-medium text-white text-[42px] sm:text-6xl md:text-7xl lg:text-[96px] tracking-tight">
              {t("titleNormal1")} {/* Your */}
              <span className="relative inline-block">
                <span
                  className="italic  text-[#5B8BA5]"
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t("titleItalic")}
                </span>
              </span>
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-[-8px] md:mt-[-18px] leading-[1.05]"
          >
            <span className="text-white font-medium text-[42px] sm:text-6xl md:text-7xl lg:text-[96px] tracking-tight">
              {t("titleNormal2")}{" "}
              <span className="text-[#51CB20] font-medium  ml-1 md:ml-2">
                {t("titleHighlight")}
              </span>
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
        >
          <button className="hoverable cursor-pointer bg-[#5B8BA5] hover:bg-[#487f9d] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide flex items-center gap-2 group transition-all hover:scale-104 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            {t("btnStart")}
            <ArrowRight
              size={18}
              className="transition-transform duration-400 ease-in-out group-hover:translate-x-1"
            />
          </button>

          <button className="px-8 py-5 cursor-pointer text-white font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full transition-all border border-[#5B8BA5] duration-300 hover:text-white hover:bg-[#5B8BA5] hover:backdrop-blur-md">
            {t("btnDiscover")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
