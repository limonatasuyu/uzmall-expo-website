type PageContent = {
  meta: {
    title: string;
    description: string;
    images: {
      url: string;
      alt: string;
      width: number;
      height: number;
    }[];
  };
  content: {
    [key: string]: string | number | boolean;
  };
};

export async function getPageContent(locale: string): Promise<PageContent> {
  const content = await import(`@/locales/${locale}.json`);
  
  return {
    meta: {
      title: "Uzmall Expo - Leading Real Estate Exhibition & Forum",
      description: content.HomePageParagraph,
      images: [
        {
          url: "/logo-uzmall.png",
          alt: "UzMall Logo",
          width: 1000,
          height: 1000,
        },
      ]
    },
    content: content.default || content
  };
} 