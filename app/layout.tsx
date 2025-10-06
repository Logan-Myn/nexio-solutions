import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexio Solutions | SaaS & App Development Studio",
  description:
    "Professional SaaS and iOS app development studio by Nexio OÜ in Estonia. We build innovative solutions including Dance Hub and custom software for modern businesses.",
  keywords: [
    "SaaS development",
    "iOS app development",
    "custom software",
    "Estonia",
    "Dance Hub",
    "web development",
    "Nexio OÜ",
  ],
  authors: [{ name: "Nexio OÜ" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexio-solutions.tech",
    title: "Nexio Solutions | SaaS & App Development Studio",
    description:
      "Professional SaaS and iOS app development studio by Nexio OÜ, specializing in innovative solutions for modern businesses.",
    siteName: "Nexio Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexio Solutions | SaaS & App Development Studio",
    description:
      "Professional SaaS and iOS app development studio by Nexio OÜ, specializing in innovative solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
