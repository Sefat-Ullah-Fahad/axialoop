import Image from "next/image";
import {useTranslations} from 'next-intl';
import HeroSection from "./Components/HeroSection/HeroSection";
import MarqueeSection from "./Components/Marquee Section/MarqueeSection";

import PathSection from "./Components/PathSection/PathSections";
import Counters from "./Components/Counter/Counter";
import SuccessStories from "./Components/SuccessStories/SuccessStories";
import ContactSection from "./Components/ContactSection/ContactSection";
import FAQSection from "./Components/FAQ/FAQ";


export default function Home() {
   const t = useTranslations('HomePage');
  return (
  <div>
    

    <HeroSection></HeroSection>
    <MarqueeSection></MarqueeSection>
   <PathSection></PathSection>
   <Counters></Counters>
   <SuccessStories></SuccessStories>
   <ContactSection></ContactSection>
   <FAQSection></FAQSection>
  </div>
  );
}
