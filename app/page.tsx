import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  HeartHandshake,
  Layers,
  BookOpen,
  Heart,
  ArrowRight,
} from "lucide-react";
import StatsBar from "@/components/StatsBar";
import WaveDivider from "@/components/WaveDivider";
import MailingListSection from "@/components/MailingListSection";
import MoodCheckIn from "@/components/MoodCheckIn";
import AffirmationOfDay from "@/components/AffirmationOfDay";
import CommunityVoices from "@/components/CommunityVoices";
import ScrollReveal from "@/components/ScrollReveal";
import HeroParticles from "@/components/HeroParticles";
import MarqueeStrip from "@/components/MarqueeStrip";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "TSCSNC — Embracing Black Mental Health",
  description:
    "Twins Sisters Cumulative Supportive Networking Corporation is dedicated to embracing and uplifting Black mental health through community support, supportive groups, and wraparound services in Oakland, CA.",
};

const missionCards = [
  {
    icon: Users,
    title: "Community Support",
    desc: "Connecting individuals and families with the local resources they need to thrive.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Groups",
    desc: "Peer-led and facilitated group sessions that foster healing and belonging.",
  },
  {
    icon: Layers,
    title: "Wraparound Services",
    desc: "Holistic, coordinated mental health care that meets you where you are.",
  },
];

const whatWeDoCards = [
  {
    icon: Users,
    title: "Community Support",
    desc: "We connect individuals and families to a network of trusted community resources, services, and organizations that can provide immediate and long-term assistance.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Groups",
    desc: "Our peer-led and professionally facilitated groups create safe spaces for Black individuals to share experiences, heal together, and build lasting connections.",
  },
  {
    icon: Layers,
    title: "Wraparound Services",
    desc: "We coordinate holistic, culturally affirming mental health care that addresses the whole person — mind, body, and spirit — through an integrated network of support.",
  },
  {
    icon: BookOpen,
    title: "Resources & Referrals",
    desc: "We maintain a curated network of trusted providers, community partners, and educational resources to help families navigate the mental health landscape with confidence.",
  },
];

const heroStats = [
  { value: "200+", label: "Families Served" },
  { value: "5+", label: "Years of Service" },
  { value: "100%", label: "Community Focused" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-br from-[#7A1500] via-[#E84500] to-[#FF9E00] overflow-hidden">
        {/* Ember particles */}
        <HeroParticles />

        {/* Decorative background blobs */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FF9E00]/20 animate-blob -translate-y-1/4 translate-x-1/4"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF4500]/20 animate-blob-slow translate-y-1/4 -translate-x-1/4"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#FFB347]/10 animate-blob -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />

        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">
            Twins Sisters Cumulative Supportive Networking Corporation
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up animate-delay-100">
            Mental Health Solutions{" "}
            <span className="text-gradient-animate">You Can Trust</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            TSCSNC is dedicated to embracing and uplifting Black mental health in our community through compassionate, culturally affirming care and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-brand-light transition-all duration-200 text-base shadow-lg hover:shadow-xl"
              aria-label="Sign up for our services"
            >
              Sign Up for Services
            </Link>
            <a
              href="https://www.paypal.com/donate/?business=BRMKTTT842JTU&no_recurring=0&currency_code=USD"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary border-2 border-white/30 text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-200 text-base flex items-center justify-center gap-2 shadow-lg"
              aria-label="Make a donation"
            >
              <Heart className="w-5 h-5" aria-hidden="true" />
              Make a Donation
            </a>
          </div>

          {/* Glassmorphism stat panels */}
          <div className="flex flex-wrap justify-center gap-4 mt-14 animate-fade-in-up animate-delay-400">
            {heroStats.map(({ value, label }) => (
              <div key={label} className="glass-panel px-7 py-4 rounded-2xl text-center min-w-[130px]">
                <p className="text-white font-black text-2xl font-heading glow-text">{value}</p>
                <p className="text-white/65 text-xs mt-0.5 font-medium tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <WaveDivider fillColor="#FFF5EC" />

      {/* ── MOOD CHECK-IN ── */}
      <MoodCheckIn />

      {/* ── MISSION STRIP ── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {missionCards.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 120} direction="up">
                <TiltCard className="h-full">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border-b-4 border-primary flex flex-col items-center text-center h-full">
                    <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">{title}</h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">{desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <MarqueeStrip />

      {/* ── WHO WE SERVE ── */}
      <section className="relative bg-brand-light py-16 md:py-24 overflow-hidden">
        {/* Blob backgrounds */}
        <div
          className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 animate-blob"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/15 animate-blob-slow"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Community</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                  Who We Serve
                </h2>
                <p className="text-brand-dark/80 text-lg leading-relaxed mb-6">
                  We provide culturally affirming mental health support to Black individuals, families, and communities — including youth, adults, and seniors facing emotional, behavioral, and social challenges.
                </p>
                <p className="text-brand-dark/70 leading-relaxed mb-8">
                  Our approach is rooted in understanding the unique experiences and strengths of the Black community. We meet our clients where they are, providing compassionate care that honors their cultural identity and lived experiences.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                  aria-label="Learn more about TSCSNC"
                >
                  Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: "200+", label: "Families Supported" },
                  { icon: Heart, value: "5+", label: "Years of Service" },
                  { icon: HeartHandshake, value: "Ubuntu", label: "Our Philosophy" },
                  { icon: BookOpen, value: "East Oakland", label: "Our Home Base" },
                ].map(({ icon: Icon, value, label }) => (
                  <TiltCard key={label}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-light text-center h-full">
                      <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <p className="font-heading font-black text-xl text-primary mb-1">{value}</p>
                      <p className="text-brand-dark/60 text-xs font-medium">{label}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#FFF5EC" />

      {/* ── WHAT WE DO ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                What We Do
              </h2>
              <p className="text-brand-dark/70 max-w-xl mx-auto">
                Comprehensive, holistic support designed around the needs of Black individuals and families.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {whatWeDoCards.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                <TiltCard className="h-full">
                  <div className="group bg-white rounded-2xl p-8 shadow-sm border border-brand-light hover:border-primary/30 h-full transition-colors duration-200">
                    <div className="w-12 h-12 bg-brand-light group-hover:bg-primary rounded-xl flex items-center justify-center mb-5 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{title}</h3>
                    <p className="text-brand-dark/70 leading-relaxed text-sm">{desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP (second) ── */}
      <MarqueeStrip />

      {/* ── STATS BAR ── */}
      <StatsBar />

      {/* ── COMMUNITY VOICES ── */}
      <CommunityVoices />

      {/* ── AFFIRMATION OF THE DAY ── */}
      <AffirmationOfDay />

      {/* ── GET INVOLVED ── */}
      <section className="relative bg-brand-bg py-16 md:py-24 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/8 animate-blob translate-x-1/3 -translate-y-1/3"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Take Action</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Join Our Mission
              </h2>
              <p className="text-brand-dark/70 max-w-xl mx-auto">
                There are many ways to support Black mental health in our community. Find the path that&apos;s right for you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal direction="left" delay={80}>
              <TiltCard className="h-full">
                <Link
                  href="/get-involved"
                  className="group bg-white border-2 border-primary/20 hover:border-primary rounded-2xl p-10 text-center flex flex-col items-center h-full transition-colors duration-200"
                  aria-label="Volunteer with TSCSNC"
                >
                  <div className="w-16 h-16 bg-brand-light group-hover:bg-primary rounded-full flex items-center justify-center mb-5 transition-colors duration-200">
                    <HeartHandshake className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3">Volunteer With Us</h3>
                  <p className="text-brand-dark/70 text-sm mb-5">
                    Share your time and talents to help uplift Black mental health in our community.
                  </p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Get Started <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={80}>
              <TiltCard className="h-full">
                <a
                  href="https://www.paypal.com/donate/?business=BRMKTTT842JTU&no_recurring=0&currency_code=USD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-primary hover:bg-primary-dark rounded-2xl p-10 text-center flex flex-col items-center h-full transition-colors duration-200"
                  aria-label="Make a donation via PayPal"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-5">
                    <Heart className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">Make a Donation</h3>
                  <p className="text-white/80 text-sm mb-5">
                    Your generosity directly funds programs and resources for families in need.
                  </p>
                  <span className="text-white font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Donate Now <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </a>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MAILING LIST ── */}
      <MailingListSection />
    </>
  );
}
