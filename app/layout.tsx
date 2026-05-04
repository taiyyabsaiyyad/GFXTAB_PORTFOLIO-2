import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Taiyyab Saiyyad ✌️",
  description: "Visual Designer & Associate Creative Director specializing in high-fidelity 3D interactive experiences, motion graphics, and brand identity.",
  keywords: "Taiyyab Saiyyad, Visual Designer, Creative Director, Motion Graphics, Brand Identity, UI/UX Design, After Effects, Figma",
  authors: [{ name: "Taiyyab Saiyyad" }],
  creator: "Taiyyab Saiyyad",
  publisher: "Taiyyab Saiyyad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Taiyyab Saiyyad - Visual Designer",
    description: "Visual Designer specializing in high-fidelity 3D interactive experiences and brand identity.",
    url: "https://www.behance.net/taiyyabsaiyyad1",
    siteName: "Taiyyab Saiyyad's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiyyab Saiyyad - Visual Designer",
    description: "Visual Designer specializing in high-fidelity 3D interactive experiences and brand identity.",
  },
  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
