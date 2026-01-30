"use client";
import React, { useState, useEffect, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleLanguageChange = (nextLocale) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  };

  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: 45, y: 4 },
  };

  const line2Variants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: -45, y: -4 },
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4"
    >
      <nav className="flex items-center bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 px-4 md:px-6 py-2 rounded-full transition-all duration-500 ease-in-out">
        <AnimatePresence mode="wait">
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, width: 0, marginRight: 0 }}
              animate={{ opacity: 1, width: "auto", marginRight: "1.25rem" }}
              exit={{
                opacity: 0,
                width: 0,
                marginRight: 0,
                transition: { duration: 0.4, ease: "circIn" },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden whitespace-nowrap"
            >
              <Link
                href="/"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    scrollToSection("hero");
                  }
                }}
                className="flex items-center gap-3 border-r border-white/10 pr-4 cursor-pointer"
              >
                <img
                  src="/assets/images/logo2.png"
                  alt="Martes Logo"
                  className="w-10 h-10 object-contain shrink-0"
                />
                <span className="text-white font-semibold text-sm tracking-tight shrink-0">
                  axialoop
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="hidden md:flex items-center gap-7 text-[12px] font-medium text-neutral-400 uppercase tracking-[0.1em]">
          <li>
            <a
              onClick={() => scrollToSection("path")}
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              {t("solutions")}
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("success")}
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              {t("caseStudies")}
            </a>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              {t("aboutUs")}
            </Link>
          </li>
          <li>
            <Link
              href="/templates"
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              {t("templates")}
            </Link>
          </li>
        </ul>

        <div className="flex items-center md:pl-7  gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 ml-2">
            <span
              onClick={() => handleLanguageChange("it")}
              className={`text-[10px] font-bold cursor-pointer transition-all ${locale === "it" ? "text-[#00ff88]" : "text-gray-500"}`}
            >
              IT
            </span>
            <span className="text-gray-600 text-[10px]">|</span>
            <span
              onClick={() => handleLanguageChange("en")}
              className={`text-[10px] font-bold cursor-pointer transition-all ${locale === "en" ? "text-[#00ff88]" : "text-gray-500"}`}
            >
              EN
            </span>
          </div>

          <button className="bg-white/10 text-white text-[11px] font-bold  px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/20 transition-all active:scale-95 whitespace-nowrap">
            {t("ctaButton")}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 bg-white/5 rounded-full border border-white/10 focus:outline-none space-y-1.5"
          >
            <motion.div
              className="w-5 h-[2px] bg-white"
              variants={line1Variants}
              animate={isMenuOpen ? "opened" : "closed"}
            />
            <motion.div
              className="w-5 h-[2px] bg-white"
              variants={line2Variants}
              animate={isMenuOpen ? "opened" : "closed"}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="w-full max-w-[350px] mt-4 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 shadow-2xl md:hidden"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-white/5 p-1 rounded-full flex gap-1">
                <button
                  onClick={() => handleLanguageChange("it")}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${locale === "it" ? "bg-white/10 text-white" : "text-gray-500"}`}
                >
                  Italiano
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${locale === "en" ? "bg-white/10 text-white" : "text-gray-500"}`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div
                onClick={() => scrollToSection("path")}
                className="flex items-center justify-between py-4 border-b border-white/5 group cursor-pointer"
              >
                <span className="text-lg text-white font-medium">
                  {t("solutions")}
                </span>
                <ArrowRight
                  size={16}
                  className="text-gray-600 group-hover:text-white transition-all"
                />
              </div>
              <div
                onClick={() => scrollToSection("success")}
                className="flex items-center justify-between py-4 border-b border-white/5 group cursor-pointer"
              >
                <span className="text-lg text-white font-medium">
                  {t("caseStudies")}
                </span>
                <ArrowRight
                  size={16}
                  className="text-gray-600 group-hover:text-white transition-all"
                />
              </div>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between py-4 border-b border-white/5 group cursor-pointer"
              >
                <span className="text-lg text-white font-medium">
                  {t("aboutUs")}
                </span>
                <ArrowRight
                  size={16}
                  className="text-gray-600 group-hover:text-white transition-all"
                />
              </Link>
              <Link
                href="/templates"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between py-4 border-b border-white/5 group cursor-pointer"
              >
                <span className="text-lg text-white font-medium">
                  {t("templates")}
                </span>
                <ArrowRight
                  size={16}
                  className="text-gray-600 group-hover:text-white transition-all"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
