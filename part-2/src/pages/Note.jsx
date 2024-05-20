import { useState, useEffect } from "react";
import { Notes } from "../components/Notes";
import noteService from "../services/notes";
import { Notification } from "../components/Notification";

const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Departament of computer Science, University of Helsinsji 2024
      </em>
    </div>
  );
};

export const Note = () => {
  const [notes, setNotes] = useState(null);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // console.log("render", notes.length, "notes");

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  if (!notes){
    return null;
  }

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    console.log("note  inicio ", note);
    const changedNote = { ...note, important: !note.important };
    console.log("note salida ", changedNote);

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(
          notes.map((note) => {
            return note.id !== id ? note : returnedNote;
          })
        );
      })
      .catch((error) => {
        setErrorMessage(
          `the note '${note.content}' was already deleted from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        error = setNotes(notes.filter((n) => n.id !== id));
        return error;
      });
  };

  return (
    <>
      <div>
        <h1>Notes</h1>
        <Notification message={errorMessage} />
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            Show {showAll ? "important" : "all"}
          </button>
        </div>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="sumbit">Save</button>
        </form>
        <ul>
          {notesToShow.map((note, i) => {
            return (
              <Notes
                key={i}
                note={note}
                toggleImportance={() => toggleImportanceOf(note.id)}
              />
            );
          })}
        </ul>
        <Footer />
      </div>
    </>
  );
};
