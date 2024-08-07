import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import '@/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Search Bar",
  description: "AI Search Bar powered by Vector Search + Text2SQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
