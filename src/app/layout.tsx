import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bantu Creative Solutions | Building Brands. Empowering Businesses. Creating Impact.",
  description:
    "Bantu Creative Solutions is a South African creative branding and digital solutions agency rooted in the Ubuntu philosophy. We empower entrepreneurs, startups, and SMEs through professional brand identity, social media design, corporate documents, and website design.",
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
    type: "website",
    locale: "en_ZA",
    siteName: "Bantu Creative Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bantu Creative Solutions",
    description: "Building Brands. Empowering Businesses. Creating Impact.",
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
