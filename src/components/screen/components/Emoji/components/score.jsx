import React from "react";
import "./score.css";
class Score extends React.Component {
  render() {
    return (
      <div className="score">
        <img src={this.props.image} alt="Wrong" />
        <h3 className={this.props.color}>{this.props.status}</h3>
      </div>
    );
  }
}

export default Score;
