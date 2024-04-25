import { useState } from "react";

export const UseStateComp = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter)

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  }
  const setZero = () => {
    console.log('restering to zero, value before', counter)
    setCounter(0);
  }
  const decrementByOne = () => {
    console.log("decresing, value before", counter )
    setCounter(counter - 1);
  }

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={setZero} text="Zero" />
      <Button onClick={decrementByOne} text="Minus" />
    </>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>