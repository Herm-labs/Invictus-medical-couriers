"use client";

import { NAV_LINKS, CONTACT } from "@/lib/constants";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer
      className="bg-navy"
      style={{ padding: "48px max(20px, calc((100vw - 1140px) / 2)) 32px" }}
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-wrap justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-[#0EA5A0] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-base font-bold">I</span>
              </div>
              <span className="font-bold text-[17px] text-white tracking-tight">
                Invictus Medical Couriers
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Professional prescription delivery for independent pharmacies across the DFW metroplex.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            {/* Navigation */}
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Navigation
              </div>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm mb-2.5 transition-colors hover:text-white text-left"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Contact
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-sm mb-2.5 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="block text-sm mb-2.5 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {CONTACT.phone}
              </a>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                {CONTACT.location}
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between items-center gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Invictus Medical Couriers. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            HIPAA-Aware · Professional · Reliable
          </p>
        </div>
      </div>
    </footer>
  );
}
