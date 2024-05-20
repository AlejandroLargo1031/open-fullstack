import { Courses, Note, Agenda, Divisas, Countries } from "./pages/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Buttons } from "./components/Buttons";

export const App = () => {
  
  // const notes = [
  //   {
  //     id: 1,
  //     content: "HTML is easy",
  //     important: true,
  //   },
  //   {
  //     id: 2,
  //     content: "Browser can execute only JavaScript",
  //     important: false,
  //   },
  //   {
  //     id: 3,
  //     content: "GET and POST are the most important methods of HTTP protocol",
  //     important: true,
  //   },
  //   {
  //     id: 4,
  //     content: "React is a JSX-library",
  //     important: false,
  //   },
  // ];
  return (
    <>
      <BrowserRouter>
        <Buttons />
        <Routes>
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Note" element={<Note />} />
          <Route path="/Agenda" element={<Agenda />}/>
          <Route path="/Divisas" element={<Divisas />}></Route>
          <Route path="/Countries" element={<Countries />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
