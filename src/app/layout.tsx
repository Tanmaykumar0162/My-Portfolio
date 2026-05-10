import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanmay Kumar Sahu | Portfolio",
  description: "GATE-qualified IT undergraduate building LLM-powered applications and end-to-end ML pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}
