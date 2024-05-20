export const Filter = ({ newFilter, setNewFilter}) => {

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <>
      <div>
        Filter show with:{" "}
        <input value={newFilter} onChange={handleFilterChange} />
      </div>
    </>
  );
};
