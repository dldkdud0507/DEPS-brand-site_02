"use client";

import clsx from "clsx";
import { RiHome5Line, RiArrowRightSLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import style from "./gnb.module.css";

export default function Gnb() {
  return (
    <div className={style.gnb_wrap}>
      <div className={style.gnb_top_wrap}>
        <div className={style.sub_01_title_con}>
          <div className={style.depth_link_wrap}>
            <a href="/">
              <RiHome5Line size="18px" color="#111" />
            </a>
            <RiArrowRightSLine size="18px" color="#111" />
            <p>DEPS 소개</p>
            <RiArrowRightSLine size="18px" color="#111" />
            <h6>CEO 인사말</h6>
          </div>
          <h1>DEPS 소개</h1>
        </div>
        <div className={style.tab_wrap}>
          <ul className={style.tab_container}>
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
        </div>
      </div>
      <div className={style.gnb_bottom_wrap}>
        {/* <!-- <img src="./img/sub/gnb/01_deps.svg" alt="뎁스 로고 엠블럼이 들어간 파란색 그라데이션의 격자무늬가 있는 일렉트로닉한 배경"> --> */}
        <div className={style.gnb_txt_container}>
          <h2>주식회사 뎁스는 인공지능기반 융합 솔루션 전문 기업입니다.</h2>
          <p>
            ‘스마트한 사람, 끊임없는 도전으로 성장하는 기업, 행복한 사회’라는
            미션 아래 기술적 트렌드에 대한 지속적 통찰과 연구를 통하여 평범한
            우리의 삶을 놀랍도록 특별하게! 행복하게! 변화시킬 국내 최고의 ‘One
            Top AI 융합 솔루션 전문 기업’으로 달려가고 있습니다.
          </p>
        </div>
        <div className={style.gnb_btn_container}>
          <button
            className={clsx(
              style.button,
              style.button_isi,
              style.button_text_thick,
              style.button_text_upper,
              style.button_size_s
            )}
          >
            <i
              className={clsx(style.button_icon, style.icon, style.icon_box)}
            ></i>
            <div className={style.btn_style_common}>
              <CgFileDocument size="20px" />
              <span>회사소개서 다운로드</span>
            </div>
          </button>
          <button
            className={clsx(
              style.button,
              style.button_isi,
              style.button_text_thick,
              style.button_text_upper,
              style.button_size_s
            )}
          >
            <i
              className={clsx(style.button_icon, style.icon, style.icon_box)}
            ></i>
            <div className={style.btn_style_common}>
              <span>프로젝트 문의하기</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
