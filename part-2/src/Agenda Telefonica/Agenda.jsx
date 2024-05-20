import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Numbers } from "./components/Numbers";
import serviceAgenda from "../services/agenda"
import '../css/index.css'
import { Notificacion} from "./components/Notificacion";
import { NotificacionError } from "./components/NotificacionError";

export const Agenda = () => {
  const [person, setPerson] = useState([]);

  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage ] = useState(null)
  const [messageError, setMessageError ] = useState(null)

  useEffect(() => {
    serviceAgenda.getAll()
      .then(initialAgenda => {
        setPerson(initialAgenda)
      })
  }, [])

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <Notificacion message={message}  />
        <NotificacionError message={messageError}  />
        <Filter
          person={person}
          newFilter={newFilter}
          setNewFilter={setNewFilter}
        />

        <h1>add a new</h1>

        <PersonForm person={person} setPerson={setPerson} setMessage={setMessage}
        setMessageError={setMessageError} />

        <h1>Numbers</h1>

        <Numbers person={person} newFilter={newFilter} setPerson={setPerson} /> 

   
      </div>
      
    </>
  );
};
