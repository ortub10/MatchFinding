import React from "react";
import "./main_image.css";
class MainImage extends React.Component {
  render() {
    return (
      <div className="contain_main_image">
        <img src={this.props.imageObj.image} alt="" />
        <h1>{this.props.imageObj.title}</h1>
      </div>
    );
  }
}

export default MainImage;
