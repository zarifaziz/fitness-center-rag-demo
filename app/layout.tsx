import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import '@/styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Answer Engine",
  description: "AI Answer Engine powered by RAG + Text2SQL Chatbot",
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
