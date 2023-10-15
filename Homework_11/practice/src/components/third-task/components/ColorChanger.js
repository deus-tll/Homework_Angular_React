import React, { Component } from "react";

class ColorChanger extends Component {
  render() {
    const { color, onColorChange, text } = this.props;
    const buttonStyle = {
      backgroundColor: color.backgroundColor,
      color: color.textColor,
    };

    return (
      <>
        <button
          className="btn"
          style={buttonStyle}
          onClick={() => onColorChange(color)}
        >
          {text}
        </button>
      </>
    );
  }
}

export default ColorChanger;