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
  keywords: "psychotherapist, psychotherapy, mental health, mental health services, counseling, therapy, therapy sessions, Delhi therapist, online therapy, online counseling, anxiety therapy, depression therapy, relationship counseling, couples counseling, family therapy, child therapy, adolescent therapy, trauma counseling, stress management, grief counseling, panic attacks, PTSD treatment, OCD treatment, bipolar disorder counseling, self-esteem counseling, anger management, phobia treatment, burnout recovery, individual therapy, group therapy, virtual therapy, video therapy, private counseling, confidential therapy, flexible therapy sessions, therapy for adults, therapy for teens, therapy for children, senior mental health care, LGBTQ counseling, women's mental health, men's mental health, corporate wellness, expat counseling Delhi, NRI therapy, best therapist in Delhi, top counselor Delhi, licensed therapist Delhi, affordable therapy Delhi, online therapist India, mental health Delhi NCR, South Delhi therapist, East Delhi therapist, West Delhi therapist, boost self-confidence, resolve conflicts, strengthen relationships, reduce anxiety, manage stress, enhance self-awareness, develop coping skills, overcome trauma, life coaching Delhi, book therapy session, find a therapist near me, talk to a therapist online, therapy clinic Delhi, expert counseling Delhi, top rated therapists Delhi, online psychologist Delhi, clinical psychologist Delhi, holistic therapy, integrative psychotherapy, CBT Delhi, mindfulness therapy, psychodynamic therapy, solution-focused therapy, EMDR Delhi, somatic therapy, hypnotherapy Delhi, what is psychotherapy, how to find a therapist, therapy for life transitions, stress relief counseling, work-life balance counseling, emotional wellbeing, therapy for students Delhi, top psychologist India, therapy for couples, therapy for career stress",
  authors: [{ name: "Yashasvi Singla" }],
  creator: "Yashasvi Singla",
  publisher: "Yashasvi Singla",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
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
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Yashasvi Singla - Psychotherapist',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashasvi Singla - Professional Psychotherapist",
    description: "Expert psychotherapy services by Yashasvi Singla. Specializing in mental health, counseling, and personal development.",
    images: ['/logo.png'],
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
