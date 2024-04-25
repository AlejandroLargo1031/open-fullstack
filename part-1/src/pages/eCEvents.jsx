const Hello = (props) => {
  const { name, age } = props;
  const bonYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you probably born in {bonYear()}</p>
    </>
  );
};

export const ECEvents = () => {
  const name = "Peter";
  const age = 10;
  return (
    <>
      <Hello name={name} age={age} />
    </>
  );
};
