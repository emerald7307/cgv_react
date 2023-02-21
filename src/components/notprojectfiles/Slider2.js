import React, { useState } from "react";
import Film from "./Film";
import styles from "../pages/Main.module.css";

const Slider2 = ({ movies, theme }) => {
  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + 1375);
  };

  const toNext = () => {
    slidePx > -4125 && setSlidePx(slidePx - 1375);
  };
  if (!movies) return;
  return (
    <div className={styles.mainBox}>
      <p className={styles.filmTheme}>{theme.title}</p>
      <ul className={styles.filmList}>
        {movies.map((movie) => (
          <Film slide={slidePx} key={movie.id} movie={movie} />
        ))}
      </ul>
      <div
        className={styles.prevBtn}
        onClick={toPrev}
        style={{ display: slidePx === 0 ? "none" : "" }}
      >
        <i className="fa-solid fa-chevron-left" />
      </div>
      <div
        className={styles.nextBtn}
        onClick={toNext}
        style={{ display: slidePx === -4125 ? "none" : "" }}
      >
        <i className="fa-solid fa-chevron-right" />
      </div>
    </div>
  );
};

export default Slider2;
