"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="TSCSNC — Home" className="flex items-center gap-3 group">
          <Image
            src="/images/logotwin.png"
            alt="Twins Sisters CSNC logo"
            width={52}
            height={52}
            className="rounded-xl object-contain group-hover:scale-105 transition-transform duration-200"
            priority
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold text-primary font-heading tracking-wide group-hover:text-primary-dark transition-colors duration-200">
              TSCSNC
            </span>
            <span className="text-[10px] text-brand-dark/60 font-body tracking-widest uppercase">
              Embracing Black Mental Health
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-primary"
                      : "text-brand-dark hover:text-primary"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span
                      style={{ viewTransitionName: "nav-indicator" }}
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/get-involved"
            className="px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
            aria-label="Volunteer with us"
          >
            Volunteer
          </Link>
          <a
            href="https://www.paypal.com/donate/?business=BRMKTTT842JTU&no_recurring=0&currency_code=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200 flex items-center gap-1.5"
            aria-label="Make a donation"
          >
            <Heart className="w-3.5 h-3.5" aria-hidden="true" />
            Donate
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-light transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className="lg:hidden overflow-hidden"
        style={{
          display: "grid",
          gridTemplateRows: mobileOpen ? "1fr" : "0fr",
          opacity: mobileOpen ? 1 : 0,
          transition: "grid-template-rows 280ms ease, opacity 220ms ease",
        }}
      >
        <div className="overflow-hidden">
        <div className="bg-white border-t border-brand-light px-4 py-4 space-y-1">
          {navLinks.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary bg-brand-light font-semibold"
                    : "text-brand-dark hover:text-primary hover:bg-brand-light"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-3 pb-1 flex flex-col gap-3">
            <Link
              href="/get-involved"
              className="text-center py-3 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
            >
              Volunteer
            </Link>
            <a
              href="https://www.paypal.com/donate/?business=BRMKTTT842JTU&no_recurring=0&currency_code=USD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              Donate
            </a>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
