import type { Metadata } from "next";
import {Macondo_Swash_Caps, Roboto, Roboto_Condensed} from "next/font/google";
import "./globals.css";

const macandoSwashCaps = Macondo_Swash_Caps({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400" // has only regular
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"], // Thin, Light, Regular, Medium
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans"

});

export const metadata: Metadata = {
  title: "Admin Accelerator",
  description: "mission to have admins tap into the potential of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${macandoSwashCaps.variable} ${roboto.variable} antialiased w-screen `} >
        {children}
      </body>
    </html>
  );
}
