import { useState } from "react";
import ButtonDisplay from "./components/ButtonDisplay";
import ButtonCounter from "./components/ButtonCounter";

const ThirdTask = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount(count + 1);

  return (
    <>
      <ButtonDisplay count={count} />
      <ButtonCounter onIncrement={incrementCounter} label={'+1'} />
    </>
  );
};

export default ThirdTask;