import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // ← これを追加

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "リラクゼーションサロン",
  description: "癒やしの空間へようこそ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJp.variable} ${montserrat.variable} font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer /> {/* ← これを追加 */}
      </body>
    </html>
  );
}
