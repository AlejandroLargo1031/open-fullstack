import { useState } from "react";

// ESTEES EL LUGAR CORRECTO PARA DEFINIR UN COMPONENTE

const Display = props => <><div>{props.value}</div></>

const Button = (props) => (
    <>
    <button onClick={props.handleClick}>
        {props.text}
    </button>
    </>
)


export const RevisionEventos = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
      console.log("value now ", newValue);
      setValue(newValue);
    };

    // NO DEFINIR COMPONENTES DENTRO DE LOS COMPONENTES
// const Display = props => <><div>{props.value}</div></>

 
  return (
    <>
      <div>
        <Display value={value} />
        {value}
        <Button handleClick={setToValue(1000)} text='cien'/>
        <Button handleClick={setToValue(0)} text='reset'/>
        <Button handleClick={setToValue(value + 1)} text='increment'/>
      </div>
    </>
  );
};



