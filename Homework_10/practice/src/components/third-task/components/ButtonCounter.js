const ButtonCounter = ({ onIncrement, label }) => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-dark w-50" onClick={onIncrement}>
          {label}
        </button>
      </div>
    </>
  );
};

export default ButtonCounter;
