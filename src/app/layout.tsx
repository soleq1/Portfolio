import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ecode-psi.vercel.app/'),
  title: "Edward's Portfolio | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies.",
  keywords: [
    'Full Stack Developer',
    'Web Development',
    'React',
    'TypeScript',
    'Next.js',
    'Software Engineer',
    'Portfolio',
  ],
  openGraph: {
    title: "Edward's Portfolio | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies.",
    siteName: "Edward's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
