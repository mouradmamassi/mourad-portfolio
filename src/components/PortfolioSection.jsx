import React from "react";
import sgLogo from "/images/sg.png";

// Données des projets
const projects = [
  {
    title: "Ego — Gestion des Modèles Risque-Crédit",
    description: `
      Plateforme web de gestion et de définition des modèles de risque-crédit pour la Direction Risque et Crédit. En tant que Tech Lead, j'ai géré le cycle de vie complet du projet (conception, développement et mise en production) et assuré l'automatisation des processus DevOps. Le frontend, développé en React, offre une interface intuitive aux utilisateurs. L'infrastructure est provisionnée via IaC avec AWS CloudFormation CDK (Java).
    `,
    technologies: [
      "Spring Boot 3",
      "JAVA 21",
      "AWS ECS",
      "AWS S3",
      "AWS RDS",
      "Docker",
      "Jenkins",
      "CloudFormation CDK (Java)",
      "React"
    ],
    period: "Jan 2024 – Aujourd’hui",
    logoType: "socgen"
  },
  {
    title: "Hammer — Moteur de Calcul Risque-Crédit",
    description: `
      Système backend d’exécution des modèles de risque de crédit définis dans Ego. Ce moteur gère à la fois le calcul en temps réel (Loki) et le traitement de millions de contrats en mode batch (Drax). J'ai mené le projet en mode DevOps complet, de l'automatisation CI/CD à la supervision en production, en utilisant une librairie Jenkins interne et AWS CloudFormation CDK pour l'IaC. La partie batch est réalisée via un workflow AWS Step Functions avec gestion de rollback et de retry.
    `,
    technologies: [
      "Spring Boot  3",
      "JAVA 21",
      "AWS Step Functions",
      "AWS ECS",
      "AWS S3",
      "Docker",
      "Jenkins",
      "CloudFormation CDK (Java)",
    ],
    period: "Jan 2024 – Aujourd’hui",
    logoType: "socgen"
  },
  {
    title: "SelfCare Monétique",
    description: `
      Application bancaire critique utilisée par environ 8 millions de clients pour gérer leurs services de carte en toute autonomie : opposition, augmentation des plafonds, etc. Ce projet a exigé un haut niveau de sécurité, de disponibilité et de performance, en s'intégrant aux systèmes monétiques nationaux.
    `,
    technologies: ["Spring Boot 2.0", "React 18", "JAVA 11", "Cloud Interne"],
    period: "2020 – 2023",
    logoType: "socgen"
  },
  {
    title: "Enrôlement Apple Pay",
    description: `
      Application backend essentielle pour permettre aux clients d’enrôler leur carte bancaire sur Apple Pay. Le système vérifie l’éligibilité du client en se basant sur de nombreuses règles de gestion pour garantir la sécurité, la conformité et une expérience utilisateur optimale pour les paiements mobiles.
    `,
    technologies: ["Spring Boot 2",  "JAVA 11", "Cloud Interne"],
    period: "2020 – 2023",
    logoType: "socgen"
  },
  {
    title: "Gestion Clés Cryptographiques",
    description: `
      Outil de description et de génération des clés pour la monétique bancaire, avec une architecture cloud sécurisée. J'ai participé au développement du backend (Spring Boot, Java) et du frontend (Angular), avec un déploiement sécurisé sur AWS via Docker.
    `,
    technologies: ["Spring Boot 2",  "JAVA 11", "Angular", "AWS", "Docker"],
    period: "2020 – 2023",
    logoType: "socgen"
  }
];

// Données de la formation
const education = [
  {
    diploma: "Ingénieur en Informatique",
    institution: "Université de Technologie de Belfort-Montbéliard",
    period: "2016 - 2020",
    logoType: "utbm"
  },
  {
    diploma: "Ingénieur Civil en Informatique, Semestre d'échange",
    institution: "Université de Liège",
    period: "2018 - 2019",
    logoType: "uliege"
  },
  {
    diploma: "Licence en informatique",
    institution: "Université Le Havre Normandie",
    period: "2015 - 2016",
    logoType: "other"
  },
  {
    diploma: "Licence professionnelle, Logiciel et Développement Web",
    institution: "École normale supérieure - Maroc",
    period: "2014 - 2015",
    logoType: "other"
  },
  {
    diploma: "DUT , Génie Informatique",
    institution: "École Supérieure de Technologie - Maroc",
    period: "2012 - 2014",
    logoType: "other"
  },
  {
    diploma: "Baccalauréat, Science Physique",
    institution: "Maghreb Al Arabie - Maroc",
    period: "2011 - 2012",
    logoType: "other"
  },
];

// Fonction pour rendre le bon logo basé sur le type
const renderLogo = (logoType) => {
  let logoSrc = "";
  let altText = "";

  // Définir l'URL et le texte alternatif en fonction du type de logo
  switch (logoType) {
    case "socgen":
      // Remplacez cette URL par le logo officiel de la Société Générale si vous l'avez
      logoSrc = "/images/sg.png";
      altText = "Logo Société Générale";
      break;
    case "utbm":
      // Remplacez cette URL par le logo officiel de l'UTBM
      logoSrc = "https://placehold.co/100x100/1e40af/ffffff?text=UTBM";
      altText = "Logo UTBM";
      break;
    case "uliege":
      // Remplacez cette URL par le logo officiel de l'Université de Liège
      logoSrc = "https://placehold.co/100x100/4c4980/ffffff?text=ULg";
      altText = "Logo Université de Liège";
      break;
    default:
      // URL d'une image générique pour les autres institutions
      logoSrc = "https://placehold.co/100x100/6b7280/ffffff?text=🎓";
      altText = "Logo d'éducation";
      break;
  }

  // Retourner la balise <img>
  return <img src={logoSrc} alt={altText} className="h-6 w-6 md:h-8 md:w-8" />;
};

export default function PortfolioPage() {
  return (
    <>
      {/* Section des projets principaux - En mode timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mes projets principaux</h2>
          <div className="relative">
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>

            {projects.map((project, index) => (
              <div
                key={index}
                className="mb-8 flex flex-col md:flex-row justify-between items-center w-full odd:flex-row-reverse"
              >
                <div className="w-full md:w-1/2 text-center md:text-left md:pr-12 md:pl-0 odd:text-right odd:pr-0 odd:pl-12">
                  <div className="bg-white p-6 rounded-2xl shadow-md transition-shadow hover:shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="mt-4 text-gray-700 whitespace-pre-line">{project.description}</p>
                    <p className="mt-4 text-sm text-gray-500">Période : {project.period}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Logo sur la timeline pour les projets */}
                <div className="absolute md:relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center -mt-4 md:mt-0 shadow-lg">
                  {renderLogo("item.logoType")}
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left md:pl-12 md:pr-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section de la formation en timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mon parcours académique</h2>
          <div className="relative">
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block"></div>

            {education.map((item, index) => (
              <div
                key={index}
                className="mb-8 flex flex-col md:flex-row justify-between items-center w-full odd:flex-row-reverse"
              >
                {/* Le point sur la timeline */}
                <div className="w-full md:w-1/2 text-center md:text-left md:pr-12 md:pl-0">
                  <div className="bg-gray-100 p-6 rounded-2xl shadow-md transition-shadow hover:shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900">{item.diploma}</h3>
                    <p className="text-gray-700 mt-1">{item.institution}</p>
                    <p className="text-sm text-gray-500 mt-2">{item.period}</p>
                  </div>
                </div>
                <div className="absolute md:relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center -mt-4 md:mt-0 shadow-lg">
                  {renderLogo(item.logoType)}
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left md:pl-12 md:pr-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
