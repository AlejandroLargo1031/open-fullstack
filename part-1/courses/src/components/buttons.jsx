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
    </>
  );
};

const Button = ({ text }) => {
  return (
    <>
      <p>{text}</p>
    </>
  );
};
