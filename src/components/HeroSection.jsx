import React from "react";

/**
 * Composant de la section d'introduction (Hero) du portfolio.
 * Met en avant le nom, le rôle, une brève description et les liens sociaux.
 */
export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center text-center p-8 bg-gray-100 min-h-screen"
    >
      <img
        src="/images/mourad.jpg" // Mettez ici le chemin vers votre image locale ou une URL publique
        alt="Portrait de Mourad MAMASSI" // Texte alternatif plus descriptif pour l'accessibilité
        className="w-60 h-60 rounded-full shadow-lg mb-4 object-cover"
      />
      
      {/* Utilisation de `aria-label` pour une meilleure accessibilité du titre principal */}
      <h1 
        className="text-4xl font-bold text-gray-800 mb-2" 
        aria-label="Mourad MAMASSI, Tech Lead et Ingénieur Logiciel"
      >
        Mourad MAMASSI
      </h1>
      
      <p className="text-xl text-gray-600 mb-4">Tech Lead & Ingénieur Logiciel</p>

      <p className="max-w-2xl text-gray-700 mb-6 px-4 leading-relaxed">
        En tant que <b>Tech Lead passionné</b>, je conçois et construis des solutions logicielles robustes et sécurisées,
        en particulier dans le secteur bancaire. Spécialisé en <b>Java Spring</b> et en <b>architecture cloud (AWS</b>
        je m'appuie sur une expertise en <b>DevOps et Kubernetes</b> pour orchestrer des déploiements fluides.
        J'accompagne également des équipes en tant que <b>coach et facilitateur</b> pour les aider à monter en compétences et à atteindre leurs objectifs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/cv-mourad.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger mon CV
        </a>
        <a
          href="https://www.linkedin.com/in/mourad-mamassi-59b65b18b/"
          className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mouradmamassi"
          className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
