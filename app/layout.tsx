import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnlyKamz - Professional Photography & Videography",
  description: "Professional photographer and videographer specializing in sports and music industry. Featured work with Dez Bryant, BigXthaPlug, Kevin Gates and more.",
  keywords: "photographer, videographer, sports photography, music photography, Dallas Cowboys, Dez Bryant, BigXthaPlug, Kevin Gates",
  authors: [{ name: "OnlyKamz" }],
  openGraph: {
    title: "OnlyKamz - Professional Photography & Videography",
    description: "Professional photographer and videographer specializing in sports and music industry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
