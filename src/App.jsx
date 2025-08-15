// src/App.jsx
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import HobbiesSection from "./components/HobbiesSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <HobbiesSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
}