import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManagerHead } from "@/components/layout/google-tag-manager";
import { MetaPixel } from "@/components/layout/meta-pixel";

export default function MyDocument() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <GoogleTagManagerHead />
        <MetaPixel />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
