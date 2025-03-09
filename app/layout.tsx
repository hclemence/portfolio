import type { Metadata } from "next";

import "./globals.css";
import { Arvo, Poppins, Noto_Serif, Noto_Sans, Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ 
  weight:['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-inter'
})

const noto_serif = Noto_Serif({ 
  weight:['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-noto-serif'
})


const poppins = Poppins({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const maragsa = localFont({ src: '../public/fonts/Maragsa-Display.otf',
  variable: '--font-maragsa'
})

const editorial_new = localFont({
  src: [
    {
      path: '../public/fonts/EditorialNew/PPEditorialNew-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/EditorialNew/PPEditorialNew-Italic.otf',
      weight: '400',
      style: 'italic',
    }
    ],
  variable: '--font-editorial-new'
})



export const metadata: Metadata = {
  title: "Harry Clemence",
  description: "Web Design and Data Science Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${maragsa.variable} ${editorial_new.variable} ${noto_serif.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
