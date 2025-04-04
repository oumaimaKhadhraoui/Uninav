import "../globals.css";
import LandingHeader from "@components/components/Header ";
import Footer from "@components/components/Footer ";

export default function RootLayout({ children }) {
  return (
      <div
        className=" bg-[#FCF4E4]"
      >
        <LandingHeader/>
        {children}
        <Footer/>
      </div>
  );
}
