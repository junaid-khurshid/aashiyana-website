import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aashiyana Associates & Real Estate Marketing – Karachi",
  description: "Trusted real estate agency in North Karachi. Buy, sell, rent properties in Surjani, North Karachi, New Karachi, Bufferzone, Shadman, North Nazimabad and Nazimabad.",
  keywords: "real estate karachi, property for rent karachi, house for sale north karachi, surjani town property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}