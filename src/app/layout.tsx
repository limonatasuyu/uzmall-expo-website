import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from '@/components/layout/i18n-provider';
import { MetaPixel } from '@/components/layout/meta-pixel';
import { GoogleTagManagerHead, GoogleTagManagerBody } from '@/components/layout/google-tag-manager';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzmall Expo - Leading Real Estate Exhibition & Forum",
  description: "Uzmall Expo is Uzbekistan's premier real estate exhibition and forum, connecting developers, investors, and industry experts. Join us for networking, insights, and opportunities.",
  keywords: ["real estate exhibition", "property expo", "Uzbekistan real estate", "property investment", "real estate forum"],
  openGraph: {
    title: "Uzmall Expo - Leading Real Estate Exhibition & Forum",
    description: "Join Uzbekistan's premier real estate exhibition and forum. Connect with developers, investors and industry experts.",
    url: "https://uzmall-expo.uz",
    siteName: "Uzmall Expo",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Uzmall Expo Preview"
      }
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzmall Expo - Leading Real Estate Exhibition & Forum",
    description: "Join Uzbekistan's premier real estate exhibition and forum. Connect with developers, investors and industry experts.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>Uzmall Expo</title>  
        <GoogleTagManagerHead />
        <MetaPixel />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        <GoogleTagManagerBody />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
