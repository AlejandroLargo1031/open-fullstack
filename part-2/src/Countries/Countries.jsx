import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_SOME_KEY;

const fetchCountries = async () => {
  try {
    const response = await axios.get(
      `https://studies.cs.helsinki.fi/restcountries/api/all`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching countries data:", error);
    return [];
  }
};

const fetchWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

const CountryDetails = ({ country, weather }) => (
  <div>
    <h1>{country.name.common}</h1>
    <p>Capital: {country.capital}</p>
    <p>Area: {country.area}</p>
    <h2>Languages</h2>
    <ul>
      {Object.values(country.languages).map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>
    <img src={country.flags.png} alt="flag" width="100px" />
    {weather && (
      <div>
        <h2>Weather in {country.capital[0]}</h2>
        <p>Temperature: {weather.main.temp} °C</p>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      </div>
    )}
  </div>
);

const CountryList = ({ countries, onSelect }) => (
  <div>
    {countries.map((country) => (
      <div key={country.name.common}>
        <p>
          {country.name.common}{" "}
          <button onClick={() => onSelect(country)}>Show</button>
        </p>
      </div>
    ))}
  </div>
);

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectCountry, setSelectCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    loadCountries();
  }, []);

  useEffect(() => {
    if (selectCountry) {
      const { latlng } = selectCountry;
      fetchWeather(latlng[0], latlng[1]).then(setWeather);
    }
  }, [selectCountry]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setSelectCountry(null);
  };

  const handleClick = (country) => {
    setSelectCountry(country);
    setSearch(country.name.common);
  };

  const searchCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Countries</h1>
      <div>
        Find Countries:
        <input value={search} onChange={handleChange} />
      </div>
      {searchCountry.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      {searchCountry.length <= 10 && searchCountry.length > 1 && (
        <CountryList countries={searchCountry} onSelect={handleClick} />
      )}
      {selectCountry && (
        <CountryDetails country={selectCountry} weather={weather} />
      )}
      {searchCountry.length === 1 && !selectCountry && (
        <CountryDetails country={searchCountry[0]} weather={weather} />
      )}
    </div>
  );
};
