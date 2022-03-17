

export default function CityInfo({state, year, population}){

    return(
        <div>
            <div>
                <p>City Name</p>
                <span>{state}</span>
            </div>
            <div>
                <p>Year</p>
                <span>{year}</span>
            </div>
            <div>
                <p>Population</p>
                <span>{population}</span>
            </div>
        

        </div>
    )
}


