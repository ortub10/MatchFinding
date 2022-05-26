import React from "react";
import Emoji from "./components/Emoji/emoji";
import MainImage from "./components/mainImage/main_image";
import Buttons from "./components/buttons/buttons";
import sport from "./data";
import "./screen.css";

class Screen extends React.Component {
  state = {
    like: 0,
    unLike: 0,
    isGameOver: false,
  };

  upScore = (type) => {
    if (!this.state.isGameOver) {
      this.setState(
        (prev) => {
          return { [type]: prev[type] + 1 };
        },
        () => {
          if (this.state.like + this.state.unLike === sport.length) {
            this.setState({ isGameOver: true });
          }
        }
      );
    }
  };

  render() {
    return (
      <div className="screen">
        <Emoji like={this.state.like} unLike={this.state.unLike} />

        {this.state.like + this.state.unLike < sport.length ? (
          <MainImage imageObj={sport[this.state.like + this.state.unLike]} />
        ) : this.state.like > this.state.unLike ? (
          <div className="contain_situation">
            <h1>You like sport</h1>
          </div>
        ) : (
          <div className="contain_situation">
            <h1>You d'ont like sport</h1>
          </div>
        )}

        <Buttons sendType={this.upScore} />
      </div>
    );
  }
}

export default Screen;
