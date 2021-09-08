import axios from "axios";
import { useState, useEffect } from "react";
import CountryRow from "../components/CountryRow";
import Summary from "../components/Summary";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      const fetchedCountries = res.data;
      setCountries(fetchedCountries);
    });
  }, []);

  const avgPop =
    countries
      .map((el) => el.population)
      .reduce((a, b) => {
        return a + b;
      }, 0) / countries.length;
  const minArea = Math.min(
    ...countries
      .filter((country) => country.area > 0)
      .map((country) => country.area)
  );
  const maxArea = Math.max(...countries.map((country) => country.area));

  const smallestCountry = countries.filter(
    (country) => country.area === minArea
  )[0]?.name;
  const biggestCountry = countries.filter(
    (country) => country.area === maxArea
  )[0]?.name;

  const mockedSummaryData = {
    avgPop,
    smallestCountry,
    biggestCountry,
  };

  const onChangeSortingValue = (event) => {
    switch (event.target.value) {
      case "nameAsc":
        setCountries(countries.sort((a, b) => (a.name < b.name ? -1 : 1)));
        break;
      case "nameDesc":
        setCountries(countries.sort((a, b) => (a.name > b.name ? -1 : 1)));
        break;
      case "populationAsc":
        setCountries(
          countries.sort((a, b) => (a.population < b.name ? -1 : 1))
        );
        break;
      case "populationDesc":
        setCountries(
          countries.sort((a, b) => (a.population > b.population ? -1 : 1))
        );
        break;
      case "areaAsc":
        setCountries(() =>
          countries.sort((a, b) => (a.area < b.area ? -1 : 1))
        );
        break;
      case "areaDesc":
        setCountries(countries.sort((a, b) => (a.area > b.area ? -1 : 1)));
        break;
      default:
        setCountries(countries.sort((a, b) => (a.name < b.name ? -1 : 1)));
        break;
    }
  };

  return (
    <div className="Countries">
      Sort by
      <div className="Countries-sorting" onChange={onChangeSortingValue}>
        <input type="radio" value="nameAsc" name="sortBy" defaultChecked /> Name
        A-Z
        <input type="radio" value="nameDesc" name="sortBy" /> Name Z-A
        <input type="radio" value="populationAsc" name="sortBy" /> Population
        low-big
        <input type="radio" value="populationDesc" name="sortBy" /> Population
        big-low
        <input type="radio" value="areaAsc" name="sortBy" /> Area small-big
        <input type="radio" value="areaDesc" name="sortBy" /> Area big-small
      </div>
      <table className="Countries-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Region</th>
            <th>Area</th>
            <th>Population</th>
          </tr>
        </thead>

        <tbody>
          {countries.map((el) => (
            <CountryRow countryData={el} key={el.numericCode} />
          ))}
        </tbody>
      </table>
      <Summary summaryData={mockedSummaryData} />
    </div>
  );
};

export default Countries;
