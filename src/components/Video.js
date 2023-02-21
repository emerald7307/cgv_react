import styles from "../pages/Main.module.css";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import Animation from "./Animation";
import { lazy } from "react";
import Nav from "./Nav";
import Changeheader from "./Changeheader";
import React, { useRef } from "react";


function Video() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    // console.log(setScrollPosition);
  });

  const [isActive, setIsActive] = useState(false);


  // const paramsId = useParams().id
  // const [ params, setParams ] = useState(paramsId)
  // useEffect(() => setParams(paramsId), [paramsId])

  // const choosePage = () => {
  //   switch (scrollPosition) {
  //     case <'238':
  //       return <RealTimeUsageByTime />
  //     case 'bydate':
  //       return <RealTimeUsageByDate />
  //     case 'bymonth':
  //       return <RealTimeUsageByMonth />
  //     case 'byyear':
  //       return <RealTimeUsageByYear />
  //     default:
  //       return <RealTimeUsageByTime />
  //   }
  // }

  //
  // useEffect(() => {
  //   if (password.length < 5) {
  //     setValid(false);
  //   } else {
  //     setValid(true);
  //   }
  // }, [password]);
  //
  // useEffect(() => {
  //   if (scrollPosition < 238) {
  //     (<Animation></Animation>)(false);
  //   } else {
  //     setAnimation(true);
  //   }
  // }, [scrollPosition]);

  // const Backgroundchange =
  // scrollPosition < 10 ? styles["original_header"] : styles["change_header"];

  //   setAnimation(id.includes("@")); // id에 @가 포함된 경우 valid를 true로, 아니면 false로 변경
  // }, [id]); // id가 바뀌었을 때

  // if (scrollPosition < 238) {
  //   null;
  // } else {
  //   <Animation></Animation>;
  // }

  // const Backgroundchange =
  //   scrollPosition < 238
  //     ? lazy(() => import("./Animation"))
  //     : lazy(() => import("./Animation"));
  // const DesktopHeader = lazy(() => import("./DesktopHeader"));
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handleClick = () => {
    videoRef.current.pause()
  };
  const handleClick1 = () => {
    setIsActive(current => !current);
  };  //이부분 왜안되는지 확인해야함
 
  return (
    <div
      id="ctl00_PlaceHolderContent_divMovieSelection_wrap"
      // className={styles["movieSelection_wrap"]}
      className={`${styles.movieSelection_wrap}`}
    >
      <div className={styles.contents}>
        <div className={styles["video_wrap"]}>
          <video autoPlay muted ref={videoRef}>
            <source
              src="https://adimg.cgv.co.kr/images/202211/Distributors/Distributors_1080x608.mp4"
              type="video/mp4"
            ></source>
            이 브라우저는 Video 태그를 지원하지 않습니다. (Your browser does not
            support the video tag.)
          </video>

          <strong
            id="ctl00_PlaceHolderContent_AD_MOVIE_NM"
            className={styles["movieSelection_title"]}
          >
            유포자들
          </strong>
          <span
            id="ctl00_PlaceHolderContent_AD_DESCRIPTION_NM"
            className={styles["movieSelection_txt"]}
          >
            {"<"}유포자들{">"}
            <br></br>그 날의 비밀이 잠금해제 된다!
          </span>
          <div className={styles["movieSelection_video_controller_wrap"]}>
            <a
              href="http://ad.cgv.co.kr/click/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47986%26creative_id%3d68049%26click_id%3d88508%26content_series%3d%26event%3d"
              id="ctl00_PlaceHolderContent_AD_CLIP_DETAIL_URL"
              className={styles["btn_movieSelection_detailView"]}
            > 
              상세보기
            </a> 

            <a
              // href="#none"
              id="ctl00_PlaceHolderContent_playStop"
              className={styles["btn_movieSelection_playStop"]} onClick={handleClick}
                // onClick={handleClick1}
              style={{
                backgroundColor: isActive ? 'salmon' : '',
                color: isActive ? 'white' : '',
              }}
            >
              Stop
            </a>
            <a
              href="#none"
              id="ctl00_PlaceHolderContent_soundOnOff"
              className={styles["btn_movieSelection_soundOnOff"]}
            >
              Sound On
            </a>

            <input
              name="ctl00$PlaceHolderContent$AD_CNT_URL"
              type="hidden"
              id="ctl00_PlaceHolderContent_AD_CNT_URL"
              defaultValue="http://ad.cgv.co.kr/NetInsight/imp/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47927%26creative_id%3d68071"
            ></input>

            {scrollPosition < 196 ? null : (
              <>
                <Animation />
              </>
            )}
            {/* {scrollPosition < 238 ? null : <Changeheader />} */}
            {/* <div className={Backgroundchange}></div> */}
            {/* <Box className={styles["_topBtn"]}>
              <a href="/ticket/" className={styles["btn_fixedTicketing"]}>
                예매하기
              </a>

              <a href="#none" className={styles["btn_gotoTop"]}>
                <img
                  src="https://img.cgv.co.kr/R2014/images/common/btn/gotoTop.png"
                  alt="최상단으로 이동"
                ></img>
              </a>
            </Box> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;


// // // 

// import React, { useRef } from "react";

// const UseRefPlayer = () => {
//   const videoRef = useRef();

//   const handlePlay = () => {
//     videoRef.current.play();
//   };
//   const handlePause = () => {
//     videoRef.current.pause();
//   };
//   return (
//     <>
    
//       <div className="grid-btn">
//         <button className="btn" onClick={handlePlay}>
//           Play
//         </button>
//         <button className="btn-pause" onClick={handlePause}>
//           Pause
//         </button>
//       </div>
//       <video width="520" height="240" ref={videoRef}>
//         <source src="/Videos/code.mp4" />
//       </video>
    
//     </>
//   );
// };

// export default UseRefPlayer;