"use client";

import style from "./gnb.module.css";

export default function Gnb() {
  return (
    <div className={style.gnb_wrap}>
      <div className={style.gnb_top_wrap}>
        <div className={style.sub_01_title_con}>
          <div className={style.depth_link_wrap}>
            <a href="/">
              <img src="../img/icon_RiHome5Line.svg" alt="홈 아이콘" />
            </a>
            <img
              src="../img/icon_RiArrowRightSLine.svg"
              alt="오른쪽 화살표 아이콘"
            />
            <p>DEPS 소개</p>
            <img
              src="../img/icon_RiArrowRightSLine.svg"
              alt="오른쪽 화살표 아이콘"
            />
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
            className={`${style.button} ${style.button_isi} ${style.button_text_thick} ${style.button_text_upper} ${style.button_size_s}`}
          >
            <i
              className={`${style.button_icon} ${style.icon} ${style.icon_box}`}
            ></i>
            <div className={style.btn_style_common}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83301 15.0002L14.1663 15.0002V13.3335L5.83301 13.3335V15.0002Z"
                  fill="white"
                />
                <path
                  d="M14.1663 11.6667L5.83301 11.6667V10L14.1663 10V11.6667Z"
                  fill="white"
                />
                <path
                  d="M5.83301 8.33317H9.16634V6.6665H5.83301V8.33317Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 1.6665C3.61929 1.6665 2.5 2.7858 2.5 4.1665L2.5 15.8332C2.5 17.2139 3.61929 18.3332 5 18.3332H15C16.3807 18.3332 17.5 17.2139 17.5 15.8332V7.49984C17.5 4.27818 14.8883 1.6665 11.6667 1.6665L5 1.6665ZM5 3.33317L10.8333 3.33317V7.49984L15.8333 7.49984L15.8333 15.8332C15.8333 16.2934 15.4602 16.6665 15 16.6665H5C4.53977 16.6665 4.16667 16.2934 4.16667 15.8332L4.16667 4.1665C4.16667 3.70627 4.53977 3.33317 5 3.33317ZM12.5 3.41652C13.8427 3.68909 14.9511 4.60739 15.4867 5.83317L12.5 5.83317V3.41652Z"
                  fill="white"
                />
              </svg>
              <span>회사소개서 다운로드</span>
            </div>
          </button>
          <button
            className={`${style.button} ${style.button_isi} ${style.button_text_thick} ${style.button_text_upper} ${style.button_size_s}`}
          >
            <i
              className={`${style.button_icon} ${style.icon} ${style.icon_box}`}
            ></i>
            <div className={style.btn_style_common}>
              <svg
                className={style.contact_us_btn}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5322 5.28589L11.3565 6.46716L14.0817 9.17966L2.74414 9.191L2.74582 10.8577L14.0523 10.8463L11.373 13.5382L12.5543 14.7139L17.2573 9.98891L12.5322 5.28589Z"
                  fill="white"
                />
              </svg>
              <span>프로젝트 문의하기</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
