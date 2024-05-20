import { Part } from "./Part";

export const Content = ({ exercises }) => {
    const mappedContent = exercises.map((exercise) => {
      return (
        <Part key={exercise.id} name={exercise.name} exercises={exercise.exercises} />
      );
    });
  
    return <div>{mappedContent}</div>;
  };