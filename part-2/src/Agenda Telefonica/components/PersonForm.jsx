import { useState } from "react";
import serviceAgenda from "../../services/agenda";

export const PersonForm = ({
  person,
  setPerson,
  setMessage,
  setMessageError,
}) => {
  const [newName, setName] = useState("");
  const [newNumber, setNumber] = useState("");  

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = person.find((p) => p.name === newName);

    if (!existingPerson) {
      serviceAgenda
        .create(nameObject)
        .then((returnedAgenda) => {
          setMessage(`Added ${newName}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setPerson(person.concat(returnedAgenda));
          setName("");
          setNumber("");
        })
        .catch((error) => {
          // Handle error if create fails
          console.error("Error creating person:", error);
        });
    } else {
      const confirmReplace = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirmReplace) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        console.log("updatePerson", updatedPerson);

        serviceAgenda
          .update(existingPerson.id, updatedPerson)
          .then((response) => {
            console.log("response", response);
            setMessage(`Update ${newName}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setPerson(
              person.map((p) => (p.id === existingPerson.id ? response : p))
            );
            setName("");
            setNumber("");
          })
          .catch((error) => {
            error = setMessageError(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setMessageError(null);
            }, 5000);
            error;
          });
      }
    }
  };
  return (
    <>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="sumbit">Add</button>
        </div>
      </form>
    </>
  );
};
