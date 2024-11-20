import React, {FC} from 'react';
import IGenre from "@/app/models/IGenre";
import IProductionCompanies from "@/app/models/IProductionCompanies";
import IProductionCountries from "@/app/models/IProductionCountries";
import GenreBadges from "@/app/components/movie/genres/genreBadges/GenreBadges";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";
import CompaniesListComponent from "@/app/components/movie/companies/companiesListComponent/CompaniesListComponent";
import CountriesListComponent from "@/app/components/movie/countries/countriesListComponent/CountriesListComponent";
import styles from "./MovieInfo.module.css";

type PropsType = {
    title: string,
    original_title: string,
    tagline: string | undefined,
    genres: IGenre[],
    production_companies: IProductionCompanies[],
    production_countries: IProductionCountries[],
    budget: number,
    revenue: number,
    runtime: number,
    vote_count: number,
    vote_average: number,
    status: string,
    overview: string

}
const MovieInfo: FC<PropsType> = ({
                                      title,
                                      tagline,
                                      genres,
                                      production_companies,
                                      production_countries,
                                      original_title,
                                      budget,
                                      revenue,
                                      runtime,
                                      vote_count,
                                      vote_average,
                                      status,
                                      overview
                                  }) => {
    return (
        <div className={styles.movie__info}>
            <h1>{title}</h1>
            <div>
                <b>Original title:</b>
                <h2>{original_title}</h2>
            </div>
            {tagline ? <div>
                <b>Tagline:</b>
                <blockquote>{tagline}</blockquote>
            </div> : ""}
            <GenreBadges genres={genres}/>
            <div className={styles.movie__rate}>
                <StarsRating rating={vote_average} starDimension={"40px"} starSpacing={"2px"}/>
                <span>{vote_count}</span>
            </div>
            <div><b>Status:</b>{status}</div>
            <div><b>Film budget:</b>{budget > 0 ? `${budget}$` : "unknown"}</div>
            <div><b>Box Office:</b>{revenue > 0 ? `${revenue}$` : "unknown"}</div>
            <div><b>Playtime:</b><span>{runtime} minutes</span></div>
            <div><b>Production companies:</b>{production_companies.length > 0 ?
                <CompaniesListComponent companies={production_companies}/> : "unknown"}</div>
            <div><b>Production countries:</b>{production_countries.length > 0 ?
                <CountriesListComponent countries={production_countries}/> : "unknown"}</div>
            <p>{overview}</p>
        </div>
    );
};

export default MovieInfo;