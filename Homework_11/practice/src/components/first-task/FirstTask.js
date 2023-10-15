import { useState } from "react";
import TargetText from "./components/TargetText";
import ColorChanger from "./components/ColorChanger";

const FirstTask = () => {
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

  const [color, setColor] = useState(defaultColor);

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <>
      <h1 className="text-center">Зміна кольорів</h1>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <TargetText color={color} text={"this is the text"} />
      </div>
      <div className="d-flex justify-content-around">
        {colors.map((colorOption, index) => (
          <ColorChanger
            key={index}
            color={colorOption}
            onColorChange={handleColorChange}
            text={colorOption.backgroundColor}
          />
        ))}
      </div>
    </>
  );
};

export default FirstTask;