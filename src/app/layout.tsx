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
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
              {children}
            </main>

            <Footer />
          </BGContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
