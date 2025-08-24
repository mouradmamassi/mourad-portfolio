// src/components/CertificationsSection.jsx
import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

// Données des certifications
const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services Training and Certification",
    date: {
      fr: "Émise le août 2025 · Expire le août 2028",
      en: "Issued: Aug. 2025 · Expires: Aug. 2028"
    },
    logo: "/images/aws_logo.webp", // You might need to add this image file to your project
    altText: "Logo Amazon Web Services",
    url: "https://www.credly.com/badges/2c5e39e2-1808-49cd-b66d-aef0cdea1813"
  },
  {
    name: "Spring Certified Professional 2024",
    issuer: "VMware",
    date: {
      fr: "Date de délivrance : avr. 2024",
      en: "Issued: Apr. 2024"
    },
    logo: "/images/vmware_logo.jpeg",
    altText: "Logo VMware",
    url: "https://www.credly.com/badges/df4b9d3f-6826-4bbc-912f-d7253ca840e1/linked_in_profile"
  },
  {
    name: "CKAD: Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: {
      fr: "Émise le avr. 2023 · Expire le avr. 2026",
      en: "Issued: Apr. 2023 · Expires: Apr. 2026"
    },
    logo: "/images/the_linux_foundation_logo.jpeg",
    altText: "Logo The Linux Foundation",
    url: "https://www.credly.com/badges/bb115bd4-f439-47d5-b8f7-09a834fdc253/linked_in_profile"
  },
  {
    name: "DevOps Engineering Foundation (DOEF)℠ Certification",
    issuer: "DEVOPS INSTITUTE",
    date: {
      fr: "Émise le juin 2023 · Expire le juin 2025",
      en: "Issued: June 2023 · Expires: June 2025"
    },
    logo: "/images/devops_institute_logo.jpeg",
    altText: "Logo DEVOPS INSTITUTE",
    id: "24412975"
  }
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

const CertificationCard = ({ cert, index }) => {
  const cardRef = useRef(null);
  useIntersectionObserver(cardRef, { threshold: 0.1 });
  const { content, lang } = useLanguage();

  return (
    <div
      ref={cardRef}
      className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl flex items-center gap-6 md:gap-10 transition-all duration-700 ease-out transform translate-y-4 opacity-0"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gray-200">
        <img src={cert.logo} alt={cert.altText} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
      </div>
      <div className="text-left flex-grow">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
          {cert.name}
        </h3>
        <p className="text-md text-gray-700 mb-1">{cert.issuer}</p>
        <p className="text-sm text-gray-500">{cert.date[lang]}</p>
        {cert.id && (
          <p className="text-sm text-gray-500 mt-1">
            {content.certifications.id} : {cert.id}
          </p>
        )}
        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            {content.certifications.viewCredential}
          </a>
        )}
      </div>
    </div>
  );
};

export default function CertificationsSection() {
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
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">{content.certifications.title}</h2>
          <div className="flex flex-col items-center space-y-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}