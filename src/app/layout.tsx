import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psychear",
  description: "Psychear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
