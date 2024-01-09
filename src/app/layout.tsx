
import BGContainer from "@/components/BGContainer/BGContainer";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair_Display = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuliia Maltseva portfolio",
  description: "Yuliia Maltseva portfolio",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair_Display.className}>
        <ThemeProvider>
          <BGContainer>
            <Header />
            <main className="container">{children}</main>

            <Footer />
          </BGContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
