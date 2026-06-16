import type { Metadata } from "next";
import Link from "next/link";
import { Users, HeartHandshake, Layers, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import WaveDivider from "@/components/WaveDivider";
import ServiceIntakeForm from "@/components/ServiceIntakeForm";
import SupportQuiz from "@/components/SupportQuiz";
import ScrollReveal from "@/components/ScrollReveal";
import { MeditatingMan } from "@/components/CommunityIllustrations";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TSCSNC's holistic mental health services including community support, supportive groups, wraparound services, and resources & referrals for Black individuals and families.",
};

const services = [
  {
    icon: Users,
    title: "Community Support",
    description:
      "Our community support services connect Black individuals and families to a wide network of trusted local resources, organizations, and services. We work as your advocate and guide — helping you navigate systems, access benefits, and find the help you need without having to do it alone. Whether you need food assistance, housing support, employment resources, or social services, we are here to bridge the gap.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Groups",
    description:
      "Healing happens in community. Our peer-led and professionally facilitated support groups provide safe, affirming spaces for Black individuals to connect, share, and heal together. We offer groups for adults, youth, parents, and seniors — each designed with cultural sensitivity and the specific needs of Black participants in mind. Finding your people and knowing you are not alone can be transformative.",
    cta: "Sign Up",
    href: "/services#intake",
  },
  {
    icon: Layers,
    title: "Wraparound Mental Health Services",
    description:
      "True mental wellness requires care for the whole person. Our wraparound services take a holistic, coordinated approach to mental health — connecting clients with clinical support, community resources, housing stability, and social services all at once. We work collaboratively with providers and community partners to ensure that every aspect of your well-being is addressed with dignity and care.",
    cta: "Learn More",
    href: "/contact",
  },
  {
    icon: BookOpen,
    title: "Resources & Referrals",
    description:
      "We maintain a comprehensive, curated library of trusted mental health providers, community organizations, and educational resources specifically vetted for their cultural competency and commitment to Black well-being. When you come to us, we take the time to understand your needs and connect you with the right providers — whether that means therapy, crisis support, financial assistance, or community programs.",
    cta: "View Resources",
    href: "/resources",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="What We Offer"
        title="Our Services"
        subtitle="Holistic, culturally affirming mental health support designed around the needs of Black individuals and families."
      />

      <WaveDivider fillColor="#FFE5CC" />

      {/* ── FIND YOUR SUPPORT QUIZ ── */}
      <SupportQuiz />

      {/* ── SERVICES GRID ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Help</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Comprehensive Support for Every Stage
            </h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto">
              Every program we offer is grounded in cultural competency, compassion, and a deep commitment to Black mental health equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, description, cta, href }, i) => (
              <ScrollReveal key={title} delay={i * 100} direction="up">
              <div
                className="group bg-white rounded-2xl p-8 shadow-sm border border-brand-light hover:border-primary/30 card-hover flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-brand-light group-hover:bg-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-200">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">{title}</h3>
                <p className="text-brand-dark/70 leading-relaxed flex-1 mb-6">{description}</p>
                <Link
                  href={href}
                  className="self-start px-6 py-2.5 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={`${cta} — ${title}`}
                >
                  {cta}
                </Link>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ILLUSTRATION BREAK ── */}
      <section className="bg-white py-12 md:py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <MeditatingMan className="w-64 md:w-80 h-auto mx-auto drop-shadow-lg" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">You Deserve Peace</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-5 leading-tight">
                  Healing Starts With One Step
                </h2>
                <p className="text-brand-dark/75 text-lg leading-relaxed">
                  Whether you are navigating a crisis, supporting a loved one, or simply ready to start your mental health journey — we are here. Fill out the form below and our team will reach out personally.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INTAKE FORM ── */}
      <section
        id="intake"
        className="bg-gradient-to-br from-primary via-primary to-accent py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-3">Take the First Step</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              You deserve support. Fill out this form and a member of our caring team will reach out to discuss how TSCSNC can best serve you and your family.
            </p>
          </div>

          <ServiceIntakeForm />
        </div>
      </section>
    </>
  );
}
