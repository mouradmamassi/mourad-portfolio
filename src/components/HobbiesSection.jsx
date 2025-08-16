// src/components/HobbiesSection.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

// Mapping des loisirs aux emojis pour un affichage dynamique
const hobbyEmojis = {
  "Musculation": "🏋️",
  "Bodybuilding": "🏋️",
  "Natation": "🏊",
  "Swimming": "🏊",
  "Hackathons": "💻",
  "Course à pied": "🏃",
  "Running": "🏃",
  "Conférences (Devoxx)": "🗣️",
  "Conferences (Devoxx)": "🗣️"
};

export default function HobbiesSection() {
  const { content } = useLanguage();

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{content.hobbies.title}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {content.hobbies.list.map((hobby, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-md font-medium shadow-sm"
            >
              {hobbyEmojis[hobby]} {hobby}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}