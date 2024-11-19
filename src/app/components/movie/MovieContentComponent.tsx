import React, {FC} from 'react';
import {getSingleMovieById} from "@/app/services/api.service";
import IDetailedMovie from "@/app/models/IDetailedMovie";
import {basePathForImage} from "@/app/constants/api";
import styles from "./MovieContentComponent.module.css";

const MovieContentComponent: FC<{ id: string }> = async ({id}) => {
    const movie: IDetailedMovie = await getSingleMovieById(id);
    console.log(movie);
    return (
        <section className={styles.movie}>
            <div className={`container ${styles.movie__inner}`}>
                <img src={basePathForImage + movie.poster_path} alt={movie.title} className={styles.movie__poster}/>
            </div>
        </section>
    );
};

export default MovieContentComponent;