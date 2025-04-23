import Navbar from "@/components/Navbar/Navbar";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Theme from "@/components/Theme/Theme";
import Footer from "@/components/Footer/Footer";

const title = "Shernille Licud | Portfolio";
const description =
  "Passionate university student and full-stack web developer in Rome, Italy. I build responsive, user-friendly websites with React, ExpressJS, Spring Boot and NextJS.";
const url = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title,
  description,
  category: "technology",
  metadataBase: new URL(url),
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    url,
    description,
    siteName: "Shernille Licud Portfolio",
    type: "website",
  },
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
