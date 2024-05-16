import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flatmates",
  description: "Find your perfect flatmate",
};

export const viewport: Viewport = {
  themeColor: 'rgb(88 28 135)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
