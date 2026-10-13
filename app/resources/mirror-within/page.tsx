import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import MirrorWithin from "@/components/MirrorWithin";

export const metadata: Metadata = {
  title: "The Mirror Within — Self-Discovery Assessment",
  description:
    "A 60-question self-reflection experience exploring your personality archetype, attachment style, trauma response, and shadow patterns — with journal prompts and a 7-day healing plan.",
};

export default function MirrorWithinPage() {
  return (
    <>
      <PageHero
        breadcrumb="Resources"
        title="The Mirror Within"
        subtitle="A guided self-discovery experience for personality, trauma, and shadow work."
      />

      <section className="bg-brand-bg py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Resources
          </Link>
          <MirrorWithin />
        </div>
      </section>
    </>
  );
}
