"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "none",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0EA5A0] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-base font-bold">I</span>
            </div>
            <span
              className="font-bold text-[17px] tracking-tight transition-colors duration-300"
              style={{ color: scrolled ? "#0B1F3A" : "white" }}
            >
              Invictus Medical
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200 hover:text-[#0B1F3A]"
                style={{ color: scrolled ? "#475569" : "rgba(255,255,255,0.8)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            className="hidden md:inline-flex cta-btn text-sm !py-2.5 !px-5"
            onClick={() => scrollTo("pilot-program")}
          >
            Start Free Pilot →
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 flex flex-col gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-[22px] h-[2px] rounded-sm transition-colors duration-300"
                style={{ background: scrolled ? "#0B1F3A" : "white" }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: "white", borderColor: "#E2E8F0" }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-5 py-3.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="px-5 py-4 border-t border-slate-100">
            <button
              className="cta-btn w-full justify-center"
              onClick={() => handleNavClick("pilot-program")}
            >
              Start Free Pilot →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
