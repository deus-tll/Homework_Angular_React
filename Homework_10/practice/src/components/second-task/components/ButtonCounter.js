import { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount(count + 1);

  return (
    <>
      <h1>Лічильник натискань на кнопку</h1>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-dark w-50" onClick={incrementCounter}>
          {count}
        </button>
      </div>
    </>
  );
};

export default ButtonCounter;
