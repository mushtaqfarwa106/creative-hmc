import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "../styles/cursor.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "Creative HMC Interior Design | Dubai, UAE",
  description:
    "Design-and-build interiors for healthcare, wellness, hospitality and retail across the UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}