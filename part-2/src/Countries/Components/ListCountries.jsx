export const ListCountries = ({ countries, showCountries }) => {
  return (
    <div>
      {countries.map((p) => {
        return (
          <>
            <p key={p.id}>
              {p.name.common}{" "}
              <button onClick={() => showCountries(p)}>Show</button>
            </p>
          </>
        );
      })}
    </div>
  );
};
