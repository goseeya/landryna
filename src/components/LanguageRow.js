// import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";

const LanguageRow = ({ languageCode, languageName }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/lang/${languageCode}`)
      .then((res) => {
        setLanguages(res.data);
      });
  }, [languageCode]);

  return (
    <tr className="language-row">
      <td>{languageName}</td>
      <td>
        <ul>
          {languages.map((el) => (
            <li key={el.name}>{el.name}</li>
          ))}
        </ul>
      </td>
      <td>
        {languages &&
          languages.reduce((a, b) => {
            return a + b.population;
          }, 0)}
      </td>
    </tr>
  );
};

export default LanguageRow;
