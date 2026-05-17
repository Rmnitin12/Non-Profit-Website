import type { Metadata } from "next";
import { ExternalLink, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import WaveDivider from "@/components/WaveDivider";
import DonateSection from "@/components/DonateSection";
import MailingListSection from "@/components/MailingListSection";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Make a difference with TSCSNC — volunteer your time, donate to support Black mental health, or join our mailing list to stay connected.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        breadcrumb="Take Action"
        title="Make a Difference"
        subtitle="Join our growing community of advocates, donors, and volunteers dedicated to embracing Black mental health."
      />

      <WaveDivider fillColor="#FFF5EC" />

      {/* ── VOLUNTEER ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Give Your Time</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                Volunteer With Us
              </h2>
              <p className="text-brand-dark/80 text-lg leading-relaxed mb-4">
                Volunteers are the heartbeat of TSCSNC. Whether you bring professional expertise in mental health, community organizing, communications, or simply a compassionate spirit — there is a meaningful role for you here.
              </p>
              <p className="text-brand-dark/70 leading-relaxed mb-8">
                Our volunteers support group sessions, community outreach events, resource coordination, administrative tasks, and much more. Every hour you give directly strengthens our ability to serve Black individuals and families in need.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Group Facilitation", "Community Outreach", "Event Support", "Administrative Help"].map((role) => (
                  <div key={role} className="flex items-center gap-2 text-sm text-brand-dark/80">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    {role}
                  </div>
                ))}
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9PSYXPgmbjbD47cNvEXBSdbzFV1ToP2upBuB6dLwNpUALbg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-base"
                aria-label="Apply to volunteer with TSCSNC — opens Google Form"
              >
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                Apply to Volunteer
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-light to-secondary/20 rounded-3xl p-10 text-center shadow-xl">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <HeartHandshake className="w-10 h-10 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3">Join the Team</h3>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Volunteers make our work possible. We welcome everyone who is committed to uplifting Black mental health.
                </p>
                <div className="grid grid-cols-2 gap-3 text-center">
                  {[
                    { label: "Volunteer Roles", value: "10+" },
                    { label: "Events per Year", value: "20+" },
                    { label: "Community Impact", value: "Direct" },
                    { label: "Application", value: "Free" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="font-bold text-primary font-heading text-xl">{value}</p>
                      <p className="text-brand-dark/60 text-xs mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-2xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE ── */}
      <section className="bg-brand-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Support Our Mission</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Make a Donation
          </h2>
          <p className="text-brand-dark/70 max-w-xl mx-auto mb-10">
            Your financial support powers our programs, events, and resources. No gift is too small — every contribution brings us closer to a world where Black mental health is fully embraced.
          </p>
          <DonateSection />
        </div>
      </section>

      {/* ── MAILING LIST ── */}
      <MailingListSection
        heading="Stay in the Loop"
        subtext="Be the first to hear about events, volunteer opportunities, and new resources."
        showNameField={true}
      />
    </>
  );
}
