// src/App.jsx
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import HobbiesSection from "./components/HobbiesSection"; // Import the new component
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <PortfolioSection />
      <HobbiesSection /> {/* Add the new component here */}
      <Footer />
      <BackToTopButton />
    </div>
  );
}