import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";
import { useState } from "react";
//1.박스2개(타이틀,사진,결과)
//2.가위바위보 이미지버튼
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5.3,4의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6.이기면 초록 지면 빨강 비기면 검정 박스테두리
const choice = {
  rock: {
    name: "Rock",
    img: "https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960",
  },
  scissors: {
    name: "Scissors",
    img: "https://res.cloudinary.com/rsc/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/C0487101-01?pgw=1",
  },
  paper: {
    name: "Paper",
    img: "https://5.imimg.com/data5/HC/KF/HZ/SELLER-4619430/white-art-paper.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (shape) => {
    setUserSelect(choice[shape]);
  };
  return (
    <div>
      <div className="main">
        <Box name="You" item={userSelect} />
        <Box name="Computer" />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
