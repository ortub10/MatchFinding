import React from "react";
import like from "./images/like.png";
import un_like from "./images/unlike.jpg";
import "./buttons.css";

class Buttons extends React.Component {
  upScore = (type) => {
    this.props.sendType(type);
  };

  render() {
    return (
      <div className="contain_buttons">
        <img src={like} alt="" onClick={() => this.upScore("like")} />
        <img src={un_like} alt="" onClick={() => this.upScore("unLike")} />
      </div>
    );
  }
}

export default Buttons;
