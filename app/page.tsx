"use client";

// import "./font/font.css";
import style from "./page.module.css";

export default function Main() {
  return (
    <div></div>
    // <div className={style.main_wrap_contents}>
    //   <main className={style.pages}>
    //     <section className={`${style.sec_01} ${style.section}`}>
    //       <h1 className={style.ex_title}>section 01</h1>
    //     </section>
    //     <section className={`${style.sec_02} ${style.section}`}>
    //       <h1 className={style.ex_title}>section 02</h1>
    //     </section>
    //     <section className={`${style.sec_03} ${style.section}`}>
    //       <h1 className={style.ex_title}>section 03</h1>
    //     </section>
    //     <section className={`${style.sec_04} ${style.section}`}>
    //       <h1 className={style.ex_title}>section 04</h1>
    //     </section>
    //     <section className={`${style.sec_05} ${style.section}`}>
    //       <div className={style.content_area}>
    //         <div className={style.pj_con_txt_wrap}>
    //           <div className={style.txt_wrap}>
    //             <h2>
    //               지역 거점의 다양한 기업들이 주식회사 뎁스와 함께하고 있습니다.
    //             </h2>
    //             <p>
    //               주식회사 뎁스는 고객 만족을 최우선 가치로 삼아 가장 혁신적이고
    //               믿을 수 있는 서비스를 제공하기 위해 최선을 다하고 있습니다.
    //             </p>
    //           </div>
    //           <button
    //             className={`${style.button} ${style.button_isi} ${style.button_text_thick} ${style.button_text_upper} ${style.button_size_s}`}
    //           >
    //             <i
    //               className={`${style.button_icon} ${style.icon} ${style.icon_box}`}
    //             ></i>
    //             <div className={style.btn_wrap}>
    //               <svg
    //                 width="20"
    //                 height="20"
    //                 viewBox="0 0 20 20"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M13.0322 5.28589L11.8565 6.46716L14.5817 9.17966L3.24414 9.191L3.24582 10.8577L14.5523 10.8463L11.873 13.5382L13.0543 14.7139L17.7573 9.98891L13.0322 5.28589Z"
    //                   fill="#00183F"
    //                 />
    //               </svg>
    //               <span>프로젝트 문의하기</span>
    //             </div>
    //           </button>
    //         </div>
    //         <div style={{ padding: "0 100px", overflow: "hidden;" }}>
    //           <div
    //             className={style.swiper_wrapper_custom}
    //             style={{ overflow: "hidden" }}
    //           >
    //             <div className={style.swiper_container}>
    //               <ul className={style.swiper_wrapper}>
    //                 <li className={`${style.swiper_slide} ${style.item01}`}>
    //                   <img
    //                     src="/img/CI_gyeongsangnam_do.svg"
    //                     alt="경상남도 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item02}`}>
    //                   <img
    //                     src="/img/CI_changwon_city.svg"
    //                     alt="창원특레시 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item03}`}>
    //                   <img src="/img/CI_gimhae_city.svg" alt="김해시 로고" />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item04}`}>
    //                   <img
    //                     src="/img/CI_korea_polytechnic_university.svg"
    //                     alt="한국폴리텍대학 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item05}`}>
    //                   <img
    //                     src="/img/CI_kyungnam_university.svg"
    //                     alt="경남대학교 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item06}`}>
    //                   <img
    //                     src="/img/CI_changwon_university.svg"
    //                     alt="창원대학교 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item07}`}>
    //                   <img
    //                     src="/img/CI_munseong_university.svg"
    //                     alt="창원문성대학교 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item08}`}>
    //                   <img
    //                     src="/img/CI_k_shipbuilding.svg"
    //                     alt="케이조선 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item09}`}>
    //                   <img src="/img/CI_stx_engine.svg" alt="STX엔진 로고" />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item10}`}>
    //                   <img src="/img/CI_denso.svg" alt="덴소 로고" />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item11}`}>
    //                   <img src="/img/CI_GNTP.svg" alt="경남테크노파크 로고" />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item12}`}>
    //                   <img
    //                     src="/img/CI_changwon_industrial_promotion_agency.svg"
    //                     alt="창원산업진흥원 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item13}`}>
    //                   <img
    //                     src="/img/CI_road traffic.svg"
    //                     alt="도로교통공단 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item14}`}>
    //                   <img
    //                     src="/img/CI_gimhae_innopolis.svg"
    //                     alt="경남김해강소특구 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item15}`}>
    //                   <img
    //                     src="/img/CI_LX_korea_land_information_corporation.svg"
    //                     alt="한국국토정보공사 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item16}`}>
    //                   <img
    //                     src="/img/CI_southeastern_nuclear_medical_center.svg"
    //                     alt="동남권원자력의학원 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item17}`}>
    //                   <img
    //                     src="/img/CI_korea_institute_of_electrical_research.svg"
    //                     alt="한국전기연구원 로고"
    //                   />
    //                 </li>
    //                 <li className={`${style.swiper_slide} ${style.item18}`}>
    //                   <img
    //                     src="/img/CI_korea_elevator_safety_authority.svg"
    //                     alt="한국승강기안전공단 로고"
    //                   />
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>
  );
}
