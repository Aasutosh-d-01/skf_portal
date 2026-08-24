import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skfragrances.in"),
  title: { default: "Shah Kripa Fragrances | Premium Alcohol-Free Attars India", template: "%s | Shah Kripa Fragrances" },
  description: "Shop premium alcohol-free attars and 6 ml roll-on attar gift sets in India. Discover Aura, Ethnic and Sovereign collections by Shah Kripa Fragrances.",
  keywords: ["attar", "attar perfume", "alcohol free attar", "premium attar India", "non alcoholic perfume", "unisex attar", "oud attar", "mogra attar", "sandalwood attar", "rose attar", "attar gift set", "Shah Kripa Fragrances", "SKF attar"],
  applicationName: "Shah Kripa Fragrances",
  creator: "Shah Kripa Fragrances",
  publisher: "Shah Kripa Fragrances",
  alternates: { canonical: "/" },
  category: "beauty",
  openGraph: { title: "Shah Kripa Fragrances | Premium Alcohol-Free Attars", description: "Nine signature attars. Three premium collections. Essence of Nature. Purity of Attar.", url: "/", siteName: "Shah Kripa Fragrances", locale: "en_IN", type: "website", images: [{url:"/og.png",width:1200,height:630,alt:"Shah Kripa Fragrances premium attars"}] },
  twitter: { card: "summary_large_image", title: "Shah Kripa Fragrances | Premium Attars", description: "Wear what words cannot say.", images:["/og.png"] },
  robots: { index:true, follow:true, googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1} },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
