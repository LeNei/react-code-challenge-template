import {useQuery } from "react-query";
import CityInfo from "../components/CityInfo";

export default function Cities() {
  const { isLoading, error, data: cities} = useQuery("getCitiesPopulation", () =>
    fetch(
      "https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {cities.data.map((_cities) => (
        <CityInfo key={_cities['ID State']} state={_cities['State']} population={_cities['Population']} />
      ))}
    </div>
  );
}
