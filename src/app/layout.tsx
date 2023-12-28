
import BGContainer from "@/components/BGContainer/BGContainer";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
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
