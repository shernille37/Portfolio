import Navbar from "@/components/Navbar/Navbar";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Theme from "@/components/Theme/Theme";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
};

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${firaCode.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
        <Theme />
        <Footer />
      </body>
    </html>
  );
}
