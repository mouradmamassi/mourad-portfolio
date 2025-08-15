// src/components/SkillsSection.jsx
import React, { useEffect, useRef } from "react";

// Custom hook to handle "show on scroll" functionality
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
        observer.unobserve(entry.target);
      }
    };
  }, [ref, options]);
};

// Component for a single skill card
const SkillCard = ({ category, skillList, index }) => {
  const cardRef = useRef(null);
  useIntersectionObserver(cardRef, { threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className="max-w-xs w-full bg-white p-6 rounded-2xl shadow-lg transition-all duration-700 ease-out transform translate-y-4 opacity-0"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const skills = {
    "Expertise & Leadership": [
      "Gestion de projet Agile",
      "Leadership d'équipe",
      "Mentorat & Coaching",
      "Architecture logicielle",
      "Optimisation des API (Java Spring)",
    ],
    "Langages & Frameworks": [
      "Java (Spring Boot)",
      "React",
      "JavaScript",
      "React",
      "Angular",
    ],
    "Cloud & DevOps": [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CloudFormation CDK",
      "CI/CD",
    ],
    "Bases de données & API": [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "RESTful APIs",
      "API Gateway",
    ],
    "Méthodologies": ["Agile", "Scrum", "TDD", "Clean Code"],
  };

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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Mes compétences techniques</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {Object.entries(skills).map(([category, skillList], index) => (
              <SkillCard
                key={category}
                category={category}
                skillList={skillList}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}