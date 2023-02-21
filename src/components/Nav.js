import styles from "../pages/Main.module.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { HiMagnifyingGlass } from "react-icons/Hi";
// import Changeheader from "./Changeheaer";
import { useRef } from "react";
import Changeheader from "./Changeheader";
import Animation from "./Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {RxMagnifyingGlass} from "react-icons/rx";


// import { useWindowScroll } from "";
// const LoginValid = styled.div`
//   /* display: flex;
//     justify-content: center; */
//   align-items: center;

//   color: ${(props) => (props.valid ? "transparent" : "orange")};
//   padding: 30px 50px;
//   position: absolute;
//   top: 12px;
//   font-size: 50px;
// `;


// const HiMagnifyingGlass = styled.button`
//   display: block;
//   position: absolute;
//   right: 10px;
//   top: -1px;
//   width: 26px;
//   height: 26px;
//   font-size: 0; 
//   line-height: 0;
//   background: transparent
//     url(https://img.cgv.co.kr/R2014/images/common/ico/search_w.png) center
//     center/26px scroll no-repeat;
// `;

// const Abc = styled.div`
//   color:red;
// `;
function Nav() {
  // const yOffset = useWindowScroll();
  // const _nav = useRef(null);
  // const _gotoCourse = useRef(null);

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", updateScroll);
  // });

  // useEffect(() => {
  //   function headerChange() {
  //     if (updateScroll < 35) {
  //       _nav.current.style = "opacity : 1; pointer-events : all;";
  //       _gotoCourse.current.style = "opacity: 0;  pointer-events: none;";
  //     } else {
  //       _nav.current.style = "opacity: 0; pointer-events: none;";
  //       _gotoCourse.current.style = "opacity: 1;  pointer-events: all;";
  //     }
  //   }
  //   headerChange();
  // }, [updateScroll]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  // const Backgroundchange =
  //   scrollPosition < 200 ? <LoginValid></LoginValid> : styles["change_header"];
  // if (props.isActive) {
  //   className == "active";
  // }
  // const lightBackground =
  //   scrollPosition < 10 ? "original_header" : "change_header";
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", updateScroll);
  //   // console.log(setScrollPosition);
  // });
  return (
    <>
      {/* {scrollPosition < 238 ? <Nav /> : <Changeheader />} */}
      {/* <CourseNavWrapper ref={_nav}>
        <MainNav />
      </CourseNavWrapper>
      <GoToCourseWrapper ref={_gotoCourse}>
        <FontS
          fontSize="2rem"
          color="#2a2a2a"
          fontWeight="normal"
          lineHeigh="1.2"
        >
          핏펫에서 반려동물과 함께하는 나만의 맞춤 여행코스를 계획해보세요!
        </Font>
        <RoundSquareBtn course_btn>Fit한 코스 계획하기</RoundSquareBtn>
      </GoToCourseWrapper> */}

      {/* <div className={`${LoginValid}`}> */}
      <div className={styles.nav}>
        <div className={styles.contents}>
          <h1>
            <a href="/" tabIndex="-1">
              <img
                src="https://img.cgv.co.kr/R2014/images/common/logo/logoWhite.png"
                alt="CGV"
              ></img>
            </a>
          </h1>
          <ul className={styles["nav_menu"]}>
            <li>
              <h6>
                <a href="/movies/?lt=1&amp;ft=0" id={styles.A}>
                  영화
                </a>
              </h6>
              <dl className={styles["nav_overMenu"]}>
                <dt>
                  <h6>
                    <a href="/movies/?lt=1&amp;ft=0" tabIndex="-1">
                      영화
                    </a>
                  </h6>
                </dt>
                <dd>
                  <h3>
                    <a href="/movies/?lt=1&amp;ft=0">무비차트</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/arthouse/">아트하우스</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/culture-event/event/detailViewUnited.aspx?seq=30717">
                      ICECON
                    </a>
                  </h3>
                </dd>
              </dl>
            </li>
            <li>
              <h6>
                <a href="/theaters/" id="B">
                  극장
                </a>
              </h6>
              <dl className={styles["nav_overMenu"]}>
                <dt>
                  <h6>
                    <a href="/theaters/" tabIndex="-1">
                      극장
                    </a>
                  </h6>
                </dt>
                <dd>
                  <h3>
                    <a href="/theaters/">CGV 극장</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/theaters/special/defaultNew.aspx">특별관</a>
                  </h3>
                </dd>
              </dl>
            </li>
            <li>
              <h6>
                <a href="/ticket/" id="C">
                  <strong style={{ fontWeight: 700, color: "#fb4357" }}>
                    예매
                  </strong>
                </a>
              </h6>
              <dl className={styles["nav_overMenu"]}>
                <dt>
                  <h6>
                    <a href="/ticket/" tabIndex="-1">
                      예매
                    </a>
                  </h6>
                </dt>
                <dd>
                  <h3>
                    <a href="/ticket/">빠른예매</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/reserve/show-times/">상영스케줄</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/ticket/eng/newdefault.aspx">English Ticketing</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/reserve/show-times/eng/">English Schedule</a>
                  </h3>
                </dd>
              </dl>
            </li>
            <li>
              <h6>
                <a href="/culture-event/popcorn-store/" id="D">
                  스토어
                </a>
              </h6>
              <dl className={styles["nav_overMenu"]}>
                <dt>
                  <h6>
                    <a href="/culture-event/popcorn-store/" tabIndex="-1">
                      스토어
                    </a>
                  </h6>
                </dt>

                <dd>
                  <h3>
                    <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=2">
                      영화관람권
                    </a>
                  </h3>
                </dd>

                <dd>
                  <h3>
                    <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=3">
                      기프트카드
                    </a>
                  </h3>
                </dd>

                <dd>
                  <h3>
                    <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=4">
                      콤보
                    </a>
                  </h3>
                </dd>

                <dd>
                  <h3>
                    <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=5">
                      팝콘
                    </a>
                  </h3>
                </dd>

                <dd>
                  <h3>
                    <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=6">
                      음료
                    </a>
                  </h3>
                </dd>

                <dd>
                  <h3>
                    <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=7">
                      스낵
                    </a>
                  </h3>
                </dd>

                <dd>
                  <h3>
                    <a href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=10">
                      플레이존
                    </a>
                  </h3>
                </dd>

                <dd>
                  <h3>
                    <a
                      href="https://brand.naver.com/cgv"
                      className="arrowR"
                      target="_blank"
                    >
                      씨네샵
                    </a>
                  </h3>
                </dd>
              </dl>
            </li>
            <li>
              <h6 onClick="gaEventLog('PC_GNB','주메뉴_이벤트','')">
                <a href="/culture-event/event/defaultNew.aspx" id="E">
                  이벤트
                </a>
              </h6>
              <dl className={styles["nav_overMenu"]}>
                <dt>
                  <h6>
                    <a
                      href="/culture-event/event/defaultNew.aspx?mCode=001"
                      tabIndex="-1"
                    >
                      이벤트
                    </a>
                  </h6>
                </dt>
                <dd>
                  <h3>
                    <a href="/culture-event/event/defaultNew.aspx?mCode=001">
                      SPECIAL
                    </a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/culture-event/event/defaultNew.aspx?mCode=004">
                      영화/예매
                    </a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/culture-event/event/defaultNew.aspx?mCode=008">
                      멤버십/CLUB
                    </a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/culture-event/event/defaultNew.aspx?mCode=005">
                      CGV 극장별
                    </a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/culture-event/event/defaultNew.aspx?mCode=006">
                      제휴할인
                    </a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/user/mycgv/event/result_list.aspx">당첨자 발표</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/culture-event/event/end-list.aspx">
                      종료된 이벤트
                    </a>
                  </h3>
                </dd>
              </dl>
            </li>
            <li>
              <h6 onClick="gaEventLog('PC_GNB','주메뉴_해택','')">
                <a href="/discount/discountlist.aspx" id="F">
                  혜택
                </a>
              </h6>
              <dl className={styles["nav_overMenu"]}>
                <dt>
                  <h6>
                    <a href="/discount/discountlist.aspx" tabIndex="-1">
                      혜택
                    </a>
                  </h6>
                </dt>
                <dd>
                  <h3>
                    <a href="/discount/discountlist.aspx">CGV 할인정보</a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="https://www.cgv.co.kr/user/memberShip/ClubService.aspx">
                      CLUB 서비스
                    </a>
                  </h3>
                </dd>
                <dd>
                  <h3>
                    <a href="/user/vip-lounge/">VIP 라운지</a>
                  </h3>
                </dd>
              </dl>
            </li>
          </ul>

          <div className={styles["totalSearch_wrap"]}>
            <label htmlFor="totalSearch">
              <input
                type="text"
                id="header_keyword"
                defaultValue=""
                placeholder="앤트맨과 와스프: 퀀텀매니아"
              ></input>
              <input
                type="hidden"
                id="header_ad_keyword"
                name="header_ad_keyword"
                defaultValue="동감"
              ></input>
            </label>
            {/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" type="button" className={styles["btn_totalSearch2"]}검색/> */}

           <RxMagnifyingGlass type="button" className={styles["btn_totalSearch2"]}>검색</RxMagnifyingGlass>
              {/* <button 
              type="button"
              HiMagnifyingGlass className={styles["btn_totalSearch2"]}
              // id="btn_header_search"
               >
              검색
              
            </button> */}
          
            {/* <iframe
          src="//ad.cgv.co.kr/NetInsight/html/CGV/CGV_201401/main@Search_txt"
          width="0"
          height="0"
          title=""
          frameBorder="0"
          scrolling="no"
          marginWidth="0"
          marginHeight="0"
          allowFullScreen="allowFullScreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullScreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe> */}
            {/* <!--<div className="totalSearchAutocomplete_wrap">
                <dl className="totalSearchAutocomplete_list">
                    <dt>영화</dt>
                    <dd><a href="#none"><strong>전지</strong>적 작가시점</a></dd>
                    <dd><a href="#none">내언니 <strong>전지</strong>현과 나</a></dd>
                    <dd><a href="#none">수호<strong>전지</strong> 영웅본색</a></dd>
                </dl>
                <dl className="totalSearchAutocomplete_list">
                    <dt>인물</dt>
                    <dd><a href="#none"><strong>전지</strong>현</a></dd>
                    <dd><a href="#none"><strong>전지</strong>희</a></dd>
                    <dd><a href="#none">이<strong>전지</strong></a></dd>
                </dl>
                <a href="#none" className="btn_totalSearchAutocomplete_close">닫기</a>
            </div>//--> */}
          </div>
        </div>
      </div>
      {/* {scrollPosition < 196 ? null : (
        <>
          <Animation />
          <Changeheader />
        </>
      )} */}
    </>
  );
}

const CourseNavWrapper = styled.div`
  position: fixed;
  top: 10rem;
  background-color: ${(props) => props.theme.white_color};
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
`;
const GoToCourseWrapper = styled.div`
  white-space: nowrap;
  position: fixed;
  top: 10rem;
  background-color: ${(props) => props.theme.white_color};
  width: 100%;
  height: 8rem;
  padding: 1rem auto;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  z-index: 100;
`;

export default Nav;
