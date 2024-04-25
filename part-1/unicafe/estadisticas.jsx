import { useState } from "react";

const Statics = (props) => {
  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <>
        <div>No feedback given</div>
      </>
    );
  }
  return (
    <>
      <table>
        <tbody>
          <StaticsLine text="Good" value={props.good} />

          <StaticsLine text="Neutral" value={props.neutral} />

          <StaticsLine text="Bad" value={props.bad} />

          <StaticsLine text="All" value={props.good + props.neutral + props.bad} />

          <StaticsLine text="Average" value={(props.good - props.bad) /
              (props.good + props.neutral + props.bad)} />
          <StaticsLine text="Positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100} porciento="%" />
        </tbody>
      </table>
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const StaticsLine = (props) => {
  return (
    <>
      <tr>
        <td>
          <p>{props.text}</p>
        </td>
        <td>
          <p>{props.value}{props.porciento}</p>
        </td>
      </tr>
    </>
  );
};

export const Estadisticas = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <div>
        <h1>Estas son las estadisticas unicafe</h1>
        <h2>Give feedback</h2>
        <div>
          <Button onClick={handleGood} text="Good" />
          <Button onClick={handleNeutral} text="Neutral" />
          <Button onClick={handleBad} text="Bad" />
        </div>
        <h2>Statistics</h2>
        <div>
          <Statics good={good} neutral={neutral} bad={bad} />
        </div>
      </div>
    </>
  );
};
