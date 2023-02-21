import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import styles from "../pages/Main.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { dailyBoxOfficeList } from "./notprojectfiles/Data";
import styles from "./SimpleSlider.module.css";
import "./slick.css";
import "./slick-theme.css";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";


const moviedatas = [
  {
    id: 1,
    // title: "블랙 팬서-와칸다 포에버",
    grade: "99%",
    reservationRate: "예매율 23.1%",
    linkImg:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86796/86796_320.jpg",
  },
  {
    id: 2,
    // title: "데시벨",
    grade: " 90%",
    reservationRate: "예매율 12.4%",
    linkImg:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86720/86720_320.jpg"
     ,
  },
  {
    id: 3,
    // title: "동감",
    grade: "86%",
    reservationRate: "예매율 11.8%",
    linkImg:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86793/86793_320.jpg"
  },
  {
    id: 4,
    // title: "올빼미",
    grade: "99%",
    reservationRate: "예매율 10.3%",
    linkImg:
      "https://movie-phinf.pstatic.net/20230119_92/1674104221530x0qIM_JPEG/movie_image.jpg",
  },
  {
    id: 5,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://movie-phinf.pstatic.net/20230103_84/1672708130982UfeSD_JPEG/movie_image.jpg",
  },
  {
    id: 6,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://movie-phinf.pstatic.net/20221215_185/1671091761840XXpCR_JPEG/movie_image.jpg",
  },
  {
    id: 7,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://movie-phinf.pstatic.net/20221213_158/1670910727328mpqYu_JPEG/movie_image.jpg",
  },
  {
    id: 8,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://movie-phinf.pstatic.net/20230112_63/1673489515726qkQ2t_JPEG/movie_image.jpg",
  },
  {
    id: 9,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://movie-phinf.pstatic.net/20230120_87/1674192544285inSFU_JPEG/movie_image.jpg",
  },
  {
    id: 10,
    // title: "폴-600미터",
    grade: " 93%",
    reservationRate: "예매율 2.3%",
    linkImg:
      "https://movie-phinf.pstatic.net/20230201_261/1675215429987qQVon_JPEG/movie_image.jpg",
  },
];
//

const API_KEY = "6612dc4f65442db14ddfef3eafd95470";
const TODAY = new Date();
const YEAR = TODAY.getFullYear();
const MONTH = ("0" + (TODAY.getMonth() + 1)).slice(-2);
const YESTERDAY = ("0" + (TODAY.getDate() - 1)).slice(-2);
const DATE = YEAR + MONTH + YESTERDAY;

// function DataMovie() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     fetch(
//       `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${"6612dc4f65442db14ddfef3eafd95470"}&targetDt=${20230106}`
//     )
//       .then((reponse) => reponse.json())
//       .then((json) => {
//         setMovies(json.boxOfficeResult.dailyBoxOfficeList);
//         setLoading(false);
//       });
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (

//   );
// }

//
let slidesToShow = 5;
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

// const Wrap = styled.div`
//   margin: 5% auto;
//   width: 100%;
/* .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  } */
// `;

export function SimpleSlider() {


  const settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    dots: false,
    infinite: false,
    speed:270,
    // slidesToShow: 5,
    slidesToShow: slidesToShow,
    slidesToScroll: 5,
    arrows: true,
    // centerMode:true,
    centerPadding:'0px'
    
    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
    // nextArrow: "<button type='button' class='slick-next'>Next</button>",

    // 
    // responsive: [
    //   {
    //     breakpoint: 426,
    //     settings: {
    //       slidesToShow: 1,
    //       centerMode: false,
    //     },
    //   },
    //   {
    //     breakpoint: 769,
    //     settings: {
    //       slidesToShow: 3,
    //       centerMode: false,
    //     },
    //   },
    //   {
    //     breakpoint: 1025,
    //     settings: {
    //       slidesToShow: 4,
    //       centerMode: false,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${"6612dc4f65442db14ddfef3eafd95470"}&targetDt=${20230218}`
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
  
  // 
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // if (width <= 426) {
  //   slidesToShow = 1;
  // } else if (width > 426 && width <= 769) {
  //   slidesToShow = 3;
  // } else if (width > 769 && width <= 1025) {
  //   slidesToShow = 4;
  // } else {
  //   slidesToShow = 5;
  // }

  return (
   <div className={styles["moviechart_wrap"]}>
    <div className={styles.movielist}>
      <div className={styles.moviename}>
        <div className={styles.moviename2}>
          <h3 className={styles.chartname}>
            <a className={styles.chartnamechild} href="">
              무비차트
            </a>
          </h3>
          <h3 className={styles.chartname2}>
            <a className={styles.chartname2child} href="">
              상영예정작
            </a>
          </h3>
        </div>
        <a href="" className={styles.btnallView}>
          전체보기
        </a>
      </div>

      {/* <h1> Single Item</h1> */}
      {/* <br></br>
      <br></br> */}
      <Slider {...settings}>
        {/* <Wrap> */}
        {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3> 
          </div> */}
        {/* </Wrap> */}
        {moviedatas.map((item) => (
          <div className={styles.card}>
            <div className={styles["card-top"]}>
              <div className={styles.swiper}>
                <img src={item.linkImg} alt={item.title} />

                <h1>{item.title}</h1>
              </div>
            </div>
            <div className={styles["card-bottom"]}>
              <h3>
                <img src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png" alt="" />
                <p className={styles.cardgrade}>{item.grade}</p>
                </h3>
              <p className={styles.reservationrate}>{item.reservationRate}</p>
            </div>
          </div>
        ))}
    
        {movies.map((movie) => (
          <div key={movie.movieCd}>
            <div className={styles.ranklist}>{movie.rank}</div>
            {/* <h2>{movie.rank}</h2> */}
            <br></br>
            <div className={styles.moiveNmlist}>{movie.movieNm}</div>
            {/* <h4>개봉일: {movie.openDt}</h 4>
                         <p>일일 관객수: {movie.audiCnt}</p>
                         <p>누적 관객수: {movie.audiAcc}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
}


export default SimpleSlider;

// export const Slider = styled(Slider)`
//   height: 128px; //슬라이드 컨테이너 영역
//   overflow: hidden;

//   .slick-list {
//     // 부모
//     height: 100%;
//     margin: 0 -10px;
//     box-sizing: border-box;
//   }

//   .slick-prev:before,
//   .slick-next:before {
//     font-size: 40px;
//   }
// `;

// prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
// nextArrow: "<button type='button' class='slick-next'>Next</button>",
