import React from "react";

/**
 * Composant de la section des compétences.
 * Affiche une liste de compétences clés organisées par catégorie.
 */
export default function SkillsSection() {
  const skills = {
    "Langages & Frameworks": [
      "Java (Spring Boot)",
      "React",
      "JavaScript",
      "Angular",
      "React"
    ],
    "Cloud & DevOps": [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CloudFormation CDK",
      "Terraform",
      "CI/CD",
    ],
    "Bases de données & API": [
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "API Gateway",
    ],
    "Méthodologies": ["Agile", "Scrum", "TDD", "Clean Code", "BDD"],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Mes compétences techniques</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="max-w-xs w-full bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
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