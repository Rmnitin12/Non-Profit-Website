import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, Scale, Users, Zap, Shield, Target, CheckCircle } from "lucide-react";
import { ElderWisdom, CommunityGroup, MeditatingMan } from "@/components/CommunityIllustrations";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind TSCSNC — born from grief, built on love, and dedicated to embracing Black mental health in Oakland and beyond.",
};

const acronymSections = [
  {
    letter: "T",
    word: "Twins",
    heading: "A Legacy of Community and Strength",
    body: "Derrick and Darrell, known affectionately as the Twins, were beacons of hope in their community. Their unwavering family values and dedication to communal prosperity earned them admiration and respect. They aspired to create a lasting legacy through their trucking business, employing friends and family. Tragedy struck on Christmas Day 2015 when Derrick passed away, and in October 2022, Darrell followed. It was then that I realized the urgency of continuing their vision, marking the start of my transformative journey.",
  },
  {
    letter: "S",
    word: "Sisters",
    heading: "Forming Bonds of Support",
    body: "In my grief, I felt isolated and misunderstood, which led me to establish the Twins Sisters Grief Support Group — a sisterhood providing strength and empowerment to women enduring similar pain. Our mission expanded to embrace the wider community, guided by the African philosophy of Ubuntu: I am because we are.",
  },
  {
    letter: "C",
    word: "Cumulative",
    heading: "Building a United Front",
    body: "The Twins Sisters, the community, and Ubuntu formed a cumulative force for change. Drawing on my nonprofit experience in East Oakland, I began crafting a business plan in honor of the Twins, aiming to revitalize community programs and mend what was broken by the crack epidemic and decades of societal upheaval.",
  },
  {
    letter: "S",
    word: "Supportive",
    heading: "The Hub of Hope",
    body: "Our plan required becoming a supportive hub, starting in East Oakland and expanding nationwide. We pledged to assist those neglected by the system — securing grants, rallying community support, and rebuilding our neighborhood brick by brick while combating social stigma and the mental health crisis.",
  },
  {
    letter: "N",
    word: "Networking",
    heading: "Creating Connections",
    body: "We set out to construct a robust networking system — partnering with government agencies, nonprofits, and real estate firms to streamline access to resources. Leveraging lived experience to rectify what academia could not, we built a pipeline to facilitate data collection and address racial inequalities, led by those who truly understand the community.",
  },
  {
    letter: "C",
    word: "Corporation",
    heading: "The Foundation of Tomorrow",
    body: "Today, we stand as a corporation of individuals committed to a brighter future for our descendants. Our vision is to evolve into a foundation that honors Derrick and Darrell — who sought to empower the communities of Oakland to reclaim their heritage. We stand on business. \"You feel me,\" as Derrick would say.",
  },
];

const values = [
  { icon: Heart, label: "Compassion", desc: "We lead with empathy and care in every interaction." },
  { icon: Scale, label: "Equity", desc: "We work to dismantle barriers and ensure fair access to mental health support." },
  { icon: Users, label: "Community", desc: "We believe in the power of collective healing and Ubuntu — I am because we are." },
  { icon: Zap, label: "Empowerment", desc: "We equip individuals with knowledge and tools to advocate for their own well-being." },
  { icon: Shield, label: "Integrity", desc: "We operate with honesty, transparency, and deep respect for those we serve." },
];

const team = [
  {
    initials: "JR",
    photo: "/team/marvin.png",
    name: "Jeffery Reddic",
    role: "President",
    bio: "Jeffery brings deep ties to the East Oakland community and a passionate commitment to the mission of TSCSNC. His leadership and advocacy help bridge the gap between those in need and the resources that can transform lives.",
    quote: "It takes a village to raise a child, but it takes a village to support that child's parents.",
  },
  {
    initials: "SW",
    photo: "/team/shaquala.png",
    name: "Shaquala (Queen) Watts",
    role: "Founder",
    bio: "Driven by the memory of her brothers Derrick and Darrell, Shaquala founded TSCSNC to honor their legacy and uplift Black mental health in East Oakland. Her nonprofit experience and deep community roots guide every program we build.",
    quote: null,
  },
  {
    initials: "NR",
    photo: "/team/nitin.png",
    name: "Nitin Ravikumar",
    role: "Chief Technology Officer",
    bio: "Nitin leads the technology vision for TSCSNC, building the digital infrastructure that connects community members to vital mental health resources. His commitment to accessible tech empowers the organization's reach and impact.",
    quote: null,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Embracing Black Mental Health"
        title="About TSCSNC"
        subtitle="Born from grief. Built on love. Sustained by community."
      />

      {/* ── MEET THE TEAM ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Meet the Team
              </h2>
              <p className="text-brand-dark/70 max-w-xl mx-auto">
                Guided by the memory of the Twins, lived experience, and an unwavering commitment to Black mental health in Oakland and beyond.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 80}>
                <TiltCard className="h-full">
                  <div className="bg-brand-bg rounded-2xl p-8 shadow-sm text-center border border-brand-light h-full flex flex-col">
                    <div className="w-44 h-44 rounded-full mx-auto mb-5 shadow-md overflow-hidden bg-primary flex items-center justify-center">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={176}
                          height={176}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-bold text-4xl font-heading" aria-label={`${member.name} initials`}>
                          {member.initials}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">{member.bio}</p>
                    {member.quote && (
                      <blockquote className="mt-5 pt-5 border-t border-brand-light">
                        <p className="text-brand-dark/60 text-xs italic leading-relaxed">
                          &ldquo;{member.quote}&rdquo;
                        </p>
                      </blockquote>
                    )}
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* ── OUR STORY INTRO ── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <ElderWisdom className="w-64 md:w-80 h-auto mx-auto drop-shadow-lg" />
            </ScrollReveal>
            <ScrollReveal direction="right">
          <div className="text-center md:text-left">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Every Letter Has Meaning
            </h2>
            <p className="text-brand-dark/75 text-lg leading-relaxed">
              TSCSNC is not just an acronym — it is a story of love, loss, and radical community care. Each word in our name represents a pillar of who we are and where we come from.
            </p>
          </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ACRONYM TIMELINE (single section) ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block" aria-hidden="true" />

            <div className="space-y-10">
              {acronymSections.map((section, i) => (
                <ScrollReveal key={`${section.letter}-${i}`} delay={i * 60} direction="up">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    {/* Letter badge */}
                    <div className="shrink-0 flex flex-col items-center z-10">
                      <div className="w-[72px] h-[72px] bg-primary rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-white">
                        <span className="font-heading font-black text-3xl text-white leading-none">
                          {section.letter}
                        </span>
                      </div>
                      <span className="mt-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                        {section.word}
                      </span>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-brand-bg rounded-2xl p-6 md:p-8 border border-brand-light shadow-sm">
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-dark mb-3">
                        {section.heading}
                      </h3>
                      <p className="text-brand-dark/80 leading-relaxed text-sm md:text-base">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="bg-gradient-to-br from-[#C05820] via-[#D97A48] to-[#F0A868] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="text-5xl text-white/30 font-heading mb-4">&ldquo;</div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
              Built on the principles of unity and perseverance — we stand on business. You feel me.
            </p>
            <p className="text-white/70 font-medium">
              — In memory of Derrick &amp; Darrell Joseph, the Twins
            </p>
          </ScrollReveal>
        </div>
      </section>

      <MarqueeStrip />

      {/* ── MISSION & VISION ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Purpose</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark">
                Mission &amp; Vision
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal direction="left" delay={100}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-primary h-full">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center mb-5">
                    <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Our Mission</h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    To decrease mental health issues in urban communities by providing direct and comprehensive care to individuals in need of psychological and psychiatric help. We collect data from each client to identify root causes — comparing cultures, races, ethnicities, gender, genetics, and personality traits — so we can understand where the issues start and build lasting solutions.
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <TiltCard className="h-full">
                <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-sm h-full">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-5">
                    <Zap className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed">
                    A world where the mind is deprogrammed from its psychological beliefs and reprogrammed to its actual reality. Where Schizophrenia, chronic drug use, and other untreated and undiagnosed mental health issues are no longer ignored — and where every individual can access the comprehensive care needed to break barriers and reclaim their lives.
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── OUR GOALS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Goals</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Wraparound Services for Mental Healthcare
              </h2>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/autism-puzzle-heart.png"
                  alt="Autism awareness puzzle piece heart"
                  width={160}
                  height={160}
                  className="drop-shadow-md"
                />
              </div>
              <p className="text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">
                This is not an overnight process and will take time and contributions from those who want change — but this is one big step toward environmental and economical change.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <ScrollReveal direction="left" delay={80}>
              <div className="bg-brand-bg rounded-2xl p-8 md:p-10 border border-brand-light shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-brand-dark">Services Include, But Are Not Limited To</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Therapy",
                    "Psychiatry",
                    "Case Management",
                    "Client Navigator",
                    "Support Groups",
                    "Housing",
                    "And whatever else is needed to break barriers and lead one to autonomy",
                  ].map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-brand-dark/80 leading-relaxed text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={80}>
              <div className="space-y-6">
                <div className="bg-brand-bg rounded-2xl p-7 border border-brand-light shadow-sm">
                  <h4 className="font-heading font-bold text-lg text-brand-dark mb-3">The Problem We Address</h4>
                  <p className="text-brand-dark/75 leading-relaxed text-sm">
                    There are a multitude of people who suffer from untreated and undiagnosed mental health issues and cannot access proper care. Mental health facilities are over capacity, understaffed, and not equipped for severe mental health services. Schizophrenia and chronic drug use are among the biggest unattended and untreated illnesses affecting our communities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#7A1500] to-[#E84500] rounded-2xl p-7 shadow-sm">
                  <h4 className="font-heading font-bold text-lg text-white mb-3">Our Core Belief</h4>
                  <p className="text-white/90 leading-relaxed text-sm">
                    You have to deprogram the mind from its psychological beliefs in order to reprogram the mind to its actual reality. That&apos;s what treatment and support at TSCSNC will uncover.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ILLUSTRATION ── */}
      <section className="bg-brand-light py-14 md:py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Together We Heal</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-10">
              Built on Community
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <CommunityGroup className="w-full max-w-2xl h-auto mx-auto drop-shadow-md" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What Guides Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map(({ icon: Icon, label, desc }, i) => (
              <ScrollReveal key={label} delay={i * 80} direction="up">
                <TiltCard className="h-full">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-brand-light/50 h-full">
                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">{label}</h3>
                    <p className="text-brand-dark/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#7B3F00] to-primary py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-white/80 mb-8">
              Join us in building a community where Black mental health is embraced and the legacy of the Twins lives on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-brand-light transition-all duration-200"
              >
                View Our Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
