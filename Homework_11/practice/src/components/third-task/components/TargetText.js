import React, { Component } from "react";

class TargetText extends Component {
  render() {
    const { color, text } = this.props;
    const textStyle = {
      backgroundColor: color.backgroundColor,
      color: color.textColor,
    };
  
    return (
      <>
        <p style={textStyle}>{text}</p>
      </>
    );
  }
};

export default TargetText;