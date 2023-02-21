import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../pages/Main.module.css";
import styled, { StyleSheetManager } from "styled-components";

import { useEffect, useState } from "react";
// import React, { Component } from "react";
// import Slider from "react-slick";

// import { SlideContainer, SlidePage } from "../styles";

//무비차트 시작

const API_KEY = "6612dc4f65442db14ddfef3eafd95470";
const TODAY = new Date();
const YEAR = TODAY.getFullYear();
const MONTH = ("0" + (TODAY.getMonth() + 1)).slice(-2);
const YESTERDAY = ("0" + (TODAY.getDate() - 1)).slice(-2);
const DATE = YEAR + MONTH + YESTERDAY;

//

const MultiItem = styled.div`
  color: #e67e22;
  opacity: 1;
  transform: scale(1.04);
`;

const SlideContainer = styled.div`
  padding: 0 20px;

  /* width 옵션으로 전체 width 값을 지정할 수 있음 */
  /* width: 500px; */

  .center .slick-center ${MultiItem} {
    /* center 모드일때 center에게 강조할 경우 사용 */
    color: #e67e22;
    opacity: 1;
    transform: scale(1.06);
  }

  .center ${MultiItem} {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.99);
  }
`;

const SlidePage = styled.div`
  text-align: center;

  /* background-color: skyblue; */
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(232, 232, 232, 0.37)
  );

  padding: ${(props) => props.padding};

  ${MultiItem} {
    /* center 옵션의 경우 MultiTem 속성을 추가로 사용해서 내부 옵션을 추가로 줘야함 */
    background: #00558b;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  /*무비차트 api  시작 */

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
};

const SimpleSlider = ({}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    // 슬라이드 변경 시간
    // speed: 2000,
    // 자동 재생 유지 시간
    // autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${"6612dc4f65442db14ddfef3eafd95470"}&targetDt=${20221119}`
    )
      .then((reponse) => reponse.json())
      .then((json) => {
        setMovies(json.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <SlideContainer>
      {/* <h1>SingleSlide</h1> */}

      <Slider {...settings}>
        <SlidePage padding={`50px 0`}>1</SlidePage>
        <SlidePage padding={`50px 0`}>2</SlidePage>
        <SlidePage padding={`50px 0`}>3</SlidePage>
        <SlidePage padding={`50px 0`}>4</SlidePage>
        <SlidePage padding={`50px 0`}>5</SlidePage>
        <SlidePage padding={`50px 0`}>6</SlidePage>
        <SlidePage padding={`50px 0`}>7</SlidePage>
        {/* <SlidePage>123</SlidePage> */}
        <div className={styles["movieChart_list"]} id="movieChart_list">
          <div className={styles["swiper-wrapper"]}>
            <div className={styles["swiper-slide"]}>
              <div className={styles["img_wrap"]}>
                {movies.map((movie) => (
                  <div key={movie.movieCd}>
                    <h2>
                      {movie.rank}. {movie.movieNm}
                    </h2>
                    {/* <h4>개봉일: {movie.openDt}</h4>
          <p>일일 관객수: {movie.audiCnt}</p>
          <p>누적 관객수: {movie.audiAcc}</p> */}
                  </div>
                ))}
                {/* data-scale="false"  img_wrap 에 있던거 원래*/}
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86119/86119_320.jpg"
                  // onError="errorImage(this)"
                  alt="블랙 팬서"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc ageAll">All</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/All.png" alt="All세"> --> */}
                  <div className="dDay_wrap">
                    <span>11</span>
                  </div>
                </div>
                <div className="screenType_wrap">
                  <i className="screenType">
                    <img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                    />
                    /
                  </i>

                  <i className="screenType">
                    <img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/screenx_white.png"
                      alt="screenx"
                    />
                  </i>
                </div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86492"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '엔시티 드림 더 무비 : 인 어 드림');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031275&amp;MOVIE_CD_GROUP=20031149"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','엔시티 드림 더 무비 : 인 어 드림')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">블랙 팬서-와칸다 포에버</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%
                </span>
                <span>예매율 23.1%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]}>
                {/* data-scale="false" */}
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86420/86420_320.jpg"
                  // onError="errorImage(this)"
                  alt="데시벨"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc age12">12</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/12.png" alt="12세"> --> */}
                </div>
                <div className="screenType_wrap">
                  <i className="screenType">
                    <img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/imax_white.png"
                      alt="imax"
                    />
                  </i>

                  <i className="screenType">
                    <img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                    />
                  </i>

                  <i className="screenType">
                    <img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/screenx_white.png"
                      alt="screenx"
                    />
                  </i>
                </div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86119"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '블랙 팬서-와칸다 포에버');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031150&amp;MOVIE_CD_GROUP=20030268"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','블랙 팬서-와칸다 포에버')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">블랙 팬서-와칸다 포에버</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggood.png"
                    alt="Golden Egg good"
                  />
                  84%
                </span>
                <span>예매율 22.8%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86326/86326_320.jpg"
                  alt="동감"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc age12">12</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/12.png" alt="12세"> --> */}
                </div>
                <div className="screenType_wrap"></div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86420"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '데시벨');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20030992&amp;MOVIE_CD_GROUP=20030992"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','데시벨')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">데시벨</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                    alt="Golden Egg great"
                  />
                  90%
                </span>
                <span>예매율 12.4%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86338/86338_320.jpg"
                  alt="폴 600미터"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc age12">12</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/12.png" alt="12세"> --> */}
                </div>
                <div className="screenType_wrap"></div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86326"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '동감');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031075&amp;MOVIE_CD_GROUP=20030830"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','동감')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">동감</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                    alt="Golden Egg great"
                  />
                  86%
                </span>
                <span>예매율 11.8%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86205/86205_320.jpg"
                  alt="에브리씽"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc age15">15</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/15.png" alt="15세"> --> */}
                  <div className="dDay_wrap">
                    <span>4</span>
                  </div>
                </div>
                <div className="screenType_wrap"></div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86481"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '올빼미');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031106&amp;MOVIE_CD_GROUP=20031106"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','올빼미')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">올빼미</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%
                </span>
                <span>예매율 10.3%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86194/86194_320.jpg"
                  alt="짱구"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc age12">12</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/12.png" alt="12세"> --> */}
                </div>
                <div className="screenType_wrap"></div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86338"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '폴-600미터');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20030886&amp;MOVIE_CD_GROUP=20030886"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','폴-600미터')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">폴-600미터</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                    alt="Golden Egg great"
                  />
                  93%
                </span>
                <span>예매율 2.3%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86216/86216_320.jpg"
                  alt="자백"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc ageAll">All</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/All.png" alt="All세"> --> */}
                  <div className="dDay_wrap">
                    <span>5</span>
                  </div>
                </div>
                <div className="screenType_wrap"></div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86462"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '2022 카타르월드컵 대한민국vs우루과이');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031076&amp;MOVIE_CD_GROUP=20031076"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','2022 카타르월드컵 대한민국vs우루과이')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">
                  2022 카타르월드컵 대한민국vs우루과이
                </strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?
                </span>
                <span>예매율 2.2%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86522/86522_320.jpg"
                  alt="한산 리더스"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc ageAll">All</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/All.png" alt="All세"> --> */}
                  <div className="dDay_wrap">
                    <span>4</span>
                  </div>
                </div>
                <div className="screenType_wrap">
                  <i className="screenType">
                    <img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                    />
                  </i>
                </div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86511"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '스트레인지 월드');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031233&amp;MOVIE_CD_GROUP=20031191"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','스트레인지 월드')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">스트레인지 월드</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%
                </span>
                <span>예매율 2.2%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86500/86500_320.jpg"
                  alt="극장판 소드 아트"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc age12">12</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/12.png" alt="12세"> --> */}
                  <div className="dDay_wrap">
                    <span>6</span>
                  </div>
                </div>
                <div className="screenType_wrap"></div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86435"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '(라이브뷰잉)Ensemble Stars!! DREAM LIVE -7th Tour Allied Worlds- Live Viewing');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031017&amp;MOVIE_CD_GROUP=20031017"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','(라이브뷰잉)Ensemble Stars!! DREAM LIVE -7th Tour Allied Worlds- Live Viewing')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">
                  (라이브뷰잉)Ensemble Stars!! DREAM LIVE -7th Tour Allied
                  Worlds- Live Viewing
                </strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%
                </span>
                <span>예매율 2.0%</span>
              </div>
            </div>

            <div
              className={styles["swiper-slide"]}
              style={{ width: "170.4px", marginRight: "32px" }}
            >
              <div className={styles["img_wrap"]} data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86483/86483_320.jpg"
                  alt="심야카페 미씽허니"
                  // onError="errorImage(this)"
                />
                <div className="movieAgeLimit_wrap">
                  {/* <!-- 영상물 등급 노출 변경 2022.08.24 --> */}
                  <i className="cgvIcon etc age15">15</i>
                  {/* <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/15.png" alt="15세"> --> */}
                  <div className="dDay_wrap">
                    <span>4</span>
                  </div>
                </div>
                <div className="screenType_wrap"></div>
                <div className="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=86494"
                    onClick="gaEventLog('PC_메인', '무비차트_영화상세', '유포자들');"
                    className="btn_movieChart_detail"
                  >
                    상세보기
                  </a>

                  <a
                    href="/ticket/?MOVIE_CD=20031196&amp;MOVIE_CD_GROUP=20031152"
                    onClick="gaEventLog('PC_메인', '무비차트_예매하기','유포자들')"
                    className="btn_movieChart_ticketing"
                  >
                    예매하기
                  </a>
                </div>
              </div>
              <div className="movie_info_wrap">
                <strong className="movieName">유포자들</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  98%
                </span>
                <span>예매율 2.0%</span>
              </div>
            </div>
          </div>

          <div
            className="swiper-button-next"
            tabIndex="0"
            role="button"
            aria-label="다음 슬라이드"
            aria-disabled="false"
          ></div>
          <div
            className="swiper-button-prev swiper-button-disabled"
            tabIndex="0"
            role="button"
            aria-label="이전 슬라이드"
            aria-disabled="true"
          ></div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        {/* </SlidePage> */}
      </Slider>
    </SlideContainer>
  );
};

export default SimpleSlider;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
// // function SimpleSlider() {
// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 6,
// //     slidesToScroll: 6,
// //   };
// //   return (
// //     <div>
// //       <h2> Single Item</h2>
// //       <Slider {...settings}>
// //         <div>
// //           <h3>1</h3>
// //         </div>
// //         s
// //         <div>
// //           <h3>2</h3>
// //         </div>
// //         <div>
// //           <h3>3</h3>
// //         </div>
// //         <div>
// //           <h3>4</h3>
// //         </div>
// //         <div>
// //           <h3>5</h3>
// //         </div>
// //         <div>
// //           <h3>6</h3>
// //         </div>
// //       </Slider>
// //     </div>
// //   );
// // }

// // export default SimpleSlider;
