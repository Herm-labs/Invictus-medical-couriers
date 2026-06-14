import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invictus Medical Couriers | Prescription Delivery for DFW Pharmacies",
  description:
    "Fast, reliable, HIPAA-aware prescription delivery for independent pharmacies across Dallas-Fort Worth. No software to install. No new workflows. Start your free 2-week pilot today.",
  keywords: [
    "prescription delivery",
    "pharmacy courier",
    "HIPAA compliant delivery",
    "Dallas pharmacy delivery",
    "Fort Worth prescription courier",
    "DFW medical courier",
    "independent pharmacy delivery",
  ],
  openGraph: {
    title: "Invictus Medical Couriers | Prescription Delivery, Done Right.",
    description:
      "Professional prescription delivery built around your pharmacy's workflow. HIPAA-aware. Real-time tracking. Free 2-week pilot for DFW pharmacies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invictus Medical Couriers",
    description: "Prescription delivery for independent pharmacies across DFW.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
