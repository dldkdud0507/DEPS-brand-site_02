"use client";

import "../../app/globals.css";
import style from "../page.module.css";
import Gnb from "@/components/common/gnb";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

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
        <Gnb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
