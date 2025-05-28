import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

// Import the fonts
import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";

export const metadata: Metadata = {
  title: "VC OS",
  description: "Created by VC OS Team",
};

// Update the RootLayout component to include the font variables in the html tag
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
