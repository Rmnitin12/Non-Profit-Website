import type { Metadata } from "next";
import { ExternalLink, Phone, MessageSquare, Brain, Heart, Sparkles, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import WaveDivider from "@/components/WaveDivider";
import BreathingExercise from "@/components/BreathingExercise";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Mental Health Resources",
  description:
    "Explore mental health resources curated for the Black community — from crisis support to therapy directories, NAMI, Therapy for Black Girls, and more.",
};

const mentalHealthInfo = [
  {
    icon: Brain,
    title: "What Is Mental Health?",
    content:
      "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act — and how we handle stress, relate to others, and make choices. Good mental health is not simply the absence of illness; it is the foundation for living a full, connected, and meaningful life.",
  },
  {
    icon: Shield,
    title: "Common Mental Health Conditions",
    content:
      "Anxiety disorders, depression, trauma, and PTSD are among the most prevalent mental health challenges in our community. These are real, medical conditions — not signs of weakness or personal failure. They are treatable, and recovery is possible with the right support and care.",
  },
  {
    icon: Heart,
    title: "Mental Health in the Black Community",
    content:
      "Black Americans face unique mental health challenges shaped by systemic racism, historical trauma, and racial stress. Access to culturally affirming care has historically been limited. Understanding these disparities is essential to addressing them — and to building a community where everyone can thrive.",
  },
  {
    icon: Sparkles,
    title: "Breaking the Stigma",
    content:
      "In many communities, mental health struggles are met with silence or shame. But seeking help is an act of courage and strength. By talking openly about mental health, supporting one another, and accessing care, we collectively dismantle stigma and build a culture of healing and wholeness.",
  },
];

const resources = [
  {
    title: "NAMI",
    fullName: "National Alliance on Mental Illness",
    description:
      "The nation's largest grassroots mental health organization dedicated to building better lives for Americans affected by mental illness.",
    url: "https://www.nami.org",
    type: "link",
    buttonLabel: "Visit nami.org",
  },
  {
    title: "Therapy for Black Girls",
    fullName: "Therapy for Black Girls",
    description:
      "An online space dedicated to encouraging the mental wellness of Black women and girls, including a therapist directory.",
    url: "https://therapyforblackgirls.com",
    type: "link",
    buttonLabel: "Visit therapyforblackgirls.com",
  },
  {
    title: "Black Mental Health Alliance",
    fullName: "Black Mental Health Alliance",
    description:
      "Develops and coordinates behavioral health education, training, and referral services for Black communities.",
    url: "https://blackmentalhealth.com",
    type: "link",
    buttonLabel: "Visit blackmentalhealth.com",
  },
  {
    title: "Crisis Text Line",
    fullName: "Crisis Text Line",
    description:
      "Free, 24/7 mental health crisis support via text message. Text HOME to 741741 to connect with a trained crisis counselor.",
    contact: "Text HOME to 741741",
    url: "sms:741741?body=HOME",
    type: "contact",
    buttonLabel: "Text HOME to 741741",
  },
  {
    title: "988 Lifeline",
    fullName: "988 Suicide & Crisis Lifeline",
    description:
      "Call or text 988 anytime for free, confidential support for people in suicidal crisis or mental health distress.",
    contact: "Call or Text 988",
    url: "tel:988",
    type: "contact",
    buttonLabel: "Call or Text 988",
  },
  {
    title: "SAMHSA Helpline",
    fullName: "SAMHSA National Helpline",
    description:
      "A free, confidential, 24/7 information service providing referrals to local treatment and support groups.",
    contact: "1-800-662-4357",
    url: "tel:+18006624357",
    type: "contact",
    buttonLabel: "1-800-662-4357",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Empowerment"
        title="Mental Health Resources"
        subtitle="Knowledge is power. Explore trusted resources to support your mental wellness journey and that of your community."
      />

      {/* ── CRISIS BANNER ── */}
      <div className="bg-gradient-to-r from-accent via-primary to-accent py-5 px-4 text-center">
        <p className="text-white font-bold text-base md:text-lg max-w-3xl mx-auto">
          <Phone className="inline w-5 h-5 mr-2 align-middle" aria-hidden="true" />
          If you or someone you know is in crisis —{" "}
          <span className="underline underline-offset-2">call or text{" "}
            <a href="tel:988" className="font-black text-xl hover:text-white/80 transition-colors duration-200" aria-label="Call 988 Suicide and Crisis Lifeline">988</a>
          </span>{" "}
          immediately. You are not alone.
        </p>
      </div>

      <WaveDivider fillColor="#FFF5EC" />

      {/* ── MENTAL HEALTH INFO ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Education</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Understanding Mental Health
            </h2>
            <p className="text-brand-dark/70 max-w-xl mx-auto">
              Building awareness is the first step toward healing. Here&apos;s what you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentalHealthInfo.map(({ icon: Icon, title, content }, i) => (
              <ScrollReveal key={title} delay={i * 100} direction="up">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-light card-hover h-full">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                  <p className="text-brand-dark/70 leading-relaxed text-sm">{content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCE CARDS ── */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Trusted Resources</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Find Support
            </h2>
            <p className="text-brand-dark/70 max-w-xl mx-auto">
              These organizations are vetted, trusted, and committed to mental wellness for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-light card-hover flex flex-col">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                  {resource.type === "contact" ? (
                    resource.contact?.includes("Text") ? (
                      <MessageSquare className="w-6 h-6 text-primary" aria-hidden="true" />
                    ) : (
                      <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                    )
                  ) : (
                    <ExternalLink className="w-6 h-6 text-primary" aria-hidden="true" />
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-dark mb-1">{resource.title}</h3>
                <p className="text-primary text-xs font-medium mb-3">{resource.fullName}</p>
                <p className="text-brand-dark/70 text-sm leading-relaxed flex-1 mb-5">
                  {resource.description}
                </p>
                {resource.type === "link" ? (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-colors duration-200 flex items-center gap-1.5"
                    aria-label={`${resource.buttonLabel} — opens in new tab`}
                  >
                    {resource.buttonLabel}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href={resource.url}
                    className="self-start px-5 py-2.5 text-sm font-bold text-white bg-accent hover:bg-primary-dark rounded-xl transition-colors duration-200 flex items-center gap-1.5"
                    aria-label={resource.buttonLabel}
                  >
                    {resource.buttonLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BREATHING EXERCISE ── */}
      <BreathingExercise />

      {/* ── SECOND CRISIS BANNER ── */}
      <section className="bg-gradient-to-br from-accent to-primary py-16 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <Phone className="w-12 h-12 text-white/80 mx-auto mb-4" aria-hidden="true" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            You Are Not Alone
          </h2>
          <p className="text-white/90 text-lg mb-6">
            If you or someone you know is experiencing a mental health crisis, please reach out immediately.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 inline-block">
            <p className="text-white text-4xl font-black font-heading mb-2">988</p>
            <p className="text-white/80 font-medium">Call or Text — Available 24/7</p>
          </div>
        </div>
      </section>
    </>
  );
}
