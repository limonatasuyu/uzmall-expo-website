// pages/_app.js
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/components/layout/i18n-provider";
import { GoogleTagManagerBody } from "@/components/layout/google-tag-manager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen overflow-x-hidden`}>
      <GoogleTagManagerBody />
      <I18nProvider>
        <Component {...pageProps} />
      </I18nProvider>
    </div>
  );
}
