import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { I18nProvider } from '@/components/layout/i18n-provider';
import Background from '@/components/layout/background';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzmall Expo",
  description: "Uzmall Expo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Uzmall Expo</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        <Background />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
