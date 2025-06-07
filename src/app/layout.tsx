import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yashasvi Singla - Professional Psychotherapist in Delhi",
  description: "Expert psychotherapy services by Yashasvi Singla. Specializing in mental health, counseling, and personal development. Book online sessions for anxiety, depression, and relationship issues.",
  keywords: "psychotherapist, mental health, counseling, therapy, Delhi, online therapy, anxiety, depression, relationship counseling",
  authors: [{ name: "Yashasvi Singla" }],
  creator: "Yashasvi Singla",
  publisher: "Yashasvi Singla",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Yashasvi Singla - Professional Psychotherapist in Delhi",
    description: "Expert psychotherapy services by Yashasvi Singla. Specializing in mental health, counseling, and personal development.",
    url: "https://yashasvisingla.com",
    siteName: "Yashasvi Singla - Psychotherapist",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashasvi Singla - Professional Psychotherapist",
    description: "Expert psychotherapy services by Yashasvi Singla. Specializing in mental health, counseling, and personal development.",
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
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yashasvisingla.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
