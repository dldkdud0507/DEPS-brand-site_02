"use client";
import "./globals.css";
import Footer from "@/components/common/footer";
import style from "./page.module.css";
import Header from "@/components/common/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.skip_navi}>
          <a href="#gnb" title="skip_navi">
            메인메뉴 바로가기
          </a>
          <a href="#contents" title="skip_navi">
            본문으로 바로가기
          </a>
        </div>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
