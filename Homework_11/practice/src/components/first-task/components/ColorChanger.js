const ColorChanger = ({ color, onColorChange, text }) => {
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
};

export default ColorChanger;
