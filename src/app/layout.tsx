import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Nikhil Anand - Freelance Web Developer & Online Marketing Expert",
  description: "Get a free consultation with Nikhil Anand, a dedicated full-time freelancer based in India. With years of experience, Nikhil has helped numerous startup businesses and entrepreneurs establish a strong online presence through high-quality website development and effective online marketing strategies.",
  keywords: "Nikhil Anand, freelance web developer, online marketing expert, startup business, entrepreneurs, website development, online presence, free consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <meta content="width=device-width, initial-scale=0" name="viewport" />
       <body className="min-h-screen bg-black-100 font-poppins">
       <SpeedInsights/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
