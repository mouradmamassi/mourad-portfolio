// src/App.jsx
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import HobbiesSection from "./components/HobbiesSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <SkillsSection />
      <CertificationsSection /> 
      <PortfolioSection />
      <HobbiesSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
}