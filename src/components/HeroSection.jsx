import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-8 bg-gray-100 min-h-screen">
      <img
        src="/images/mourad.jpg" // Mets ici ton chemin d'image local ou une URL publique
        alt="Mourad"
        className="w-60 h-60 rounded-full shadow-lg mb-4 object-cover"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Mourad MAMASSI</h1>
      <p className="text-xl text-gray-600 mb-4">Ingénieur Logiciel & Tech Lead · Cloud · DevOps · Full Stack</p>

      <p className="max-w-xl text-gray-700 mb-6">
        Passionné par le développement logiciel moderne, l'architecture cloud AWS, et les solutions sécurisées dans
        le secteur bancaire. Certifié Kubernetes, Spring et DevOps, j'interviens aussi comme coach et facilitateur d'équipes.
      </p>

      <div className="flex gap-4">
        <a
          href="/cv-mourad.pdf"
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
          target="_blank"
        >
          Télécharger mon CV
        </a>
        <a
          href="https://www.linkedin.com/in/mourad-mamassi-59b65b18b/"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mouradmamassi"
          className="text-gray-700 underline hover:text-black"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
