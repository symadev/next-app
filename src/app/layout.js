import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ডেটাকে সহজে খুঁজে পেতে: মেটাডাটা ডেটার বিষয়বস্তু, ধরন, তৈরি করার সময় ইত্যাদি সম্পর্কে তথ্য দেয়, যাতে পরে সহজে সার্চ বা ফিল্টার করা যায়।

export const metadata = {
  default: "Learning Next Js",
  template: "%s |Learning Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
