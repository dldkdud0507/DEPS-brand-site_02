"use client";

import "/font/font.css";
import style from "../ceo/ceo.module.css";

export default function CeoPage() {
  return (
    <main>
      <div className={style.content_wrap}>
        <div className={style.page_container}>
          <h1 className={style.page_title_area}>CEO 인사말</h1>
          <div className={style.coment_txt_area}>
            <div className={style.left_top}>
              <img src="/img/icon_ImQuotesLeft.svg" alt="왼쪽 따옴표 아이콘" />
            </div>
            <p>
              <span>One Top! One Team! Top Tech! DEPS</span>는 사람과 환경을
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
                <img src="../img/ceo_sign.svg" alt="황욱철 대표님 서명" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
