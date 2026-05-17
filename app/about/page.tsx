import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Scale, Users, Zap, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import WaveDivider from "@/components/WaveDivider";
import ScrollReveal from "@/components/ScrollReveal";

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
    body: [
      "Derrick and Darrell, known affectionately as the Twins, were beacons of hope in their community. Their unwavering family values and dedication to communal prosperity earned them admiration and respect. They aspired to create a lasting legacy through their trucking business, employing friends and family. Beyond their entrepreneurial spirit, they nurtured exotic pit bulls, with Derrick becoming a wellspring of knowledge on the breed.",
      "Tragedy struck on Christmas Day 2015 when Derrick passed away, leaving a legacy to be honored. The family faced trials of disconnection and incarceration, and in October 2022, Darrell followed his brother in passing. It was then that I realized the urgency of continuing their vision, marking the start of my transformative journey.",
    ],
  },
  {
    letter: "S",
    word: "Sisters",
    heading: "Forming Bonds of Support",
    body: [
      "In my grief, I felt isolated and misunderstood, which led me to establish the Twins Sisters Grief Support Group. We aimed to create a sisterhood that provided strength and empowerment to women enduring similar pain.",
      "However, our mission expanded to embrace the community, guided by the African philosophy of Ubuntu, which stresses the importance of collective humanity. We endeavored to support our community and family as Derrick and Darrell Joseph had dreamed.",
    ],
  },
  {
    letter: "C",
    word: "Cumulative",
    heading: "Building a United Front",
    body: [
      "The Twins Sisters, the community, and the principles of Ubuntu formed a cumulative force for change. We sought to address the disparities and decline of our once-proud community, exacerbated by the crack epidemic and societal upheaval.",
      "Drawing on my nonprofit experience in East Oakland, I began crafting a business plan for a new nonprofit in honor of the Twins, aiming to revitalize community programs and mend what was broken.",
    ],
  },
  {
    letter: "S",
    word: "Supportive",
    heading: "The Hub of Hope",
    body: [
      "Our plan required us to become a supportive hub, starting in East Oakland and expanding nationwide. We pledged to assist those neglected by the system, securing grants and rallying community support to rebuild our neighborhood, brick by brick.",
      "We aimed to combat social stigma and address the mental health crisis, advocating for systemic change and immediate action.",
    ],
  },
  {
    letter: "N",
    word: "Networking",
    heading: "Creating Connections",
    body: [
      "We set out to construct a robust networking system, partnering with government agencies, nonprofits, and real estate firms to streamline access to resources. Recognizing the flaws in the existing system, we leveraged our lived experiences to rectify what academia could not.",
      "Our goal was to establish a networking pipeline that would facilitate data collection and address racial inequalities, led by those who truly understand the community's needs.",
    ],
  },
  {
    letter: "C",
    word: "Corporation",
    heading: "The Foundation of Tomorrow",
    body: [
      "Currently, we stand as a corporation of individuals committed to a brighter future for our descendants. Our vision is to evolve into a foundation that honors the memory of the Twins, Derrick and Darrell, who sought to empower the communities of Oakland to reclaim their heritage.",
      "This is the essence of the Twins Sisters Cumulative Supportive Networking Corporation, built on the principles of unity and perseverance — and we stand on business. \"You feel me,\" as Derrick would say, encapsulates our shared determination.",
    ],
  },
];

const values = [
  { icon: Heart, label: "Compassion", desc: "We lead with empathy and care in every interaction." },
  { icon: Scale, label: "Equity", desc: "We work to dismantle barriers and ensure fair access to mental health support." },
  { icon: Users, label: "Community", desc: "We believe in the power of collective healing and Ubuntu — I am because we are." },
  { icon: Zap, label: "Empowerment", desc: "We equip individuals with knowledge and tools to advocate for their own well-being." },
  { icon: Shield, label: "Integrity", desc: "We operate with honesty, transparency, and deep respect for those we serve." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Embracing Black Mental Health"
        title="About TSCSNC"
        subtitle="Born from grief. Built on love. Sustained by community."
      />

      <WaveDivider fillColor="#FFF5EC" />

      {/* ── ORIGIN INTRO ── */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Every Letter Has Meaning
            </h2>
            <p className="text-brand-dark/75 text-lg leading-relaxed">
              TSCSNC is not just an acronym — it is a story of love, loss, and radical community care. Each word in our name represents a pillar of who we are and where we come from. This is our story.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ACRONYM STORY SECTIONS ── */}
      {acronymSections.map((section, i) => (
        <section
          key={`${section.letter}-${i}`}
          className={`py-14 md:py-20 ${i % 2 === 0 ? "bg-brand-light" : "bg-brand-bg"}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={60} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Letter badge */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="font-heading font-black text-4xl text-white leading-none">
                      {section.letter}
                    </span>
                  </div>
                  <span className="mt-2 text-xs font-bold text-primary uppercase tracking-widest">
                    {section.word}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-5">
                    {section.heading}
                  </h3>
                  <div className="space-y-4">
                    {section.body.map((para, j) => (
                      <p key={j} className="text-brand-dark/80 leading-relaxed text-base md:text-lg">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ── CLOSING QUOTE ── */}
      <section className="bg-gradient-to-br from-[#7A1500] via-[#E84500] to-[#FF9E00] py-16 md:py-20">
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

      <WaveDivider fillColor="#FFE5CC" />

      {/* ── MISSION & VISION ── */}
      <section className="bg-brand-light py-16 md:py-24">
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
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-primary h-full">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center mb-5">
                  <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Our Mission</h3>
                <p className="text-brand-dark/80 leading-relaxed">
                  To provide culturally competent mental health support, resources, and services to Black individuals and families — creating pathways to healing, resilience, and wholeness through community-centered care rooted in the legacy of Derrick and Darrell Joseph.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-sm h-full">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-5">
                  <Zap className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  A world where Black mental health is prioritized, destigmatized, and fully supported — where Oakland and every community the Twins touched can reclaim their heritage, and where thriving communities are the norm, not the exception.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className="bg-brand-bg py-16 md:py-24">
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
            {[
              {
                initials: "SW",
                name: "Shaquala Watts",
                role: "Founder & Executive Director",
                bio: "Driven by the memory of her brothers Derrick and Darrell, Shaquala founded TSCSNC to honor their legacy and uplift Black mental health in East Oakland. Her nonprofit experience and deep community roots guide every program we build.",
              },
              {
                initials: "NR",
                name: "Nitin Ravikumar",
                role: "Chief Technology Officer",
                bio: "Nitin leads the technology vision for TSCSNC, building the digital infrastructure that connects community members to vital mental health resources. His commitment to accessible tech empowers the organization's reach and impact.",
              },
              {
                initials: "JR",
                name: "Jeffery Redic",
                role: "Community Partner",
                bio: "Jeffery brings deep ties to the East Oakland community and a passionate commitment to the mission of TSCSNC. His leadership and advocacy help bridge the gap between those in need and the resources that can transform lives.",
              },
            ].map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center card-hover border border-brand-light h-full">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                    <span className="text-white font-bold text-2xl font-heading" aria-label={`${member.name} initials`}>
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-brand-dark mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="bg-brand-light py-16 md:py-24">
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
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm card-hover border border-brand-light/50 h-full">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">{label}</h3>
                  <p className="text-brand-dark/60 text-xs leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#1C0300] to-primary py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
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
        </div>
      </section>
    </>
  );
}
