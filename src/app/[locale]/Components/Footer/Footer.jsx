"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Link
                href="/"
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <Image
                  src="/assets/images/logo2.png"
                  alt="Martes AI Logo"
                  width={140}
                  height={40}
                  className="w-12 h-12 rounded-full border border-black/10 shadow-sm"
                />
                <span className="text-2xl font-bold tracking-tight text-black">
                  axialoop
                </span>
              </Link>
            </div>
            <div className="text-sm leading-relaxed space-y-4">
              <p className="">{t("heroText")}</p>
              <p className="">{t("subHero")}</p>
              <div className="mt-8 pt-4 text-[11px] space-y-1 opacity-80 leading-5">
                <p className="font-bold text-black">Martes AI S.R.L.</p>
                <p>Via Aurelia 325 Roma</p>
                <p>P.IVA 18331241002</p>
                <p>Capitale sociale: € 10.000 i.v.</p>
                <a
                  href="mailto:contact@martes-ai.com"
                  className="mt-2 block text-[#5B8BA5] font-semibold  transition-colors"
                >
                  contact@martes-ai.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold mb-6 text-base">
              {t("links.servizi")}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-[#5B8BA5] cursor-pointer transition-colors">
                AI Transformation Partner
              </li>
              <li className="hover:text-[#5B8BA5] cursor-pointer transition-colors">
                Prisma Agent
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold mb-6 text-base">
              {t("links.risorse")}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-[#5B8BA5] cursor-pointer transition-colors">
                {t("links.cases")}
              </li>
              <li className="hover:text-[#5B8BA5] cursor-pointer transition-colors">
                {t("links.contact")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold mb-6 text-base">
              {t("links.legal")}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <Link href={"/privacy"}>
              <li className="hover:text-[#5B8BA5] pb-4  cursor-pointer transition-colors">
                {t("links.privacy")}
              </li>
              </Link>

             <Link href={"/terms"}>
              <li className="hover:text-[#5B8BA5] pb-4  cursor-pointer transition-colors">
                {t("links.terms")}
              </li>
             </Link>

             <Link href={"/cookiePolicy"}>
              <li className="hover:text-[#5B8BA5] cursor-pointer transition-colors">
                {t("links.cookie")}
              </li>
             </Link>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold opacity-70 uppercase tracking-wider text-black">
            {t("copyright")}
          </p>

          <div className="flex gap-6 text-xl">
            <a
              href="https://www.instagram.com/riccardo_belli_contarini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#5B8BA5] hover:text-black cursor-pointer transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/martes-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-[#5B8BA5] hover:text-white cursor-pointer transition-all duration-300" />
            </a>
            <a
              href="https://x.com/Riccardo_BC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[#5B8BA5] hover:text-white cursor-pointer transition-all duration-300" />
            </a>
            <a
              href="https://www.youtube.com/@riccardobellicontarini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-[#5B8BA5] hover:text-white cursor-pointer transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
