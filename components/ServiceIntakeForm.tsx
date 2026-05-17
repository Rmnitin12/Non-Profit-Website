"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useConfetti } from "@/hooks/useConfetti";

const serviceOptions = [
  "Community Support",
  "Supportive Groups",
  "Wraparound Services",
  "Resources & Referrals",
  "Not Sure",
];

export default function ServiceIntakeForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const fireConfetti = useConfetti();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to Formspree, EmailJS, or backend endpoint when ready
    setSubmitted(true);
    fireConfetti();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-white mb-4" aria-hidden="true" />
        <h3 className="font-heading font-bold text-2xl text-white mb-2">
          Request Received!
        </h3>
        <p className="text-white/80 max-w-md">
          Thank you for reaching out. A member of our team will be in contact with you within 2–3 business days to discuss how we can best support you.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", description: "" }); }}
          className="mt-6 px-6 py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-brand-light transition-colors duration-200 text-sm"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="intake-name" className="text-white font-medium text-sm">
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="intake-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Jane Smith"
          className="px-4 py-3 rounded-xl bg-white/90 text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-white text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="intake-email" className="text-white font-medium text-sm">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="intake-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jane@example.com"
          className="px-4 py-3 rounded-xl bg-white/90 text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-white text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="intake-phone" className="text-white font-medium text-sm">
          Phone Number
        </label>
        <input
          id="intake-phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(XXX) XXX-XXXX"
          className="px-4 py-3 rounded-xl bg-white/90 text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-white text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="intake-service" className="text-white font-medium text-sm">
          Service Interested In <span aria-hidden="true">*</span>
        </label>
        <select
          id="intake-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl bg-white/90 text-brand-dark focus:outline-none focus:ring-2 focus:ring-white text-sm"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2 flex flex-col gap-1.5">
        <label htmlFor="intake-description" className="text-white font-medium text-sm">
          Brief Description of Needs <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="intake-description"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Please share a little about what you're looking for or what challenges you'd like support with..."
          className="px-4 py-3 rounded-xl bg-white/90 text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-white text-sm resize-none"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full py-4 bg-white text-primary font-bold rounded-xl hover:bg-brand-light transition-colors duration-200 text-base"
          aria-label="Submit your service request"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}
