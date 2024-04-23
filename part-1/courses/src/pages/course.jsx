const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    );
  };
  
  const Content = (props) => {
    return (
      <>
        <Part name1={props.parts1} exercises={props.exercises1} />
        <Part name2={props.parts2} exercises2={props.exercises2} />
        <Part name3={props.parts3} exercises3={props.exercises3} />
      </>
    );
  };
  
  const Part = (props) => {
    return (
      <>
        <p>
          {props.name1} {props.exercises}
        </p>
        <p>
          {props.name2} {props.exercises2}
        </p>
        <p>
          {props.name3} {props.exercises3}
        </p>
      </>
    );
  };
  const Total = (props) => {
    return (
      <>
        <p>Number of exercises {props.parts}</p>
      </>
    );
  };
export const Course = () => {
    const course = {
      name: "Half Stack aplication development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
      ],
      nexErcises() {
        return this.parts.reduce((sum, part) => sum + part.exercises, 0)},
    };
  
    return (
      <>
        <Header course={course.name} />
        <Content
          parts1={course.parts[0].name}
          exercises1={course.parts[0].exercises}
          parts2={course.parts[1].name}
          exercises2={course.parts[1].exercises}
          parts3={course.parts[2].name}
          exercises3={course.parts[2].exercises}
  
        />
        <Total
          parts= {course.nexErcises()}
        />
  
      </>
    );
  };
  