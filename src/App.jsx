import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <PortfolioSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
