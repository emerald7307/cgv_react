import Adheader from "../components/Adheader";
import styles from "./Main.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Video from "../components/Video";
// import Exam from "../components/Exam";
import Moviechart from "../components/Moviechart";
import SimpleSlider from "../components/SimpleSlider";
import Event from "../components/Event";
function Main() {
  return (
    <>
      <Adheader></Adheader>
      <Header></Header>
      <Nav></Nav>

      <div id={styles["contaniner"]} class="">
        {/* <!-- 벽돌 배경이미지 사용 시 class="bg-bricks" 적용 / 배경이미지가 없을 경우 class 삭제  --> */}

        {/* <!-- Contents Area -->
		
        
            
            <!-- Contents Start -->
			 */}

        <input
          type="hidden"
          id="isOpenUserEmailYNPopup"
          name="isOpenUserEmailYNPopup"
          value="False"
        >
          {/* <!-- S > Movie Selection
    Description:
    - iframe 영역으로 추후 협의 후 작업 진행 예정
 --> */}
        </input>
        <Video></Video>
        {/* <Exam></Exam> */}
        <Moviechart></Moviechart>
        {/* <Event></Event> */}
        <Event></Event>
      </div>
    </>
  );
}
export default Main;
