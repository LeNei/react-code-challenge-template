import {useQuery } from "react-query";
import CityInfo from "../components/CityInfo";

interface CitiesData {  
  'ID State': string;  
  'State': string;  
  'Year': string;  
  'Population': number;
}

export default function Cities() {
  const { isLoading, error, data: cities} = useQuery<{data: CitiesData[] }, Error>("getCitiesPopulation", () =>
    fetch(
      "https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019"
    ).then((res) => res.json())
  );

  if (isLoading) return <p>"Loading..."</p>;

  if (error) return <p>{"An error has occurred: " + error.message}</p>

  return (
    <div>
      {cities!.data.map((city: CitiesData) => (
        <CityInfo 
        key={city['ID State']} 
        state={city['State']} 
        year={city['Year']} 
        population={city['Population']} />
      ))}
    </div>
  );
}
