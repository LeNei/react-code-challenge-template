interface CityInfoProps {    
    state: string;    
    year: string;    
    population: number;
}

export default function CityInfo({state, year, population}: CityInfoProps){

    return(
        <div className="items-center justify-center p-3  ml-1 mt-4 mr-4 mb-4 w-60 h-32 border  mx-auto bg-white rounded-xl shadow-lg flex  flex-col items-start ">     
            <div className="flex border-b-2  border-grey-500 w-5/6 mb-2">
                <p className="mr-2 ">City Name:</p>
                <span className="font-bold">{state}</span>
            </div>
            <div className="flex border-b-2 mb-2 border-grey-500 w-5/6 ">
                <p className=" mr-2">Year:</p>
                <span>{year}</span>
            </div>
            <div className="flex w-5/6  ">
                <p className=" mr-2" >Population:</p>
                <span>{population}</span>
            </div>
        </div>
    )
}


