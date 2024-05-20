import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Total } from "./components/Total";

function Course ({course}) {
    console.log('course', course);
    return (
        <div>
            <Header course={course.name} />
            <Content exercises={course.parts} />
            <Total exercises={course.parts} />
        </div>
    )
  }

  export const Courses = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    const coursesElements = courses.map(course => <Course key={course.id} course={course}/>)
    console.log('coursesElements', coursesElements)
  
    return (
        <div>
          <h1>Web Development Curriculum</h1>
          {coursesElements} 
        </div>
    );
  };