import styles from "../pages/Main.module.css";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

function Animation() {
  // const [Animation, setAnimation] = useState(false);
  return (
    <>
      <Box>
        <div className={styles["fixed-BtnwraptopBtn"]}>
          <a href="/ticket/" className={styles["btnfixed-Ticketing"]}></a>
        </div>
        예매하기
      </Box>
      <Box2>
        <a href="#none" className={styles["btn-gotoTop"]}>
          <img
            src="https://img.cgv.co.kr/R2014/images/common/btn/gotoTop.png"
            alt="최상단으로 이동"
          ></img>
        </a>
      </Box2>
    </>
  );
}
export default Animation;
// export default Animation;
const boxFade = keyframes`
       0% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`;

//

const boxFade2 = keyframes`
       0% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
        
`;
const Box = styled.div`
  animation: ${boxFade} 0.4s;

  //
  @media only screen and (min-width: 1116px) {
    right: 50%;
    margin-right: -498px;
  }
  //

  //

  /* position: absolute; */
  left: auto;
  /* right: 0px; */
  width: 136px;
  height: 24px;
  padding: 12px 0 14px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  line-height: 1.5em;
  background-image: linear-gradient(
    to left,
    rgb(255, 115, 86),
    rgb(251, 67, 87)
  );
  box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
  border-radius: 25px;
  transition: right 0.4s;

  pointer-events: none;
  position: fixed;
  bottom: 100px;
  text-align: center;
  font-family: "Noto Sans KR", "CJONLYONENEW", "맑은 고딕", "돋움", Dotum,
    sans-serif;
  z-index: 999;
`;

const Box2 = styled.div`
  animation: ${boxFade2} 0.4s;

  @media only screen and (min-width: 1116px) {
    right: 50%;
    margin-right: -558px;
  }
  //

  //
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  width: 49.6px;
  height: 49.6px;
  bottom: 100px;
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
  border-radius: 50%;

  pointer-events: none;
  transition: opacity 0.4s;
  z-index: 999;
  /* border: none; */
`;

// function Animation() {
//   return (
//     <Box className={styles["_topBtn"]}>
//       <a href="/ticket/" className={styles["btn_fixedTicketing"]}>
//         예매하기
//       </a>

//       <a href="#none" className={styles["btn_gotoTop"]}>
//         <img
//           src="https://img.cgv.co.kr/R2014/images/common/btn/gotoTop.png"
//           alt="최상단으로 이동"
//         ></img>
//       </a>
//     </Box>
//   );
// }

// const boxFade = keyframes`
//   0% {
//     opacity: 1;
//     top: 20px;

//   }
//   50% {
//     opacity: 0;
//     top: 400px;
//   }
//   100% {
//     opacity: 1;
//     top: 20px;
//   }
// `;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
//   background: green;
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   animation: ${boxFade} 2s 1s infinite linear alternate;

//   right: 50%;
//   margin-right: -548px;
// `;

// export default Animation;
