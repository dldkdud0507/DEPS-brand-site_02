"use client";
import clsx from "clsx";
import style from "./header.module.css";
import { useState } from "react";

export default function Header() {
  // hover를 붙였다 땠다
  //   const depth01Eles = document.querySelector(".menu_wrap");
  //   const bgEles = document.querySelector(".bg");

  //   [depth01Eles, bgEles].forEach((item) => {
  //     item.addEventListener("mouseover", (event) => {
  //       document.querySelector(".header").classList.add("hover");
  //     });
  //     item.addEventListener("mouseleave", (event) => {
  //       document.querySelector(".header").classList.remove("hover");
  //     });
  //   });

  // 상태
  const [isHover, setIsHover] = useState(false);
  const [isAllMenuShow, setIsAllMenuShow] = useState(false);

  // isHover 는 참 / 거짓

  return (
    <>
      <header className={clsx(style.header, isHover ? style.hover : "")}>
        <div
          className={style.bg}
          onMouseEnter={(event) => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <div className={style.header_img_wrap}>
            <video
              src="./video/RICARBONMENT_video.mp4"
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
        <div
          className={style.header_wrap}
          onMouseEnter={(event) => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <div className={style.main_logo_con}>
            <a href="/" className={style.main_logo}></a>
          </div>
          <ul className={style.menu_wrap}>
            <li className={style.depth_01}>
              <a href="/introduce/ceo">DEPS 소개</a>
              <ul className={`${style.sb_menu} ${style.first_sb}`}>
                <li>
                  <a href="/introduce/ceo">CEO 인사말</a>
                </li>
                <li>
                  <a href="/introduce/vision">비전 및 목표</a>
                </li>
                <li>
                  <a href="/introduce/history">연혁 및 조직도</a>
                </li>
                <li>
                  <a href="/introduce/patent">보유특허</a>
                </li>
                <li>
                  <a href="/introduce/recruit">인재상</a>
                </li>
              </ul>
            </li>
            <li className={style.depth_01}>
              <a href="/business/rd">사업분야</a>
              <ul className={style.sb_menu}>
                <li>
                  <a href="/business/rd">자체 R&D</a>
                </li>
                <li>
                  <a href="/business/si">고객 맞춤형 SI</a>
                </li>
                <li>
                  <a href="/business/iot">IoT 기반 환경 통합관리</a>
                </li>
                <li>
                  <a href="/business/cloud">Cloud 운영</a>
                </li>
                <li>
                  <a href="/business/maintain">통합 유지보수</a>
                </li>
              </ul>
            </li>
            <li className={style.depth_01}>
              <a href="/solution/eco">솔루션</a>
              <ul className={style.sb_menu}>
                <li>
                  <a href="/solution/eco">환경모니터링</a>
                </li>
                <li>
                  <a href="/solution/carbon">탄소관리시스템</a>
                </li>
                <li>
                  <a href="/solution/safe">안전관리솔루션</a>
                </li>
                <li>
                  <a href="/solution/function">보유기능</a>
                </li>
              </ul>
            </li>
            <li className={style.depth_01}>
              <a href="/project/web_pj">프로젝트</a>
              <ul className={style.sb_menu}>
                <li>
                  <a href="/project/web_pj">Web</a>
                </li>
                <li>
                  <a href="/project/solution_pj">Solution</a>
                </li>
                <li>
                  <a href="/project/skill">보유기술</a>
                </li>
              </ul>
            </li>
            <li className={style.depth_01}>
              <a href="/service/notice">고객서비스</a>
              <ul className={`${style.sb_menu} ${style.last_sb}`}>
                <li>
                  <a href="/service/notice">공지사항</a>
                </li>
                <li>
                  <a href="/service/news">회사소식</a>
                </li>
                <li>
                  <a href="/service/contact">문의하기</a>
                </li>
                <li>
                  <a href="/service/direction">오시는 길</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={style.header_right}>
            <div className={style.button_01}>
              <button className={style.contect_btn}>
                <a href="/service/contact">문의하기</a>
              </button>
            </div>
            <a
              href="#"
              className={style.site_map_btn}
              onClick={(event) => {
                setIsAllMenuShow(true);
              }}
            ></a>
          </div>
        </div>
      </header>
      <div
        id="all_menu"
        className={clsx(
          style.all_menu,
          isAllMenuShow ? style.all_menu_show : ""
        )}
      >
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
                  경상남도 창원시 의창구 차룡로48번지 52 창원스마트혁신지원센터
                  2층 203호
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.right_all_menu_wrap}>
          <button
            type="button"
            className={style.close_all_menu}
            onClick={(event) => {
              setIsAllMenuShow(false);
            }}
          >
            <img src="/img/icon_VscChromeClose.svg" alt="닫기 버튼 아이콘" />
          </button>
          <ul className={style.all_menu_depth_wrap}>
            <li className={style.all_menu_depth_01}>
              <a href="/introduce/ceo">DEPS 소개</a>
              <ul className={style.all_menu_depth_02_wrap}>
                <li>
                  <a href="/introduce/ceo">CEO 인사말</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/introduce/vision">비전 및 목표</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/introduce/history">연혁 및 조직도</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/introduce/patent">보유특허</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/introduce/recruit">인재상</a>
                </li>
              </ul>
            </li>
            <li className={style.all_menu_depth_01}>
              <a href="/business/rd">사업분야</a>
              <ul className={style.all_menu_depth_02_wrap}>
                <li>
                  <a href="/business/rd">자체 R&D</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/business/si">고객 맞춤형 SI</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/business/iot">IoT 기반 환경 통합관리</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/business/cloud">Cloud 운영</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/business/maintain">통합 유지보수</a>
                </li>
              </ul>
            </li>
            <li className={style.all_menu_depth_01}>
              <a href="/solution/eco">솔루션</a>
              <ul className={style.all_menu_depth_02_wrap}>
                <li>
                  <a href="/solution/eco">환경모니터링</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/solution/carbon">탄소관리시스템</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/solution/safe">안전관리솔루션</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/solution/function">보유기능</a>
                </li>
              </ul>
            </li>
            <li className={style.all_menu_depth_01}>
              <a href="/project/web_pj">프로젝트</a>
              <ul className={style.all_menu_depth_02_wrap}>
                <li>
                  <a href="/project/web_pj">Web</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/project/solution_pj">Solution</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/project/skill">보유기술</a>
                </li>
              </ul>
            </li>
            <li className={style.all_menu_depth_01}>
              <a href="/service/notice">고객서비스</a>
              <ul className={style.all_menu_depth_02_wrap}>
                <li>
                  <a href="/service/notice">공지사항</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/service/news">회사소식</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/service/contact">문의하기</a>
                </li>
                <div className={style.circle}></div>
                <li>
                  <a href="/service/direction">오시는 길</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
