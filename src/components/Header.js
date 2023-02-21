import styles from "../pages/Main.module.css";
import styled from "styled-components";

function Header() {
  return (
    <div className={styles["header-content"]}>
      <div className={styles.contents}>
        <h1 onClick="">
          <a href="/">
            <img
              src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png"
              alt="CGV"
            ></img>
          </a>
          <span>CULTUREPLEX</span>
        </h1>
        <ul className={styles["memberInfo-wrap"]}>
          {/* <!-- Advertisement --> */}

          <div className={styles["ad-partner"]}>
            <a href="http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=31426&amp;menu=006">
              <img
                src="https://img.cgv.co.kr/WingBanner/2022/0303/16462658373950.png"
                alt="현대M포인트"
              ></img>
            </a>
          </div>

          {/* <!-- /Advertisement --> */}

          <li>
            <a href="/user/login/?returnURL=https%3a%2f%2fwww.cgv.co.kr%2fdefault.aspx">
              <img
                src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png"
                alt="로그인"
              ></img>
              <span>로그인</span>
            </a>
          </li>
          <li>
            <a href="/user/join/">
              <img
                src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png"
                alt="회원가입"
              ></img>
              <span>회원가입</span>
            </a>
          </li>

          <li>
            <a href="/user/mycgv/">
              <img
                src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png"
                alt="MY CGV"
              ></img>
              <span>MY CGV</span>
            </a>
          </li>
          <li>
            <a href="/support/default.aspx">
              <img
                src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png"
                alt="고객센터"
              ></img>
              <span>고객센터</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
