const Summary = ({ summaryData }) => {
  return (
    <div className="Summary">
      <p>
        Average population of all the countries:{" "}
        {Math.round((summaryData.avgPop / 1000000) * 10) / 10}
      </p>
      <p>Country with the smallest area: {summaryData.smallestCountry}</p>
      <p>Country with the biggest area: {summaryData.biggestCountry}</p>
    </div>
  );
};

export default Summary;
