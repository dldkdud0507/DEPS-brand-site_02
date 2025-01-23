"use client";

import "./reset.css";
import "./font/font.css";
import "./ceo_introduce.css";
import style from "./page.module.css";

export default function CeoPage() {
  return (
    <main>
      <div className={style.gnb_wrap}>
        <div className={style.gnb_top_wrap}>
          <div className={style.sub_01_title_con}>
            <div className={style.depth_link_wrap}>
              <a href="./main.html">
                <img src="./img/icon_RiHome5Line.svg" alt="홈 아이콘" />
              </a>
              <img
                src="./img/icon_RiArrowRightSLine.svg"
                alt="오른쪽 화살표 아이콘"
              />
              <p>DEPS 소개</p>
              <img
                src="./img/icon_RiArrowRightSLine.svg"
                alt="오른쪽 화살표 아이콘"
              />
              <h6>CEO 인사말</h6>
            </div>
            <h1>DEPS 소개</h1>
          </div>
          <div className={style.tab_wrap}>
            <ul className={style.tab_container}>
              <li>
                <a href="#">CEO 인사말</a>
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
      <div className={style.content_wrap}>
        <div className={style.page_container}>
          <h1 className={style.page_title_area}>CEO 인사말</h1>
          <div className={style.coment_txt_area}>
            <div className={style.left_top}>
              <img src="/img/icon_ImQuotesLeft.svg" alt="왼쪽 따옴표 아이콘" />
            </div>
            <p>
              <span>One Top! One Team! Toop Tech! DEPS</span>는 사람과 환경을
              위한 데이터와 기술에 집중하여 모두가 행복하고, 지속 가능한 미래를
              위해 노력하는 소프트웨어 개발 전문기업이 되겠습니다.
            </p>
            <div className={style.right_bottom}>
              <img
                src="/img/icon_ImQuotesRight.svg"
                alt="오른쪽 따옴표 아이콘"
              />
            </div>
          </div>
          <img
            className={style.company_img_pc}
            src="/img/deps_company.svg"
            alt="뎁스 회사 건물외관 이미지"
          />
          <img
            className={style.company_img_mo}
            src="/img/deps_company_mo.svg"
            alt="뎁스 회사 건물외관 이미지"
          />
          <div className={style.introduce_txt_wrap}>
            <div className={style.left_introduce_txt_con}>
              <p>꿈을 향해 행동하는 사람들의 이야기</p>
            </div>
            <div className={style.right_introduce_txt_con}>
              <div className={style.introduce_txt_area}>
                <div className={style.introduce_txt}>
                  <p>
                    안녕하십니까?
                    <br />
                    <span>주식회사 뎁스 대표이사 황욱철</span>입니다.
                  </p>
                </div>
                <div className={style.introduce_txt}>
                  <p>
                    저희 주식회사 뎁스는 2019년 7월 설립된 이후 지난 5년간,
                    <br />
                    경상남도 내의 주요 고객과 함께
                    <span>사람과 환경을 위한 데이터와 기술에 집중</span>
                    했습니다.
                    <br />
                    이때, 시민의 안전을 위한 환경적 정보를 수집·분석함으로써
                    지역 친화적인 인공지능 솔루션과 플랫폼을 구축하며,
                    <br />
                    <span>
                      인공지능기반 디지털 융합 솔루션 개발 지역전문기업
                    </span>
                    으로 성장해왔습니다.
                  </p>
                </div>
                <div className={style.introduce_txt}>
                  <p>
                    지역 시민과 기업, 기관에서 요구하는 환경적 데이터를 가공하고
                    분석하며,
                    <br />
                    세계화 이슈에 대응할 수 있는 환경 데이터 수집·가공·분석하는
                    <br />
                    <span>
                      고객 맞춤형 인공지능 ESG 솔루션을 지속적으로 연구·개발
                    </span>
                    하겠습니다.
                  </p>
                </div>
                <div className={style.introduce_txt}>
                  <p>
                    또한, 지역 제조산업 및 환경 모니터링 플랫폼 구축 기술을
                    통하여 지역적 한계를 넘어,
                    <br />
                    <span>
                      글로컬 인공지능 ESG 솔루션 전문기업으로서 지역과 기술을
                      선도하며 사람과 환경의 위한 사회적 가치를 실현
                    </span>
                    하겠습니다.
                  </p>
                </div>
                <div className={style.introduce_txt}>
                  <p>
                    앞으로도 최선을 다하여 고객과 함께 성장하는 주식회사 뎁스가
                    될 것을 약속드리며,
                    <br />
                    <span>
                      경남 IT·SW 스타기업으로서의 책임과 신뢰있는 경영을
                      하겠습니다.
                    </span>
                    <br />
                    <br />
                    감사합니다.
                  </p>
                </div>
              </div>
              <div className={style.sign_wrap}>
                <h4>대표이사</h4>
                <img src="./img/ceo_sign.svg" alt="황욱철 대표님 서명" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
