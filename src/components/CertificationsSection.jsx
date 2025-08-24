// src/components/CertificationsSection.jsx
import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

// Données des certifications
const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services Training and Certification",
    date: {
      fr: "Date de délivrance : août 2025",
      en: "Issued: Aug. 2025"
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
    name: "DevOps Engineering Foundation",
    issuer: "The DevOps Institute",
    date: {
      fr: "Émise le janv. 2023",
      en: "Issued: Jan. 2023"
    },
    logo: "/images/the_devops_institute_logo.jpeg",
    altText: "Logo The DevOps Institute",
    url: "https://www.credly.com/badges/df244510-928f-4316-95f0-60b61405e468/linked_in_profile"
  }
];

const CertificationItem = ({ cert }) => {
  const { content, lang } = useLanguage();

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-white">
      <img
        src={cert.logo}
        alt={cert.altText}
        className="w-16 h-16 rounded-full object-cover border"
      />
      <div className="flex-grow">
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
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <CertificationItem key={index} cert={cert} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}