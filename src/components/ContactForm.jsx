import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    if (!form.email.trim()) newErrors.email = "L'email est requis.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "L'adresse email est invalide.";
    }
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simuler l'envoi de données
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Message envoyé :", form);

    alert("Message envoyé. Merci !");

    setForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    // Tu peux intégrer ici un service comme EmailJS, Formspree ou un backend perso.
    // Exemple d'intégration de Formspree:
    /*
    const response = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok) {
      alert("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
    setIsSubmitting(false);
    */
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contactez-moi</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            className={`w-full border rounded px-4 py-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            className={`w-full border rounded px-4 py-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            value={form.message}
            className={`w-full border rounded px-4 py-2 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleChange}
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white font-bold px-4 py-2 rounded-full transition-colors ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </section>
  );
}