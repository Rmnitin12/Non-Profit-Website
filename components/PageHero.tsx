import FloatingFaces from "@/components/FloatingFaces";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#7A1500] via-[#E84500] to-[#FF9E00] py-20 md:py-28 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/4" aria-hidden="true" />

      {/* Floating illustrated faces */}
      <FloatingFaces variant="page-hero" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="text-secondary/80 text-sm font-medium uppercase tracking-widest mb-3 animate-fade-in-up">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up animate-delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
