import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-playfair" });

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
      <body className={`${inter.className} ${playfair.variable} antialiased bg-[#0a0a0a] text-zinc-50 selection:bg-zinc-800 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
