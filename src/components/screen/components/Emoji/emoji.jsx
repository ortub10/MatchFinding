import React from "react";
import Score from "./components/score";
import smile from "./images/smile.jpg";
import bad from "./images/bad.jpg";
import "./emoji.css";

class Emoji extends React.Component {
  render() {
    return (
      <div className="contain_score">
        <Score image={smile} color="green" status={this.props.like} />
        <Score image={bad} color="red" status={this.props.unLike} />
      </div>
    );
  }
}

export default Emoji;
