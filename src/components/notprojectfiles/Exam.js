import { useEffect, useState } from "react";

const API_KEY = "6612dc4f65442db14ddfef3eafd95470";
const TODAY = new Date();
const YEAR = TODAY.getFullYear();
const MONTH = ("0" + (TODAY.getMonth() + 1)).slice(-2);
const YESTERDAY = ("0" + (TODAY.getDate() - 1)).slice(-2);
const DATE = YEAR + MONTH + YESTERDAY;

function Exam() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${"6612dc4f65442db14ddfef3eafd95470"}&targetDt=${20230106}`
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
    <div>
      <div>
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
      </div>
    </div>
  );
}

export default Exam;



// 

