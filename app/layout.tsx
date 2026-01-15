import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; // <-- New Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Three S Developers",
  description: "Premier Land Development Company in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-20 min-h-screen"> 
          {children}
        </div>
        <Footer /> {/* <-- Footer added here */}
      </body>
    </html>
  );
}
