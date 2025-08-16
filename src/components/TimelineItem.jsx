// src/components/TimelineItem.jsx
import React, { useEffect, useRef } from "react";

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
export default function TimelineItem({ item, index, isEducation }) {
  const itemRef = useRef(null);
  useIntersectionObserver(itemRef, { threshold: 0.5 });

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
        <img src={isEducation ? item.img : item.img || "/images/project-default.png"} alt={item.altText} className="h-6 w-6 md:h-8 md:w-8" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-12 md:pr-0"></div>
    </div>
  );
}