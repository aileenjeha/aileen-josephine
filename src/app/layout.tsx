import type { Metadata } from "next";
import { Inter, Playfair_Display, Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lemands = localFont({
  src: "./fonts/Lemands.otf",
  variable: "--font-biscuitos",
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aileen Josephine Halim — Portfolio",
  description: "UI/UX Designer & Information Systems Student at Universitas Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${lemands.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
