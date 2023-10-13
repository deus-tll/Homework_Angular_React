const ValueChangerDisplay = ({ count }) => {
  return (
    <>
      <h1>Зміна значення</h1>
      <div className="d-flex justify-content-between mt-5">
        <p>Поточне значення:</p>
        <p>{count}</p>
      </div>
    </>
  );
};

export default ValueChangerDisplay;
