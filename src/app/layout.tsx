import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bantucreativesolutions.co.za"),
  title: "Bantu Creative Solutions | Building Brands. Empowering Businesses. Creating Impact.",
  description:
    "Bantu Creative Solutions is a South African creative branding and digital solutions agency rooted in the Ubuntu philosophy. We empower entrepreneurs, startups, and SMEs through professional brand identity, social media design, corporate documents, and website design.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Bantu Creative Solutions",
    "South African branding agency",
    "brand identity design",
    "Ubuntu",
    "African creative agency",
    "digital solutions",
    "logo design South Africa",
    "social media design",
    "website design",
    "corporate documents",
  ],
  openGraph: {
    title: "Bantu Creative Solutions",
    description: "Building Brands. Empowering Businesses. Creating Impact.",
    url: "https://www.bantucreativesolutions.co.za",
    type: "website",
    locale: "en_ZA",
    siteName: "Bantu Creative Solutions",
    images: [
      {
        url: "/images/logos/BCS_Primary_Full_GoldOnWhite_v1.png",
        width: 3000,
        height: 1000,
        alt: "Bantu Creative Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bantu Creative Solutions",
    description: "Building Brands. Empowering Businesses. Creating Impact.",
    images: ["/images/logos/BCS_Primary_Full_GoldOnWhite_v1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* Structured data (JSON-LD) — tells search engines who the business is,
   where it operates, and what it offers. Powers rich results / Knowledge Panel. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.bantucreativesolutions.co.za/#organization",
  name: "Bantu Creative Solutions",
  alternateName: ["BANTU", "BCS", "Bantu Creative"],
  url: "https://www.bantucreativesolutions.co.za",
  logo: "https://www.bantucreativesolutions.co.za/images/logos/BCS_Primary_Full_GoldOnWhite_v1.png",
  image: "https://www.bantucreativesolutions.co.za/images/logos/BCS_Primary_Full_GoldOnWhite_v1.png",
  slogan: "Building Brands. Empowering Businesses. Creating Impact.",
  description:
    "Bantu Creative Solutions is a South African creative branding and digital solutions agency rooted in the Ubuntu philosophy, based in Ivory Park, Gauteng. We deliver brand identity, social media design, corporate documents and website design for entrepreneurs, startups and SMEs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ivory Park",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  telephone: "+27-74-976-1442",
  email: "bcs@bantucreativesolutions.co.za",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61590296622368",
    "https://www.tiktok.com/@bantucreativesolutions",
    "https://www.instagram.com/bantu.creativesolutions",
  ],
  priceRange: "$$",
  knowsAbout: [
    "Brand Identity Design",
    "Logo Design",
    "Social Media Design",
    "Corporate Documents",
    "Website Design",
    "Ubuntu Philosophy",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Documents" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
