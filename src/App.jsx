import { useState } from "react";
import { POSITIONS, AGE_GROUPS } from "./data/academyData";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import TacticalPitchSection from "./components/TacticalPitchSection";
import AgePathwaySection from "./components/AgePathwaySection";
import CardStudioSection from "./components/CardStudioSection";
import SchedulePricingSection from "./components/SchedulePricingSection";
import CoachesGallerySection from "./components/CoachesGallerySection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("ar");
  const isAr = lang === "ar";

  // حالة بيانات اللاعب المشتركة بين الـ Hero والملعب واستوديو التسجيل
  const [playerName, setPlayerName] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState("10");
  const [selectedPos, setSelectedPos] = useState("FWD");
  const [selectedAge, setSelectedAge] = useState("7-9");

  const toggleLanguage = () => {
    const next = isAr ? "en" : "ar";
    setLang(next);
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };

  const currentPosObj = POSITIONS[selectedPos];
  const currentAgeObj = AGE_GROUPS.find((a) => a.id === selectedAge) || AGE_GROUPS[1];

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar isAr={isAr} toggleLanguage={toggleLanguage} />

      <HeroSection
        isAr={isAr}
        lang={lang}
        playerName={playerName}
        setPlayerName={setPlayerName}
        jerseyNumber={jerseyNumber}
        setJerseyNumber={setJerseyNumber}
        selectedPos={selectedPos}
        currentPosObj={currentPosObj}
        currentAgeObj={currentAgeObj}
      />

      <WhySection isAr={isAr} />

      <TacticalPitchSection
        isAr={isAr}
        selectedPos={selectedPos}
        setSelectedPos={setSelectedPos}
        currentPosObj={currentPosObj}
      />

      <AgePathwaySection
        isAr={isAr}
        selectedAge={selectedAge}
        setSelectedAge={setSelectedAge}
      />

      <CardStudioSection
        isAr={isAr}
        lang={lang}
        playerName={playerName}
        setPlayerName={setPlayerName}
        jerseyNumber={jerseyNumber}
        setJerseyNumber={setJerseyNumber}
        selectedPos={selectedPos}
        setSelectedPos={setSelectedPos}
        selectedAge={selectedAge}
        setSelectedAge={setSelectedAge}
        currentPosObj={currentPosObj}
        currentAgeObj={currentAgeObj}
      />

      <SchedulePricingSection isAr={isAr} />

      <CoachesGallerySection isAr={isAr} />

      <FaqSection isAr={isAr} />

      <Footer isAr={isAr} />
    </div>
  );
}