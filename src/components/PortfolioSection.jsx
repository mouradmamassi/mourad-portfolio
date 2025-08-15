import React from "react";

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
  },
  {
    title: "SelfCare Monétique",
    description: `
      Application bancaire critique utilisée par environ 8 millions de clients pour gérer leurs services de carte en toute autonomie : opposition, augmentation des plafonds, etc. Ce projet a exigé un haut niveau de sécurité, de disponibilité et de performance, en s'intégrant aux systèmes monétiques nationaux.
    `,
    technologies: ["Spring Boot 2.0", "React 18", "JAVA 11", "Cloud Interne"],
    period: "2020 – 2023",
  },
  {
    title: "Enrôlement Apple Pay",
    description: `
      Application backend essentielle pour permettre aux clients d’enrôler leur carte bancaire sur Apple Pay. Le système vérifie l’éligibilité du client en se basant sur de nombreuses règles de gestion pour garantir la sécurité, la conformité et une expérience utilisateur optimale pour les paiements mobiles.
    `,
    technologies: ["Spring Boot 2",  "JAVA 11", "Cloud Interne"],
    period: "2020 – 2023",
  },
  {
    title: "Gestion Clés Cryptographiques",
    description: `
      Outil de description et de génération des clés pour la monétique bancaire, avec une architecture cloud sécurisée. J'ai participé au développement du backend (Spring Boot, Java) et du frontend (Angular), avec un déploiement sécurisé sur AWS via Docker.
    `,
    technologies: ["Spring Boot 2",  "JAVA 11", "Angular", "AWS", "Docker"],
    period: "2020 – 2023",
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Mes projets principaux</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
