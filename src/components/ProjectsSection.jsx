// src/components/ProjectsSection.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import TimelineItem from "./TimelineItem";

export default function ProjectsSection() {
  const { content } = useLanguage();

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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{content.portfolio.projectsTitle}</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>
            {content.portfolio.projects.map((project, index) => (
              <TimelineItem key={index} item={project} index={index} isEducation={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}