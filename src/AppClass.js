import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
    rock: {
      name: "rock",
      img: "https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960",
    },
    scissors: {
      name: "scissors",
      img: "https://res.cloudinary.com/rsc/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/C0487101-01?pgw=1",
    },
    paper: {
      name: "paper",
      img: "https://5.imimg.com/data5/HC/KF/HZ/SELLER-4619430/white-art-paper.jpg",
    },
  };

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
          userSelect: null,
          computerSelect: null,
          result: "",
        };
      }
    
      play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
          userSelect: choice[userChoice],
          computerSelect: computerChoice,
          result: this.judgement(choice[userChoice], computerChoice),
        });
      };
      randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
      };
      judgement = (user, computer) => {
    
        if (user.name == computer.name) {
          return "Tie";
        } else if (user.name == "rock")
          return computer.name == "scissors" ? "Win" : "Lose";
        else if (user.name == "scissors")
          return computer.name == "paper" ? "Win" : "Lose";
        else if (user.name == "paper")
          return computer.name == "rock" ? "Win" : "Lose";
      };
    
      render() {
        return (
          <div>
            <div className="main">
              <BoxClass
                title="You"
                item={this.state.userSelect}
                result={this.state.result}
              />
              <BoxClass
                title="Computer"
                item={this.state.computerSelect}
                result={this.state.result}
              />
            </div>
            <div className="main">
              <button onClick={() => this.play("scissors")}>가위</button>
              <button onClick={() => this.play("rock")}>바위</button>
              <button onClick={() => this.play("paper")}>보</button>
            </div>
          </div>
        );
      }
    }
    
