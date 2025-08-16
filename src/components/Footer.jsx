// src/components/Footer.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();
  const year = new Date().getFullYear();
  const copyrightText = content.footer.copyright.replace('{year}', year);

  return (
    <footer className="bg-gray-800 text-gray-200 text-center p-4">
      {copyrightText}
    </footer>
  );
}