import type { Metadata } from "next";
import { Geist, Geist_Mono, Heebo, Hepta_Slab } from "next/font/google";
import "./globals.css";

const heeboSans = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
});

const HeptaMono = Hepta_Slab({
  variable: "--font-hepta-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guess the Emojis",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heeboSans.variable} ${HeptaMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
