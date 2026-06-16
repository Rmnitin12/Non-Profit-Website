import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import WaveDivider from "@/components/WaveDivider";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TSCSNC — we'd love to hear from you. Reach out about services, volunteering, donations, or general inquiries.",
};

import { LinkedInIcon, NextdoorIcon } from "@/components/icons";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    // TODO: Replace with real email address, created this email address at last working session
    value: "info@twinssisterscsnc.org",
    href: "mailto:info@twinssisterscsnc.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(925) 727-3583",
    href: "tel:+19257273583",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Oakland, CA",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Reach Out"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you have questions, ideas, or just want to connect — our door is always open."
      />

      <WaveDivider fillColor="#FFF5EC" />

      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT — Contact Info */}
            <div className="space-y-5">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Contact Information</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                  We&apos;re Here for You
                </h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  Have questions about our services, want to volunteer, or just need someone to talk to about next steps? Reach out — we respond within 2–3 business days.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-brand-light flex items-center gap-4">
                    <div className="w-11 h-11 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-dark/50 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="font-semibold text-brand-dark hover:text-primary transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-brand-dark">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-light">
                <p className="text-xs text-brand-dark/50 font-medium uppercase tracking-wide mb-4">Follow Us</p>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/shaquala-watts-b1765424/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-brand-dark hover:text-primary transition-colors duration-200 group"
                    aria-label="TSCSNC on LinkedIn"
                  >
                    <div className="w-9 h-9 bg-[#0077B5]/10 group-hover:bg-[#0077B5] rounded-lg flex items-center justify-center transition-colors duration-200">
                      <LinkedInIcon className="w-4 h-4 text-[#0077B5] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="font-medium text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://nextdoor.com/profile/01MSrmrzhJgqLj7wS/?init_source=search_autocomplete"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-brand-dark hover:text-primary transition-colors duration-200 group"
                    aria-label="TSCSNC on Nextdoor"
                  >
                    <div className="w-9 h-9 bg-[#8DB600]/10 group-hover:bg-[#8DB600] rounded-lg flex items-center justify-center transition-colors duration-200">
                      <NextdoorIcon className="w-4 h-4 text-[#8DB600] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="font-medium text-sm">Nextdoor</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
