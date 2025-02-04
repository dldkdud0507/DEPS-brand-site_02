"use client";

import "/font/font.css";
import { ImPlus } from "react-icons/im";
import style from "../vision/vision.module.css";
import clsx from "clsx";

export default function VisionPage() {
  return (
    <main>
      <div className={style.content_wrap}>
        <h1 className={style.page_title_area}>비전 및 목표</h1>
        <div className={style.page_container}>
          <section className={style.sec_01}>
            <div className={style.video_box}>
              <div className={style.white_bg}></div>
              <video
                className={style.video_bg}
                width="100%"
                loop
                muted
                autoPlay
              >
                <source
                  src="../video/sub_02_sea_movie_3840x2160.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className={style.contect_wrap}>
              <div className={style.sub_title_wrap}>
                <p>Mission</p>
                <div className={style.sub_txt_wrap}>
                  <span>
                    Surprisingly Happy Life! Happy Company! Happy Society!
                  </span>
                  <p>
                    놀랍게도 행복한 삶, 행복한 기업, 행복한 사회를 위한 꿈을
                    향해 행동하는 사람들의 이야기
                  </p>
                </div>
              </div>
              <div className={style.circle_wrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1342"
                  height="411"
                  viewBox="0 0 1342 411"
                  fill="none"
                >
                  <path
                    d="M1135.79 410.5C1075.36 410.5 1019.21 384.2 980.77 339.72C942.33 384.2 886.18 410.5 825.75 410.5C765.32 410.5 709.11 384.18 670.68 339.66C632.24 384.18 576.07 410.5 515.6 410.5C455.13 410.5 398.99 384.19 360.55 339.69C322.11 384.19 265.95 410.5 205.5 410.5C92.46 410.5 0.5 318.54 0.5 205.5C0.5 92.46 92.46 0.5 205.5 0.5C265.95 0.5 322.11 26.81 360.55 71.31C398.99 26.81 455.15 0.5 515.6 0.5C576.05 0.5 632.23 26.82 670.68 71.34C709.11 26.82 765.28 0.5 825.75 0.5C886.22 0.5 942.33 26.8 980.77 71.28C1019.21 26.8 1075.36 0.5 1135.79 0.5C1248.83 0.5 1340.79 92.46 1340.79 205.5C1340.79 318.54 1248.83 410.5 1135.79 410.5Z"
                    fill="white"
                    fill-opacity="0.1"
                    stroke="white"
                    stroke-miterlimit="10"
                  />
                </svg>
                <div className={style.wh_circle_bg_wrap}>
                  <div className={style.wh_circle_bg_01}></div>
                  <div className={style.wh_circle_bg_02}></div>
                  <div className={style.wh_circle_bg_03}></div>
                  <div className={style.wh_circle_bg_04}></div>
                </div>
                <div className={style.circle_container}>
                  <div className={clsx(style.circle_01, style.wh_circle_bg)}>
                    <p className={style.keyword_txt}>통찰</p>
                    <h3>Insight</h3>
                  </div>
                  <div className={clsx(style.circle_02, style.wh_circle_bg)}>
                    <p className={style.keyword_txt}>책임</p>
                    <h3>Responsibility</h3>
                  </div>
                  <div className={clsx(style.circle_03, style.wh_circle_bg)}>
                    <p className={style.keyword_txt}>연구</p>
                    <h3>Research</h3>
                  </div>
                  <div className={clsx(style.circle_04, style.wh_circle_bg)}>
                    <p className={style.keyword_txt}>도전</p>
                    <h3>Challenge</h3>
                  </div>
                </div>
              </div>
              <div className={style.point_wrap}>
                <div className={style.point}></div>
                <div className={style.point}></div>
                <div className={style.point}></div>
                <div className={style.point}></div>
                <div className={style.point}></div>
                <div className={style.point}></div>
              </div>
              <div className={style.content_text_wrap}>
                <div className={style.loadmap_box}>
                  <p className={style.con_tit}>중장기적 기술 로드맵 구축</p>
                  <div className={style.con_text_container}>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        연간 및 중장기 사업목표 수립과 기술 로드맵 구축을 통한
                        체계적인 기술력 확보 체계 마련
                      </li>
                    </ul>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        기술 로드맵에 적합한 인재상 도출 및 단계별 인재
                        육성/도입
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={style.skill_box}>
                  <p className={style.con_tit}>
                    지속적인 연구개발을 통한 기술력 확보
                  </p>
                  <div className={style.con_text_container}>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        기술 로드맵 기반의 연구개발 추진체계 및 방향성 수립
                      </li>
                    </ul>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        사업화와 연계 가능한 연구개발 집중
                      </li>
                    </ul>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        독립적인 기술연구소(P1) 운영을 통한 기업 핵심기술 확보
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={style.trend_box}>
                  <p className={style.con_tit}>
                    기술 트렌드 분석을 통한 미래 기술 선도
                  </p>
                  <div className={style.con_text_container}>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        기술 트렌드와 글로벌 사회의 방향성에 부합하는 미래 기술
                        확보 및 선도
                      </li>
                    </ul>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        기술 트렌드 분석을 통한 통찰력 증대로 급변하는 글로벌 및
                        국내 시장 적응
                      </li>
                    </ul>
                    <ul className={style.point_box}>
                      <li className={style.point_02}></li>
                      <li className={style.vision_text}>
                        지역, 국내, 글로벌 기술 선도 기업 이미지 제고
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={style.identity_wrap}>
              <div className={style.identity_title_wrap}>
                <p>Corporate Identity</p>
                <div className={style.deps_story_title}>
                  <h3>꿈을 향해 행동하는 사람들의 이야기</h3>
                  <p>
                    주식회사 뎁스의 CI에는 꿈, 실행, 사람, 이야기를 담고
                    있습니다.
                    <br /> 뎁스가 추구하는 모든 가치의 중심에는 고객, 사람,
                    세상의 행복이 있습니다.
                    <br />
                    우리 지역과 세상의 행복을 위하여 큰 꿈을 가지고 함께
                    행동하며 더 밝은 내일을 창조합니다.
                  </p>
                </div>
              </div>
              <img src="../../img/CI_deps.svg" alt="격자패턴 위 뎁스 로고 CI" />
              <div className={style.meaning_wrap}>
                <div className={style.star}>
                  <img src="../../img/star.svg" alt="뎁스 별모양 엠블럼 로고" />
                  <div className={style.font_box}>
                    <h6>Star</h6>
                    <p>뎁스는 변화에 앞장섭니다</p>
                  </div>
                </div>
                <ImPlus className={style.plus_icon} />
                <div className={style.dream}>
                  <img src="../../img/D.svg" alt="뎁스로고의 D" />
                  <div className={style.font_box}>
                    <h6>Dream</h6>
                    <p>뎁스는 꿈을 꿉니다</p>
                  </div>
                </div>
                <ImPlus className={style.plus_icon} />
                <div className={style.execution}>
                  <img src="../../img/E.svg" alt="뎁스로고의 E" />
                  <div className={style.font_box}>
                    <div className={style.font_box}>
                      <h6>Execution</h6>
                      <p>뎁스는 행동합니다</p>
                    </div>
                  </div>
                </div>
                <ImPlus className={style.plus_icon} />
                <div className={style.people}>
                  <img src="../../img/P.svg" alt="뎁스로고의 P" />
                  <div className={style.font_box}>
                    <h6>People</h6>
                    <p>뎁스는 함께 합니다</p>
                  </div>
                </div>
                <ImPlus className={style.plus_icon} />
                <div className={style.story}>
                  <img src="../../img/S.svg" alt="뎁스로고의 S" />
                  <div className={style.font_box}>
                    <h6>Story</h6>
                    <p>뎁스는 창조합니다</p>
                  </div>
                </div>
              </div>
              <div className={style.rgb_color_code}>.font_box</div>
            </div>
            <button className={style.ci_download_btn}>CI 로고 다운로드</button>
          </section>
        </div>
      </div>
    </main>
  );
}
