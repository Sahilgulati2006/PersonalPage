import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Gulati - AI/ML Engineer & Research Assistant",
  description: "Computer Engineering student at UMass Amherst specializing in AI, autonomous systems, and scalable backend development. AWS Certified with expertise in machine learning, computer vision, and data analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

