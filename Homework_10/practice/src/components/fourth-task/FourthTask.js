import { useState } from "react";
import ValueChangerDisplay from "./components/ValueChangerDisplay";
import ButtonValueChanger from "./components/ButtonValueChanger";

const FourthTask = () => {
  const [count, setCount] = useState(0);

  const valueChanger = (value) => setCount(count + value);

  return (
    <>
      <ValueChangerDisplay count={count} />
      <ButtonValueChanger onChange={() => valueChanger(10)} label={'+10'} />
      <ButtonValueChanger onChange={() => valueChanger(-100)} label={'-100'} />
      <ButtonValueChanger onChange={() => valueChanger(25)} label={'+25'} />
    </>
  );
};

export default FourthTask;