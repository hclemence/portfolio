import type { Metadata } from "next";
import "@/globals.css"
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const editorial_new = localFont({
  src: [
    {
      path: "../public/fonts/EditorialNew/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EditorialNew/PPEditorialNew-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-editorial-new",
});

export const metadata: Metadata = {
  title: "Harry Clemence",
  description: "Web Design and Data Science Portfolio",
  icons: {
    icon: [
      { url: "portfolio/favicon.ico" },
      { url: "portfolio/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "portfolio/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "portfolio/apple-touch-icon.png",
  },
  manifest: "portfolio/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${editorial_new.variable} ${inter.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
