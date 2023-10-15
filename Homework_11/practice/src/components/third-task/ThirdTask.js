import React, { Component } from "react";
import TargetText from "./components/TargetText";
import ColorChanger from "./components/ColorChanger";

class FirstTask extends Component {
  constructor() {
    super();

    const defaultColor = {
      backgroundColor: "white",
      textColor: "black",
    };
  
    const colors = [
      {
        backgroundColor: "green",
        textColor: defaultColor.textColor,
      },
      {
        backgroundColor: "red",
        textColor: 'blue',
      },
      {
        backgroundColor: "purple",
        textColor: 'white',
      },
    ];

    this.state = {
      color: defaultColor,
      colors: colors
    };
  }

  handleColorChange = (color) => {
    this.setState({ color });
  };


  render() {
    return (
      <>
        <h1 className="text-center">Зміна кольорів</h1>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <TargetText color={this.state.color} text={"this is the text"} />
        </div>
        <div className="d-flex justify-content-around">
          {this.state.colors.map((colorOption, index) => (
            <ColorChanger
              key={index}
              color={colorOption}
              onColorChange={this.handleColorChange}
              text={colorOption.backgroundColor}
            />
          ))}
        </div>
      </>
    );
  }
};

export default FirstTask;