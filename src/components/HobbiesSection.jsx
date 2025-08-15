import React from "react";

export default function HobbiesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mes centres d'intérêt</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-md font-medium shadow-sm">
            🏋️ Musculation
          </span>
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-md font-medium shadow-sm">
            🏊 Natation
          </span>
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-md font-medium shadow-sm">
            💻 Hackathons
          </span>
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-md font-medium shadow-sm">
            🏃 Course à pied
          </span>
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-md font-medium shadow-sm">
            🗣️ Conférences (Devoxx)
          </span>
        </div>
      </div>
    </section>
  );
}