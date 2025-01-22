import style from "./footer.module.css";

export default function Footer() {
  return (
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
  );
}
