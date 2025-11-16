import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const siliguri= Hind_Siliguri({
    weight: ["400", "500"],
  variable: "--font-hind-siliguri",
  subsets: ["latin"],
});

// ==========================
// MULTIPLE CUSTOM FONTS
// ==========================

// Satoshi font
const mahfuz_himadri = localFont({
  src: [{ path: "../fonts/Mahfuz-Himadri.ttf", weight: "400" }],
  variable: "--font-mahfuz",
});

const shadhinata = localFont({
  src: [{ path: "../fonts/Shadhinata.ttf", weight: "400" }],
  variable: "--font-shadhinata",
});

const shohid_shafkat = localFont({
  src: [{ path: "../fonts/Shohid-Shafkat-Samir.ttf", weight: "400" }],
  variable: "--font-shohid-shafkat",
});
export const metadata: Metadata = {
  title: "The - Company",
  description: "MH Parvez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} 
          ${geistMono.variable} 
          ${siliguri.variable} 
          ${mahfuz_himadri.variable} 
          ${shadhinata.variable} 
          ${shohid_shafkat.variable} 
        antialiased`}>
        {children}
      </body>
    </html>
  );
}
