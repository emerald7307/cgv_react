import styles from "../pages/Main.module.css";
import styled, { StyleSheetManager } from "styled-components";

import { useEffect, useState } from "react";
import SimpleSlider from "./SimpleSlider";

// const API_KEY = "6612dc4f65442db14ddfef3eafd95470";
// const TODAY = new Date();
// const YEAR = TODAY.getFullYear();
// const MONTH = ("0" + (TODAY.getMonth() + 1)).slice(-2);
// const YESTERDAY = ("0" + (TODAY.getDate() - 1)).slice(-2);
// const DATE = YEAR + MONTH + YESTERDAY;

function Moviechart() {
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const getMovies = async () => {
  //   fetch(
  //     `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${"6612dc4f65442db14ddfef3eafd95470"}&targetDt=${20221119}`
  //   )
  //     .then((reponse) => reponse.json())
  //     .then((json) => {
  //       setMovies(json.boxOfficeResult.dailyBoxOfficeList);
  //       setLoading(false);
  //     });
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);
  return (
    //   <div>
    //   <div>

    //   </div>
    // </div>
    // <div className={styles.moviescreen}>
    //   <div className={styles.movieinfo}>
    //     <a href="" className={styles.moviechart2}></a>

    //     <a href="" className={styles.moviechart3}></a>
    //   </div>
    <SimpleSlider></SimpleSlider>
   
    // </div>
  );
}

export default Moviechart;
