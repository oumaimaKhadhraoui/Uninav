import { Cinzel, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

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
  description: "Your University Guide!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#FCF4E4]">
      <body
        className={`${cinzel.variable} ${cinzel_d.variable} antialiased `}
      >
        
        {children}
        
      </body>
    </html>
  );
}
