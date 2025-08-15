import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center p-8 bg-gray-100 min-h-screen"
    >
      <img
        src="/images/mourad.jpg"
        alt="Portrait de Mourad MAMASSI"
        className="w-60 h-60 rounded-full shadow-lg mb-4 object-cover"
      />

      <h1
        className="text-4xl font-bold text-gray-800 mb-2"
        aria-label="Mourad MAMASSI, Tech Lead et Ingénieur Logiciel"
      >
        Mourad MAMASSI
      </h1>

      <p className="text-xl text-gray-600 mb-4">Tech Lead & Ingénieur Logiciel</p>

      <p className="max-w-2xl text-gray-700 mb-6 px-4 leading-relaxed">
        Je conçois et construis des solutions logicielles robustes et sécurisées, en particulier dans le secteur bancaire. Spécialisé en <b>Java Spring</b> et en <b>architecture cloud (AWS</b> je m'appuie sur une expertise en <b>DevOps et Kubernetes</b> pour orchestrer des déploiements fluides. J'accompagne également des équipes en tant que <b>coach et facilitateur</b> pour les aider à monter en compétences et à atteindre leurs objectifs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <a
          href="tel:+33766773505"
          className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.373 18 3 13.627 3 8V3z" />
          </svg>
          07 66 77 35 05
        </a>
        <a
          href="mailto:mourad.mamassi@gmail.com"
          className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          mourad.mamassi@gmail.com
        </a>
      </div>

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