"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { useConfetti } from "@/hooks/useConfetti";

const subjects = [
  "General Inquiry",
  "Volunteer",
  "Services",
  "Donation",
  "Press",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fireConfetti = useConfetti();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission; TODO: Wire to Formspree, EmailJS, or backend endpoint when ready
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    fireConfetti();
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-brand-light flex flex-col items-center text-center">
        <CheckCircle className="w-14 h-14 text-primary mb-4" aria-hidden="true" />
        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-2">Message Sent!</h3>
        <p className="text-brand-dark/70 max-w-sm">
          Thank you for reaching out. We&apos;ll review your message and get back to you within 2–3 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="mt-6 px-6 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-200 text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-brand-light space-y-5">
      <h3 className="font-heading font-bold text-2xl text-brand-dark mb-2">Send Us a Message</h3>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-brand-dark font-medium text-sm">
          Full Name <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Jane Smith"
          className="px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-brand-dark font-medium text-sm">
          Email Address <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jane@example.com"
          className="px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-subject" className="text-brand-dark font-medium text-sm">
          Subject <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-white"
        >
          <option value="">Select a subject...</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-brand-dark font-medium text-sm">
          Message <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Write your message here..."
          className="px-4 py-3 rounded-xl border border-brand-dark/20 text-brand-dark placeholder-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-primary hover:bg-primary-dark disabled:opacity-70 text-white font-bold rounded-xl transition-colors duration-200 text-base flex items-center justify-center gap-2"
        aria-label="Send your message"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
