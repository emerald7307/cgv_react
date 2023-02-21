<div className={styles["movieChartBeScreen_wrap"]}>
  <div className={styles.contents}>
    <div className={styles["movieChartBeScreen_btn_wrap"]}>
      <div className={styles["tabBtn_wrap"]}>
        <h3>
          <a href="#none" className={styles.active} id="btnMovie">
            무비차트
          </a>
        </h3>
        <h3>
          <a href="#none" id="btnReserMovie">
            상영예정작
          </a>
        </h3>
      </div>
      <a
        href="/movies/?lt=1&amp;ft=0"
        id="btn_allView_Movie"
        className={styles["btn_allView"]}
      >
        전체보기
      </a>
    </div>
    {/* <div className="swiper movieChart_list swiper-container-initialized swiper-container-horizontal" */}
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
              (라이브뷰잉)Ensemble Stars!! DREAM LIVE -7th Tour Allied Worlds-
              Live Viewing
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

    <div
      className="swiper movieChart_list swiper-container-initialized swiper-container-horizontal"
      id="movieChart_list_Reser"
      style={{ disPlay: "none" }}
    >
      <div className="swiper-wrapper"></div>

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
  </div>
</div>;


