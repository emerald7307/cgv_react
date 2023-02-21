// import styles from "../pages/Main.module.css";
import styled from "styled-components";
import styles from "./Event.module.css";
//
import React, { Component } from "react";
import Slider from "react-slick";

// import styles from "../pages/Main.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { dailyBoxOfficeList } from "./notprojectfiles/Data";
import "./slick.css";
import "./slick-theme.css";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

//

const EventDatas = [
  {
    id: 1,
    eventitle: "[더 퍼스트 슬램덩크]팬심대전 응원 상영회",
    evendate: "2023.02.16~2023.02.19",
    evenimg:
      "https://img.cgv.co.kr/WebApp/contents/eventV4/36487/16765244861250.jpg",
  },
  {
    id: 2,
    eventitle: "★미니게임천국★ [카운트] 예매권 이벤트",
    evendate: "2023.02.16~2023.02.22",
    evenimg:
      "https://img.cgv.co.kr/WebApp/contents/eventV4/36449/16760195492890.jpg",
  },
  {
    id: 3,
    eventitle: "★미니게임천국★[대외비] 예매권 100매 쏜다!",
    evendate: "2023.02.13~2023.02.20",
    evenimg:
      "https://img.cgv.co.kr/WebApp/contents/eventV4/36479/16765141838110.jpg",
  },
  {
    id: 4,
    eventitle: "[CGV VIP] VIP PLAY",
    evendate: "2022.12.01~2023.02.28",
    evenimg:
      "https://img.cgv.co.kr/WebApp/contents/eventV4/35945/16698866520870.jpg",
  },
  
];

let slidesToShow = 3;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <div style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <div style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

  export function Event() {
    const settings = {
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />,
      dots: false,
      infinite: false,
      speed: 250,
      // slidesToShow: 5,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      arrows: true,
    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
    // nextArrow: "<button type='button' class='slick-next'>Next</button>",
  };
  return (
    // {EventDatas.map((event) =>
    //    )}
    // {moviedatas.map((item) => (
    <div
      id="ctl00_PlaceHolderContent_event_wrap"
      className={styles["event_wrap"]}
    >
      <div className={styles["event-container"]}>
        <div className={styles["event_title_wrap"]}>
          <h3>EVENT</h3>
          <a
            href="/culture-event/event/defaultNew.aspx"
            id="btn_allView_Event"
            className={styles["btn_allView"]}
          >
            전체보기
          </a>
          <a href="#none" className={styles["btn_eventControl_active"]}>
            playStop
          </a>
        </div>
        <div className={styles["event_list_wrap"]}>
          <div className={styles["event_list"]}>
            <div
              className={styles["swiper-wrapper"]}
              //   style="transform: translate3d(-1004px, 0px, 0px); transition-duration: 0ms;"
            >
              <Slider {...settings}>
                {EventDatas.map((evendata) => (
                  <div
                    className={styles["swiper-slide"]}
                    // style="width: 310.667px; margin-right: 24px;"
                  >
                  <div>
                    <div className={styles["img_wrap"]}>
                      <img src={evendata.evenimg} alt="" />
                    </div>
                    <strong>{evendata.eventitle}</strong>
                    <br></br>
                   <span>{evendata.evendate}</span>
                  </div>
                </div>
                ))}

                
                {/* <div
                  className={styles["swiper-slide"]}
                  // style="width: 310.667px; margin-right: 24px;"
                > */}
                {/* <a
                    onClick="gaEventLog('PC_메인', '이벤트', '쉽고 많은 혜택, [CGV VIP 가보자고!]');"
                    href="/culture-event/event/detailViewUnited.aspx?seq=35676"
                  > */}
                {/* <div className={styles["img_wrap"]}>
                      <img
                        src="https://img.cgv.co.kr/WebApp/contents/eventV4/35676/16704853626680.jpg"
                        alt="쉽고 많은 혜택, [CGV VIP 가보자고!]"
                        onError="errorImage(this)"
                      ></img>
                    </div> */}
                {/* <strong>쉽고 많은 혜택, [CGV VIP 가보자고!]</strong>
                    <span>2022.11.17~2022.12.31</span>
                  </a> */}
                {/* </div> */}

                {/* <div
                  className={styles["swiper-slide"]}
                  style={{ width: "310.667px", marginRight: "24px" }}
                  // style={{ width: "170.4px", marginRight: "24px" }}
                >
                  <a
                    onClick="gaEventLog('PC_메인', '이벤트', 'CGV x TVING 월정기 혜택  [CGV PLUS]');"
                    href="/culture-event/event/detailViewUnited.aspx?seq=35437"
                  >
                    <div className={styles["img_wrap"]}>
                      <img
                        src="https://img.cgv.co.kr/WebApp/contents/eventV4/35437/16699446513440.jpg"
                        alt="CGV x TVING 월정기 혜택  [CGV PLUS]"
                        onError="errorImage(this)"
                      ></img>
                    </div>
                    <strong>CGV x TVING 월정기 혜택 [CGV PLUS]</strong>
                    <span>2022.12.02~2032.12.02</span>
                  </a>
                </div> */}

                {/* <div
                  className={styles["img_wraswiper-slide swiper-slide-prevp"]}
                  style={{ width: "310.667px", marginRight: "24px" }}
                >
                  <a
                    onClick="gaEventLog('PC_메인', '이벤트', '[영웅] 필름마크');"
                    href="/culture-event/event/detailViewUnited.aspx?seq=36040"
                  >
                    <div className={styles["img_wrap"]}>
                      <img
                        src="https://img.cgv.co.kr/WebApp/contents/eventV4/36040/16710665279180.jpg"
                        alt="[영웅] 필름마크"
                        onError="errorImage(this)"
                      ></img>
                    </div>
                    <strong>[영웅] 필름마크</strong>
                    <span>2022.12.15~2023.01.08</span>
                  </a>
                </div> */}

                {/* <div
                  className={styles["swiper-slide swiper-slide-active"]}
                  style={{ width: "310.667px", marginRight: "24px" }}
                >
                  <a
                    onClick="gaEventLog('PC_메인', '이벤트', '[아바타: 물의 길]필름마크');"
                    href="/culture-event/event/detailViewUnited.aspx?seq=36039"
                  >
                    <div className={styles["img_wrap"]}>
                      <img
                        src="https://img.cgv.co.kr/WebApp/contents/eventV4/36039/16710664376680.jpg"
                        alt="[아바타: 물의 길]필름마크"
                        onError="errorImage(this)"
                      ></img>
                    </div>
                    <strong>[아바타: 물의 길]필름마크</strong>
                    <span>2022.12.16~2023.01.08</span>
                  </a>
                </div> */}

                {/* <div
                  className={styles["swiper-slide swiper-slide-next"]}
                  style={{ width: "310.667px", marginRight: "24px" }}
                >
                  <a
                    onClick="gaEventLog('PC_메인', '이벤트', '[아바타:물의 길]4DX 스페셜 굿즈');"
                    href="/culture-event/event/detailViewUnited.aspx?seq=36045"
                  >
                    <div className={styles["img_wrap"]}>
                      <img
                        src="https://img.cgv.co.kr/WebApp/contents/eventV4/36045/16710865012840.jpg"
                        alt="[아바타:물의 길]4DX 스페셜 굿즈"
                        onError="errorImage(this)"
                      ></img>
                    </div>
                    <strong>[아바타:물의 길]4DX 스페셜 굿즈</strong>
                    <span>2022.12.16~2022.12.27</span>
                  </a>
                </div> */}

                {/* <div
                  className={styles["swiper-slide"]}
                  style={{ width: "310.667px", marginRight: "24px" }}
                >
                  <a
                    onClick="gaEventLog('PC_메인', '이벤트', '[아바타:물의 길]SX 스페셜 굿즈');"
                    href="/culture-event/event/detailViewUnited.aspx?seq=36044"
                  >
                    <div className={styles["img_wrap"]}>
                      <img
                        src="https://img.cgv.co.kr/WebApp/contents/eventV4/36044/16710864380080.jpg"
                        alt="[아바타:물의 길]SX 스페셜 굿즈"
                        onError="errorImage(this)"
                      ></img>
                    </div>
                    <strong>[아바타:물의 길]SX 스페셜 굿즈</strong>
                    <span>2022.12.16~2022.12.27</span>
                  </a>
                </div> */}

                {/* <div
                  className={styles["swiper-slide"]}
                  style={{ width: "310.667px", marginRight: "24px" }}
                >
                  <a
                    onClick="gaEventLog('PC_메인', '이벤트', '[CGV VIP] VIP PLAY');"
                    href="/culture-event/event/detailViewUnited.aspx?seq=35945"
                  >
                    <div className={styles["img_wrap"]}>
                      <img
                        src="https://img.cgv.co.kr/WebApp/contents/eventV4/35945/16698866520870.jpg"
                        alt="[CGV VIP] VIP PLAY"
                        onError="errorImage(this)"
                      ></img>
                    </div>
                    <strong>[CGV VIP] VIP PLAY</strong>
                    <span>2022.12.01~2023.02.28</span>
                  </a>
                </div> */}
                {/* </div> */}
              </Slider>
              {/* <div
                className="swiper-button-next"
                tabIndex="0"
                role="button"
                aria-label="다음 슬라이드"
                aria-disabled="false"
              ></div>
              <div
                className="swiper-button-prev"
                tabIndex="0"
                role="button"
                aria-label="이전 슬라이드"
                aria-disabled="false"
              ></div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span> */}
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
}

export default Event;
