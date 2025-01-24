"use client";

import "/font/font.css";
import style from "../vision/vision.module.css";

export default function VisionPage() {
  return (
    <main>
      <div className={style.content_wrap}>
        <div className={style.page_container}>
          <h1 className={style.page_title_area}>비전 및 목표</h1>
          <div className={style.video_box}>
            <video className={style.video_bg} width="100%" muted autoPlay>
              <source
                src="../video/sub_02_sea_movie_3840x2160.mp4"
                type="video/mp4"
              />
            </video>
            <div className={style.sub_title_wrap}>
              <p>Mission</p>
              <div className={style.sub_txt_wrap}>
                <span>
                  Surprisingly Happy Life! Happy Company! Happy Society!
                </span>
                <p>
                  놀랍게도 행복한 삶, 행복한 기업, 행복한 사회를 위한 꿈을 향해
                  행동하는 사람들의 이야기
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
              <div className={style.circle_container}>
                <div className={style.circle_01}>
                  <p className={style.keyword_txt}>통찰</p>
                  <h3>Insight</h3>
                </div>
                <div className={style.circle_02}>
                  <p className={style.keyword_txt}>책임</p>
                  <h3>Responsibility</h3>
                </div>
                <div className={style.circle_03}>
                  <p className={style.keyword_txt}>연구</p>
                  <h3>Research</h3>
                </div>
                <div className={style.circle_04}>
                  <p className={style.keyword_txt}>도전</p>
                  <h3>Challenge</h3>
                </div>
                <div className={style.circle_container}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
