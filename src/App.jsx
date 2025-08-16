// src/App.jsx
import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import HobbiesSection from "./components/HobbiesSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans">
        <HeroSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <EducationSection />
        <HobbiesSection />
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  );
}