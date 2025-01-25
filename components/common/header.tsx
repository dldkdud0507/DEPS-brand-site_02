"use client";

import clsx from "clsx";
import { VscChromeClose } from "react-icons/vsc";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { CgArrowRight } from "react-icons/cg";
import style from "./header.module.css";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import All_Menu from "./allMenu";
import AllMenu from "./allMenu";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";
import AccordionDemo from "./mobileAllMenu";

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
  const [isMobileAllMenuShow, setIsMobileAllMenuShow] = useState(false);

  const { width } = useWindowSize();

  return (
    <>
      <header className={clsx(style.header, isHover ? style.hover : "")}>
        <div
          className={style.bg}
          onMouseEnter={(event) => {
            if (!width) return;
            if (width >= 1350) {
              setIsHover(true);
            }
          }}
          onMouseLeave={() => {
            if (!width) return;
            if (width >= 1350) {
              setIsHover(false);
            }
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
              <CgArrowRight size="16px" color="#111" />
            </div>
          </div>
        </div>
        <div
          className={style.header_wrap}
          // onMouseEnter={(event) => {
          //   if (!width) return;
          //   if (width >= 1350) {
          //     setIsHover(true);
          //   }
          // }}
          // onMouseLeave={() => {
          //   if (!width) return;
          //   if (width >= 1350) {
          //     setIsHover(false);
          //   }
          // }}
        >
          <div className={style.main_logo_con}>
            <a href="/" className={style.main_logo}></a>
          </div>
          <ul className={style.menu_wrap}>
            <li className={style.depth_01}>
              <a href="/introduce/ceo">DEPS 소개</a>
              <ul className={clsx(style.sb_menu, style.first_sb)}>
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
              <ul className={clsx(style.sb_menu, style.last_sb)}>
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
            <RiBarChartHorizontalLine
              className={style.all_menu_icon}
              size="34px"
              color="#fff"
              onClick={(event) => {
                if (!width) return;
                if (width >= 1350) {
                  setIsAllMenuShow(true);
                } else {
                  setIsMobileAllMenuShow(true);
                }
              }}
            />
          </div>
        </div>
      </header>
      <AllMenu
        isAllMenuShow={isAllMenuShow}
        setIsAllMenuShow={setIsAllMenuShow}
      />
      <div
        className={clsx(
          style.mobile_all_menu,
          isMobileAllMenuShow ? style.mobile_all_menu_show : ""
        )}
      >
        <AccordionDemo />
      </div>
    </>
  );
}
