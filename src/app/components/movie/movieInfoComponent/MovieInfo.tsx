import React, {FC} from 'react';
import IGenre from "@/app/models/IGenre";
import IProductionCompanies from "@/app/models/IProductionCompanies";
import IProductionCountries from "@/app/models/IProductionCountries";
import GenreBadges from "@/app/components/movie/genres/genreBadges/GenreBadges";
import styles from "./MovieInfo.module.css";
import cutDateToNewFormat from "@/app/helpers/cut.date";
import MovieBudgetComponent from "@/app/components/movie/movieDetails/MovieBudgetComponent";
import MovieBoxOfficeComponent from "@/app/components/movie/movieDetails/MovieBoxOfficeComponent";
import MovieCompaniesComponent from "@/app/components/movie/movieDetails/MovieCompaniesComponent";
import MovieCountriesComponent from "@/app/components/movie/movieDetails/MovieCountriesComponent";
import MovieTaglineComponent from "@/app/components/movie/movieDetails/MovieTaglineComponent";
import MovieOriginalTitle from "@/app/components/movie/movieDetails/MovieOriginalTitle";
import MovieRateComponent from "@/app/components/movie/movieDetails/MovieRateComponent";
import MoviePlaytimeComponent from "@/app/components/movie/movieDetails/MoviePlaytimeComponent";

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
    overview: string,
    release_date: string
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
                                      overview,
                                      release_date
                                  }) => {
    return (
        <div className={styles.movie__info}>
            <h1>{title}</h1>
            <MovieOriginalTitle original_title={original_title}/>
            {tagline ? <MovieTaglineComponent tagline={tagline}/> : ""}
            <GenreBadges genres={genres}/>
            <MovieRateComponent vote_average={vote_average} vote_count={vote_count} className={styles.movie__rate}/>
            <div><b>Status:</b>{status}</div>
            <div><b>Release date:</b>{cutDateToNewFormat(release_date)}</div>
            <MovieBudgetComponent budget={budget}/>
            <MovieBoxOfficeComponent revenue={revenue}/>
            <MoviePlaytimeComponent runtime={runtime}/>
            <MovieCompaniesComponent production_companies={production_companies}/>
            <MovieCountriesComponent production_countries={production_countries}/>
            <p>{overview}</p>
        </div>
    );
};

export default MovieInfo;