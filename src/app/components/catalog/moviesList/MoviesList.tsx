'use client';

import React, {FC, useEffect, useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import {getFilmsByGenre, getMoviesByPage, getWantedFilms} from "@/app/services/api.service";
import IRegularMovie from "@/app/models/IRegularMovie";
import styles from "./MovieList.module.css";
import MoviesListCard from "@/app/components/catalog/moviesListCard/MoviesListCard";

type PropsType = {
    for: string;
    genre?: string;
    getTotalPagesHandler: (pages: number) => void;
};

const MoviesList: FC<PropsType> = (props) => {
    const router = useRouter();
    const params = useSearchParams();
    const [movies, setMovies] = useState<IRegularMovie[]>([]);

    const page: string | null = params.get("page");
    const searchFilm: string | null = params.get("movie");

    useEffect(() => {
        if (!page) {
            const currentParams = new URLSearchParams(params);
            currentParams.set("page", "1");
            router.replace(`?${currentParams.toString()}`, {scroll: false});
        }
    }, [page]);

    useEffect((): void => {
        if (page) {
            if (props.for === "allFilms") {
                getMoviesByPage(page).then(values => setMovies(values));
            }
            if (searchFilm) {
                getWantedFilms(searchFilm, page).then((values): void => {
                    setMovies(values.results);
                    props.getTotalPagesHandler(values.total_pages);
                });
            } else if (props.for === "genresFilms" && props.genre) {
                getFilmsByGenre(props.genre.toString(), page).then(values => setMovies(values));
            }
        }
    }, [page, props.for, props.genre, searchFilm]);

    return (
        <ul className={styles.catalog__list}>
            {movies.map((movie: IRegularMovie) => (
                <MoviesListCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                />
            ))}
        </ul>
    );
};

export default MoviesList;
