import styles from "../pages/Main.module.css";
import styled from "styled-components";
// import styles from "./Changeheader.module.css";
import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {RxMagnifyingGlass} from "react-icons/rx";
function Changeheader() {
  return (
    // 이떄는 적용이안됨 <div className={["nav_fixed2"]}>
    <div className={styles.fixed}>
      <div className={styles.contents}>
        <h1>
          <a href="/" tabIndex="-1">
            <img
              src="https://img.cgv.co.kr/R2014/images/common/logo/logoWhite.png"
              alt="CGV"
            ></img>
          </a>
        </h1>
        <ul className={styles["nav_menu2"]}>
          <li>
            <h4 className={styles.Menulist}>
              <a href="/movies/?lt=1&amp;ft=0">영화</a>
            </h4>
            <dl className={styles["nav_overMenu"]}>
              <dt>
                <h4>
                  <a href="/movies/?lt=1&amp;ft=0" tabIndex="-1">
                    영화
                  </a>
                </h4>
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
            <h4 className={styles.Menulist2}>
              <a href="/theaters/">극장</a>
            </h4>
            <dl className={styles["nav_overMenu"]}>
              <dt>
                <h4>
                  <a href="/theaters/" tabIndex="-1">
                    극장
                  </a>
                </h4>
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
            <h4 className={styles.Menulist3}>
              <a href="/ticket/">
                <strong>예매</strong>
              </a>
            </h4>
            <dl className={styles["nav_overMenu"]}>
              <dt>
                <h4>
                  <a href="/ticket/" tabIndex="-1">
                    예매
                  </a>
                </h4>
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
            <h4 className={styles.Menulist4}>
              <a href="/culture-event/popcorn-store/">스토어</a>
            </h4>
            <dl className={styles["nav_overMenu"]}>
              <dt>
                <h4>
                  <a href="/culture-event/popcorn-store/" tabIndex="-1">
                    스토어
                  </a>
                </h4>
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
            <h4
              onClick="gaEventLog('PC_GNB','주메뉴_이벤트','')"
              className={styles.Menulist5}
            >
              <a href="/culture-event/event/defaultNew.aspx">이벤트</a>
            </h4>
            <dl className={styles["nav_overMenu"]}>
              <dt>
                <h4>
                  <a
                    href="/culture-event/event/defaultNew.aspx?mCode=001"
                    tabIndex="-1"
                  >
                    이벤트
                  </a>
                </h4>
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
                  <a href="/culture-event/event/end-list.aspx">종료된 이벤트</a>
                </h3>
              </dd>
            </dl>
          </li>
          <li>
            <h4
              onClick="gaEventLog('PC_GNB','주메뉴_해택','')"
              className={styles.Menulist6}
            >
              <a href="/discount/discountlist.aspx">혜택</a>
            </h4>
            <dl className={styles["nav_overMenu"]}>
              <dt>
                <h4>
                  <a href="/discount/discountlist.aspx" tabIndex="-1">
                    혜택
                  </a>
                </h4>
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
          <label htmlFor={styles.totalSearch}>
            <input type="text" id="header_keyword" defaultValue=""></input>
            <input
              type="hidden"
              id="header_ad_keyword"
              name="header_ad_keyword"
            ></input>
          </label>
          {/* <button
            type="button"
            className={styles["btn_totalSearch"]}
            id="btn_header_search"
          >
            검색
          </button> */}
          <RxMagnifyingGlass type="button" className={styles["btn_totalSearch"]}>검색</RxMagnifyingGlass>
          <iframe
            src="//ad.cgv.co.kr/NetInsight/html/CGV/CGV_201401/main@Search_txt"
            width="0"
            height="0"
            title=""
            frameBorder="0"
            scrolling="no"
            marginWidth="0"
            marginHeight="0"
            allowFullScreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
          {/* <!--<div className="totalSearchAutocomplete_wrap">
                <dl className="totalSearchAutocomplete_list">
                    <dt>영화</dt>
                    <dd><a href="#none"><strong>전지</strong>적 작가시점</a></dd>
                    <dd><a href="#none">내언니 <strong>전지</strong>현과 나</a></dd>
                    <dd><a href="#none">수호<strong>전지</strong> 영웅본색</a></dd>
                </dl>
                <dl   Name="totalSearchAutocomplete_list">
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
  );
}
export default Changeheader;
