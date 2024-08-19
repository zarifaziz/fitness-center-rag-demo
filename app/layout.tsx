import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Search Assistant",
  description: "AI Search Assistant powered by Vector Search + Text2SQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
