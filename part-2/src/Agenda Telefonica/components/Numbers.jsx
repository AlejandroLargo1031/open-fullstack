// import { DeleteNumber } from "./DeleteNumber";
import serviceAgenda from "../../services/agenda";

export const Numbers = ({ setPerson, person, newFilter }) => {

  const filterName = newFilter
    ? person.filter((p) =>
        p.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : person;

  const deleteNum = (id) => {
    const deletePerson = person.filter((n) => n.id !== id);
    const namePerson = person.find(p => p.id === id)
    console.log(deletePerson, person);
    if (window.confirm(`Delete ${namePerson.name}`)) {
      serviceAgenda.deleteNumber(id).then(() => {
        setPerson(deletePerson);
      });
    }
  };

  return (
    <>
      {filterName.map((p) => (
        <div key={p.id}>
          <p>
            {p.name}: {p.number}  
            <button onClick={() => deleteNum(p.id)}>Delete</button>
            {/* <DeleteNumber setPerson={setPerson} person={person} id={p.id} text="Delete" /> */}
          </p>
        </div>
      ))}
    </>
  );
};
