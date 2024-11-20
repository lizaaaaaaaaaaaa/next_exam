import React, {FC} from 'react';
import IProductionCountries from "@/app/models/IProductionCountries";
import CountriesItemComponent from "@/app/components/movie/countries/countriesItemComponent/CountriesItemComponent";
import styles from "./CountriesListComponent.module.css";

const CountriesListComponent: FC<{ countries: IProductionCountries[] }> = ({countries}) => {

    return (
        <ul className={styles.movie__countries}>
            {countries.map(country => <CountriesItemComponent key={country.iso_3166_1} name={country.name}/>)}
        </ul>
    );
};

export default CountriesListComponent;