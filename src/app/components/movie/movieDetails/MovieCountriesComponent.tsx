import React, {FC} from 'react';
import IProductionCountries from "@/app/models/IProductionCountries";
import CountriesListComponent from "@/app/components/movie/countries/countriesListComponent/CountriesListComponent";

const MovieCountriesComponent: FC<{ production_countries: IProductionCountries[] }> = ({production_countries}) => {
    return <div>
        <b>Production countries:</b>
        {production_countries.length > 0 ?
            <CountriesListComponent countries={production_countries}/>
            : "unknown"}
    </div>;
};

export default MovieCountriesComponent;