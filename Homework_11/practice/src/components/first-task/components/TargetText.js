const TargetText = ({ color, text }) => {
  const textStyle = {
    backgroundColor: color.backgroundColor,
    color: color.textColor,
  };

  return (
    <>
      <p style={textStyle}>{text}</p>
    </>
  );
};

export default TargetText;
