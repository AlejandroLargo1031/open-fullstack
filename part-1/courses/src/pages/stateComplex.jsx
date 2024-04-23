import { useState } from "react";

export const StateComplex = () => {
  const [clicks, setClicks] = useState({ rigth: 0, left: 0 });
  // manejo de arreglos
  const [left, setLeft] = useState(0);
  const [rigth, setRigth] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  // no se crea el objeto newClick, se pasa directamente a setClicks
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + rigth);
    // setClicks({
    //   ...clicks,
    //   left: clicks.left + 1,
    // });
  };
  // creamos el objeto newClick y pasamos newClick a setClicks
  const handleRigthClick = () => {
    // NO RECOMENDABLE
    allClicks.push("R");
    console.log("rigth before", rigth);
    setAll(allClicks);
    setRigth(rigth + 1);
    console.log("rigth after", rigth);
    setTotal(left + rigth);
    // const newClick = {
    //   ...clicks,
    //   rigth: clicks.rigth + 1,
    // };
    // setClicks(newClick);
  };
  return (
    <>
      <div>
        {left}
        {/* {clicks.left} */}
        <Button handleClick={handleLeftClick} text="Left" />
        <Button handleClick={handleRigthClick} text="Rigth" />
        {/* {clicks.rigth} */}
        {rigth}
        <History allClicks={allClicks} />
      </div>
    </>
  );
};

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <>
        <div>The app is ussed by pressing the buttons</div>
      </>
    );
  }
  return (
    <>
      <div>Button press History: {props.allClicks.join(" ")}</div>
    </>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
