export function StructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "ExhibitionEvent",
    name: "Uzmall Expo 2025",
    description: "Uzbekistan's premier real estate exhibition and forum",
    startDate: "2025-05-15",
    endDate: "2025-05-17",
    location: {
      "@type": "Place",
      name: "Uzbekistan, Tashkent",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tashkent",
        addressCountry: "UZ"
      }
    },
    organizer: {
      "@type": "Organization",
      name: "UzMall Expo",
      url: "https://uzmall-expo.uz"
    }
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
} 