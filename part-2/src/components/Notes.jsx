import '../css/index.css'

export const Notes = ({ note, toggleImportance }) => {

  const label = note.important ? "make not important" : "make important";

  return (
    <>
      <li className='note'>
        {note.content}
        <br />
        <button onClick={toggleImportance}> {label}</button>
    </li>
    </>
  );
};
