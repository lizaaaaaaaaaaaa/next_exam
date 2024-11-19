'use client';

import React, {FC, useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {getMoviesByPage, getWantedFilms} from "@/app/services/api.service";
import IRegularMovie from "@/app/models/IRegularMovie";
import styles from "./MovieList.module.css";
import MoviesListCard from "@/app/components/catalog/moviesListCard/MoviesListCard";

const MoviesList: FC = () => {
    const params = useSearchParams();
    const [movies, setMovies] = useState<IRegularMovie[]>([]);

    const page: string = params.get("page") || "1";

    useEffect((): void => {
        getMoviesByPage(page).then(values => setMovies(values));
    }, [page]);

    return (
        <ul className={styles.catalog__list}>
            {movies.map((movie: IRegularMovie, index: number) => <MoviesListCard key={index} id={movie.id}
                                                                                 title={movie.title}
                                                                                 poster_path={movie.poster_path}
                                                                                 vote_average={movie.vote_average}/>)}
        </ul>
    );
};

export default MoviesList;