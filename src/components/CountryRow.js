const CountryRow = ({ countryData }) => {
  return (
    <tr className="country-row">
      <td>{countryData.name}</td>
      <td>{countryData.region}</td>
      <td>
        {!!countryData.area ? Math.floor(countryData.area * 0.3861021586) : 'no data'}
      </td>
      <td>{Math.round((countryData.population / 1000000) * 10) / 10}</td>
    </tr>
  );
};

export default CountryRow;
