"use client";

import clsx from "clsx";
import style from "./all_menu.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { Dispatch, SetStateAction } from "react";

export default function AllMenu({
  isAllMenuShow,
  setIsAllMenuShow,
}: {
  isAllMenuShow: boolean;
  setIsAllMenuShow: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      id="all_menu"
      className={clsx(style.all_menu, isAllMenuShow ? style.all_menu_show : "")}
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
          <VscChromeClose size="40px" color="#111" />
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
  );
}
