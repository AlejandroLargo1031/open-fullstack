import { Course, ECEvents, UseStateComp, StateComplex, RevisionEventos, Estadisticas, Anecdotas } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { Buttons } from "./components/buttons";

const App = () => {
  return (
    <>
      <Buttons />
      <Routes>
        <Route path="/course" element={<Course />} />
        <Route path="/eCEvents" element={<ECEvents />} />
        <Route path="/useStateComp" element={<UseStateComp />} />
        <Route path="/stateComplex" element={<StateComplex/>}></Route>
        <Route path="/revisionEventos" element={<RevisionEventos />}></Route>
        <Route path="/estadisticas" element={<Estadisticas />}></Route>
        <Route path="/anecdotas" element={<Anecdotas />}></Route>
      </Routes>
    </>
  );
};

export default App;
