import type { Metadata } from "next";
import { Permanent_Marker, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juanbertos.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${display.variable} ${hand.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
