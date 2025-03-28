import { Cinzel, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import LandingHeader from "@components/components/Header ";
import Footer from "@components/components/Footer ";
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: "400",
});

const cinzel_d = Cinzel_Decorative({
  variable: "--font-cinzel_d",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "UniNav",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#FCF4E4]">
      <body
        className={`${cinzel.variable} ${cinzel_d.variable} antialiased bg-[#FCF4E4]`}
      >
        <LandingHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
