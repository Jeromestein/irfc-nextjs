import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IRFC | Fertility Care in Southern California",
    template: "%s | IRFC",
  },
  description:
    "Personalized fertility care, advanced reproductive technology, and compassionate support across Southern California.",
  metadataBase: new URL("https://www.irfc.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
