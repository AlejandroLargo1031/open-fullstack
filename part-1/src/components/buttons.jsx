import { NavLink } from "react-router-dom";
export const Buttons = () => {
  return (
    <>
      <NavLink to="/course">
        <Button text="Course" />
      </NavLink>
      <NavLink to="/eCEvents">
        <Button text="Estado del componente, controladores de eventos" />
      </NavLink>
      <NavLink to="/useStateComp">
        <Button text="useState ejemplo" />
      </NavLink>
      <NavLink to="/stateComplex"><Button text="Un estado más complejo, depurando aplicaciones React"/></NavLink>
      <NavLink to="/revisionEventos"><Button text="Revision de los Controladores de Eventos" /></NavLink>
      <NavLink to="/estadisticas"><Button text="Unicafe" /></NavLink>
      <NavLink to="/anecdotas"><Button text="Anecdotas, paso 1"/></NavLink>
    </>
  );
};

const Button = ({ text }) => {
  return (
    <>
      <button>{text}</button>
    </>
  );
};
