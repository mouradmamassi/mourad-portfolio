import React, { useEffect, useRef } from "react";

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
    img: "/images/sg.png",
    altText: "société générale icon"
  },
  {
    title: "Hammer — Moteur de Calcul Risque-Crédit — Société Générale",
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
    img: "/images/sg.png",
    altText: "société générale icon"
  },
  {
    title: "SelfCare Monétique — Société Générale",
    description: `
      Application bancaire critique utilisée par environ 8 millions de clients pour gérer leurs services de carte en toute autonomie : opposition, augmentation des plafonds, etc. Ce projet a exigé un haut niveau de sécurité, de disponibilité et de performance, en s'intégrant aux systèmes monétiques nationaux.
    `,
    technologies: ["Spring Boot 2.0", "React 18", "JAVA 11", "Cloud Interne"],
    period: "2020 – 2023",
    img: "/images/sg.png",
    altText: "société générale icon"
  },
  {
    title: "Enrôlement Apple Pay — Société Générale",
    description: `
      Application backend essentielle pour permettre aux clients d’enrôler leur carte bancaire sur Apple Pay. Le système vérifie l’éligibilité du client en se basant sur de nombreuses règles de gestion pour garantir la sécurité, la conformité et une expérience utilisateur optimale pour les paiements mobiles.
    `,
    technologies: ["Spring Boot 2",  "JAVA 11", "Cloud Interne"],
    period: "2020 – 2023",
    img: "/images/sg.png",
    altText: "société générale icon"
  },
  {
    title: "Gestion Clés Cryptographiques — Société Générale",
    description: `
      Outil de description et de génération des clés pour la monétique bancaire, avec une architecture cloud sécurisée. J'ai participé au développement du backend (Spring Boot, Java) et du frontend (Angular), avec un déploiement sécurisé sur AWS via Docker.
    `,
    technologies: ["Spring Boot 2",  "JAVA 11", "Angular", "AWS", "Docker"],
    period: "2020 – 2023",
    img: "/images/sg.png",
    altText: "Société Générale"
  },
  {
    title: "Stage Ingénieur Logiciel — Enedis",
    description: `
      Développement d'une application web pour le domaine d'opération DR Alpes, ajoutant des fonctionnalités non disponibles sur l'outil Sequoia de l'entreprise. Cette application a permis d'optimiser les processus internes et d'offrir une plus grande flexibilité aux utilisateurs pour la gestion des données opérationnelles.
    `,
    technologies: ["Codeigniter", "Laravel", "VueJS", "PHP"],
    period: "2017 - 2018",
    img: "/images/enedis.jpg",
    altText: "Logo d'Enedis"
  }
];

// Données de la formation
const educations = [
  {
    diploma: "Ingénieur en Informatique",
    institution: "Université de Technologie de Belfort-Montbéliard",
    period: "2016 - 2020",
    img: "/images/utbm.webp",
    altText: "Université de technologie de Belfort Montbéliard (UTBM)"
  },
  {
    diploma: "Ingénieur Civil en Informatique, Semestre d'échange",
    institution: "Université de Liège",
    period: "2018 - 2019",
    img: "/images/uliege.jpg",
    altText: "Université de Liège"
  },
  {
    diploma: "Licence en informatique",
    institution: "Université Le Havre Normandie",
    period: "2015 - 2016",
    img: "/images/uhavre.jpg",
    altText: "Université Le Havre"
  },
  {
    diploma: "Licence professionnelle, Logiciel et Développement Web",
    institution: "École normale supérieure - Maroc",
    period: "2014 - 2015",
    img: "/images/university.png",
    altText: "École normale supérieure"
  },
  {
    diploma: "DUT , Génie Informatique",
    institution: "École Supérieure de Technologie - Maroc",
    period: "2012 - 2014",
    img: "/images/university.png",
    altText: "École Supérieure de Technologie"
  },
  {
    diploma: "Baccalauréat, Science Physique",
    institution: "Maghreb Al Arabie - Maroc",
    period: "2011 - 2012",
    img: "/images/university.png",
    altText: "Maghreb Al Arabie - Maroc"
  },
];

// Custom hook pour les animations de défilement
const useIntersectionObserver = (ref, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
};

// Composant pour un élément de la timeline, avec animation
const TimelineItem = ({ item, index }) => {
  const itemRef = useRef(null);
  useIntersectionObserver(itemRef, { threshold: 0.5 }); // Observer l'élément quand il est à moitié visible

  return (
    <div
      ref={itemRef}
      className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full transition-all duration-1000 transform translate-y-10 opacity-0 ${
        index % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
      }`}
    >
      <div className="w-full md:w-1/2 text-center md:pr-12 md:pl-0">
        <div className="bg-white p-6 rounded-2xl shadow-md transition-shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">{item.title || item.diploma}</h3>
          <p className="mt-4 text-gray-700 whitespace-pre-line">
            {item.description || item.institution}
          </p>
          <p className="mt-4 text-sm text-gray-500">Période : {item.period}</p>
          {item.technologies && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="absolute md:relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center -mt-4 md:mt-0 shadow-lg">
        <img src={item.img} alt={item.altText} className="h-6 w-6 md:h-8 md:w-8" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-12 md:pr-0"></div>
    </div>
  );
};

export default function PortfolioPage() {
  return (
    <>
      <style>
        {`
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mes projets principaux</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>
            {projects.map((project, index) => (
              <TimelineItem key={index} item={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mon parcours académique</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block"></div>
            {educations.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
