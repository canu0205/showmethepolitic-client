import { Inter } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "정치보여줘.com",
  description: "정치 이슈를 모아서 보여드립니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
