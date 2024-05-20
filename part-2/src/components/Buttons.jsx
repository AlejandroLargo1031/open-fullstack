import { NavLink } from "react-router-dom";
export const Buttons = () => {
  return (
    <>
      <NavLink to="/Courses">
        <Button text="Course" />
      </NavLink>
      <NavLink to="/Note">
        <Button text="Notes" />
      </NavLink>
      <NavLink to="/Agenda">
        <Button text="Agenda" />
      </NavLink>
      <NavLink to="/Divisas" >
        <Button text="Divisas" />
      </NavLink>
      <NavLink to="/countries"><Button text="Countries" /></NavLink>
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
