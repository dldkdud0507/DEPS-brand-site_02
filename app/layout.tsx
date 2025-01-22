"use client";

import "./reset.css";
import style from "./page.module.css";

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
        <header className={style.header}>
          <div className={style.bg}>
            <div className={style.header_img_wrap}>
              <video
                src="./images/header/RICARBONMENT_video.mp4"
                style={{ width: "332px", height: "189px" }}
                autoPlay={true}
              ></video>
              <div className={style.header_img_txt_wrap}>
                <p>탄소배출량 관리시스템 '리카본먼트' 홍보영상 보러가기</p>
                <img
                  src="/img/icon_CgArrowRight.svg"
                  alt="오른쪽 화살표 아이콘"
                  style={{ width: "16px", height: "16px" }}
                />
              </div>
            </div>
          </div>
          <div className={style.header_wrap}>
            <div className={style.main_logo_con}>
              <a href="./main.html" className={style.main_logo}></a>
            </div>
            <ul className={style.menu_wrap}>
              <li className={style.depth_01}>
                <a href="./sub_01_01.html">DEPS 소개</a>
                <ul className={`${style.sb_menu} ${style.first_sb}`}>
                  <li>
                    <a href="./sub_01_01.html">CEO 인사말</a>
                  </li>
                  <li>
                    <a href="#">비전 및 목표</a>
                  </li>
                  <li>
                    <a href="#">연혁 및 조직도</a>
                  </li>
                  <li>
                    <a href="#">보유특허</a>
                  </li>
                  <li>
                    <a href="#">인재상</a>
                  </li>
                </ul>
              </li>
              <li className={style.depth_01}>
                <a href="#">사업분야</a>
                <ul className={style.sb_menu}>
                  <li>
                    <a href="#">자체 R&D</a>
                  </li>
                  <li>
                    <a href="#">고객 맞춤형 SI</a>
                  </li>
                  <li>
                    <a href="#">IoT 기반 환경 통합관리</a>
                  </li>
                  <li>
                    <a href="#">Cloud 운영</a>
                  </li>
                  <li>
                    <a href="#">통합 유지보수</a>
                  </li>
                </ul>
              </li>
              <li className={style.depth_01}>
                <a href="#">솔루션</a>
                <ul className={style.sb_menu}>
                  <li>
                    <a href="#">환경모니터링</a>
                  </li>
                  <li>
                    <a href="#">탄소관리시스템</a>
                  </li>
                  <li>
                    <a href="#">안전관리솔루션</a>
                  </li>
                  <li>
                    <a href="#">보유기능</a>
                  </li>
                </ul>
              </li>
              <li className={style.depth_01}>
                <a href="#">프로젝트</a>
                <ul className={style.sb_menu}>
                  <li>
                    <a href="#">Web</a>
                  </li>
                  <li>
                    <a href="#">Solution</a>
                  </li>
                  <li>
                    <a href="#">보유기술</a>
                  </li>
                </ul>
              </li>
              <li className={style.depth_01}>
                <a href="#">고객서비스</a>
                <ul className={`${style.sb_menu} ${style.last_sb}`}>
                  <li>
                    <a href="#">공지사항</a>
                  </li>
                  <li>
                    <a href="#">회사소식</a>
                  </li>
                  <li>
                    <a href="#">문의하기</a>
                  </li>
                  <li>
                    <a href="#">오시는 길</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={style.header_right}>
              <div className={style.button_01}>
                <button className={style.contect_btn}>
                  <a href="#">문의하기</a>
                </button>
              </div>
              <a href="#" className={style.site_map_btn}></a>
            </div>
          </div>
        </header>
        <div id="all_menu" className={`${style.js_all_menu} ${style.all_menu}`}>
          <div className={style.left_all_menu_wrap}>
            <div className={style.top_txt_con}>
              <h1>주식회사 뎁스</h1>
              <p>DEPS Technologies Co., Ltd</p>
            </div>
            <div className={style.bottom_txt_con}>
              <img src="/img/all_menu_wh_logo.svg" alt="deps logo" />
              <div className={style.call_info_con}>
                <div className={style.call_info}>
                  <span>TEL</span>
                  <p>055.714.8279</p>
                </div>
                <div className={style.call_info}>
                  <span>FAX</span>
                  <p>055.255.5276</p>
                </div>
                <div className={style.call_info}>
                  <span>E-mail</span>
                  <p>1top@deps.kr</p>
                </div>
                <div className={style.call_info}>
                  <span>주소</span>
                  <p>
                    경상남도 창원시 의창구 차룡로48번지 52
                    창원스마트혁신지원센터 2층 203호
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.right_all_menu_wrap}>
            <button type="button" className={style.close_all_menu}>
              <img src="/img/icon_RiCloseLine.svg" alt="닫기버튼 아이콘" />
            </button>
            <ul className={style.all_menu_depth_wrap}>
              <li className={style.all_menu_depth_01}>
                <a href="#">DEPS 소개</a>
                <ul className={style.all_menu_depth_02_wrap}>
                  <li>
                    <a href="./sub_01_01.html">CEO 인사말</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">비전 및 목표</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">연혁 및 조직도</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">보유특허</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">인재상</a>
                  </li>
                </ul>
              </li>
              <li className={style.all_menu_depth_01}>
                <a href="#">사업분야</a>
                <ul className={style.all_menu_depth_02_wrap}>
                  <li>
                    <a href="#">자체 R&D</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">고객 맞춤형 SI</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">IoT 기반 환경 통합관리</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">Cloud 운영</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">통합 유지보수</a>
                  </li>
                </ul>
              </li>
              <li className={style.all_menu_depth_01}>
                <a href="#">솔루션</a>
                <ul className={style.all_menu_depth_02_wrap}>
                  <li>
                    <a href="#">환경모니터링</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">탄소관리시스템</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">안전관리솔루션</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">보유기능</a>
                  </li>
                </ul>
              </li>
              <li className={style.all_menu_depth_01}>
                <a href="#">프로젝트</a>
                <ul className={style.all_menu_depth_02_wrap}>
                  <li>
                    <a href="#">Web</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">Solution</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">보유기술</a>
                  </li>
                </ul>
              </li>
              <li className={style.all_menu_depth_01}>
                <a href="#">고객서비스</a>
                <ul className={style.all_menu_depth_02_wrap}>
                  <li>
                    <a href="#">공지사항</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">회사소식</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">문의하기</a>
                  </li>
                  <div className={style.circle}></div>
                  <li>
                    <a href="#">오시는 길</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {children}
        <footer className={style.footer}>
          <div className={style.ft_container}>
            <div className={style.ft_top}>
              <a href="#">
                <img src="./img/ft_logo.svg" alt="주식회사 뎁스 로고" />
              </a>
              <ul className={style.ft_menu}>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">이용약관</a>
                </li>
              </ul>
            </div>
            <div className={style.ft_bottom}>
              <div className={style.left_ft_con}>
                <div className={style.txt_info}>
                  <p>대표 : 황욱철</p>
                  <p>사업자번호 : 775-88-01396</p>
                </div>
                <address className={style.address}>
                  (51388) 경상남도 창원시 의창구 차룡로 48번길 52
                  창원스마트혁신지원센터 2층 203호 주식회사 뎁스
                </address>
                <div className={style.txt_info}>
                  <p>TEL : 055-714-8279</p>
                  <p>FAX : 055-255-5276</p>
                  <p>E-mail : 1top@deps.kr</p>
                </div>
              </div>
              <div className={style.copyright}>
                Copyright © 2025 Deps. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
