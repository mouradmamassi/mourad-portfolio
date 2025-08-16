// src/components/EducationSection.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import TimelineItem from "./TimelineItem";

export default function EducationSection() {
  const { content } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{content.portfolio.educationTitle}</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block"></div>
          {content.portfolio.educations.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} isEducation={true} />
          ))}
        </div>
      </div>
    </section>
  );
}