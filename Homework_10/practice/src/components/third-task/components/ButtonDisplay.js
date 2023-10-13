const ButtonDisplay = ({ count }) => {
  return (
    <>
      <h1>Лічильник натискань на кнопку</h1>
      <div className="d-flex justify-content-between mt-5">
        <p>Кількість натискань:</p>
        <p>{count}</p>
      </div>
    </>
  );
};

export default ButtonDisplay;
