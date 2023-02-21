import styles from "../pages/Main.module.css";
import styled from "styled-components";
import Animation from "./Animation";
import { useState, useEffect } from "react";
import Changeheader from "./Changeheader";

function Adheader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    // console.log(setScrollPosition);
  });
  return (
    <>
      {/* <style type="text/css">
            *,body {background-color:#030305; text-align:center;border:0}
            .cgv_ad_top {position:relative;width:980px;height:80px;margin:0 auto}
            .btn_ad_close {position:absolute;right:10px;top:10px;cursor:pointer}
    </style>     */}

      {/* <!-- 소재내의 배경색을 확인하여 background의 값으로 지정-->
    <!-- 코드 내의 광고텍스트 영역의 대체텍스트 삽입--> */}
      {/* <script>
        if (document.domain.toString().indexOf("cgv.co.kr") != -1) {
            document.domain = "cgv.co.kr";
        }
   //     parent.document.getElementById('TopBanner').setAttribute('title', "영화광고-유포자들"); //상위 아이프레임 title 변경
    </script> */}

      <div className={styles["cgv_ad_top"]}>
        <a
          href="http://ad.cgv.co.kr/click/CGV/CGV_201401/main@TopBar_EX?ads_id=47987&amp;creative_id=68048&amp;click_id=88507&amp;content_series=&amp;event="
          target="_blank"
        >
          {/* <!--배너이미지 경로--> */}
          <img
            className={styles.adtopimg}
            src="https://adimg.cgv.co.kr/images/202211/Distributors/980x80.jpg"
            alt="고속도로 가족"
            border="0"
          ></img>
        </a>
        <a
          href="#"
          className={styles["btn_ad_close"]}
          id="btn_ad_close"
          onClick="parent.closeBanner()"
        >
          {/* <!--배너 닫기 이미지 경로--> */}
          <img
            src="https://img.cgv.co.kr/sample/2015/ad_main_top/btn_ad_close.png"
            alt="닫기"
            border="0"
          ></img>
        </a>
      </div>

      {scrollPosition < 196 ? null : (
        <>
          <Animation />
          <Changeheader />
        </>
      )}
    </>
  );
}

export default Adheader;
