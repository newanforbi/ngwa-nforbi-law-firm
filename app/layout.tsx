import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { firm } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: firm.legalName,
    template: `%s · ${firm.legalName}`,
  },
  description:
    "Official website of Ngwa Nforbi Law Firm. Placeholder copy and Grassfields-inspired design.",
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/brand/favicon-192.png", type: "image/png", sizes: "192x192" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${sourceSans.variable} antialiased grass-grain`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
