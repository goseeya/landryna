// import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import LanguageRow from "../components/LanguageRow";

const Languages = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      const fetchedCountries = res.data;
      setCountries(fetchedCountries);
    });
  }, []);

  const languagesNamesArray = [];
  const languageFullNamesArray = [];
  countries.forEach((country) =>
    country.languages.forEach((lang) => {
      if (languagesNamesArray.indexOf(lang.iso639_1) === -1) {
        languagesNamesArray.push(lang.iso639_1);
        languageFullNamesArray.push(lang.name);
      }
    })
  );
  return (
    <div className="Languages">
      <table className="Languages-table">
        <thead>
          <tr>
            <th>Language</th>
            <th>Countries</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {languagesNamesArray
            .filter((el) => !!el)
            .map((el) => (
              <LanguageRow
                languageCode={el}
                languageName={
                  languageFullNamesArray[languagesNamesArray.indexOf(el)]
                }
                key={el}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Languages;
