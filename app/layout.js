import { Outfit } from "next/font/google";
import "./globals.css";
// import Header from "./_components/Header";
// import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Rama Collections",
  description:
    "Rama Collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="">
          {/* <Header /> */}
          {children}
          <Toaster />
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}