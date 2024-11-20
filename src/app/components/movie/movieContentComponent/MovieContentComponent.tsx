import React, {FC} from 'react';
import {getSingleMovieById} from "@/app/services/api.service";
import IDetailedMovie from "@/app/models/IDetailedMovie";
import {basePathForImage} from "@/app/constants/api";
import styles from "./MovieContentComponent.module.css";
import MovieInfo from "@/app/components/movie/movieInfoComponent/MovieInfo";
import noImage from "@/app/assets/images/other/noImage.svg";

const MovieContentComponent: FC<{ id: string }> = async ({id}) => {
    const movie: IDetailedMovie = await getSingleMovieById(id);
    const imageSrc: string = movie.poster_path ? (basePathForImage + movie.poster_path) : noImage.src;
    return (
        <section className={styles.movie}>
            <div className={`container ${styles.movie__inner}`}>
                <img src={imageSrc} alt={movie.title} className={styles.movie__poster}/>
                <MovieInfo title={movie.title} original_title={movie.original_title} tagline={movie.tagline} genres={movie.genres}
                           production_companies={movie.production_companies}
                           production_countries={movie.production_countries} revenue={movie.revenue}
                           runtime={movie.runtime} vote_count={movie.vote_count} vote_average={movie.vote_average}
                           status={movie.status} overview={movie.overview} budget={movie.budget}/>
            </div>
        </section>
    );
};

export default MovieContentComponent;