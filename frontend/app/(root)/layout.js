import "../globals.css";
import LandingHeader from "@components/components/Header ";
import Footer from "@components/components/Footer ";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications

export default function RootLayout({ children }) {
  return (
      <div
        className=" bg-[#FCF4E4]"
      >
        <LandingHeader/>
        {children}
                <ToastContainer position="top-right" autoClose={3000} />
        <Footer/>
      </div>
  );
}
