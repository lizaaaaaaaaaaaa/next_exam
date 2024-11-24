'use client';

import React, {FC, useEffect, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {getFilmsByGenre, getMoviesByPage, getWantedFilms} from '@/app/services/api.service';
import IRegularMovie from '@/app/models/IRegularMovie';
import styles from './MovieList.module.css';
import MoviesListCard from '@/app/components/catalog/moviesListCard/MoviesListCard';
import Loader from '@/app/components/UI/loader/Loader';

type PropsType = {
    for: string;
    genre?: string;
    getTotalPagesHandler?: (pages: number) => void;
};

const MoviesList: FC<PropsType> = (props) => {
    const router = useRouter();
    const params = useSearchParams();

    const [movies, setMovies] = useState<IRegularMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const page: string | null = params.get('page');
    const searchFilm: string | null = params.get('movie');

    useEffect((): void => {
        if (!page) {
            const currentParams = new URLSearchParams(params);
            currentParams.set('page', '1');
            router.replace(`?${currentParams.toString()}`, {scroll: false});
        }
    }, [router, params, page]);

    useEffect((): void => {
        if (page) {
            setIsLoading(true);

            if (searchFilm) {
                getWantedFilms(searchFilm, page).then((values): void => {
                    setMovies(values.results);
                    setIsLoading(false);
                    if (props.getTotalPagesHandler) {
                        props.getTotalPagesHandler(values.total_pages);
                    }
                });
            } else if (props.for === 'allFilms') {
                getMoviesByPage(page).then((values) => {
                    setMovies(values);
                    setIsLoading(false);
                });
            } else if (props.for === 'genresFilms' && props.genre) {
                getFilmsByGenre(props.genre.toString(), page).then((values): void => {
                    setMovies(values);
                    setIsLoading(false);
                });
            }
        }
    }, [page, props, searchFilm]);

    const catalogContent: React.JSX.Element[] = movies.map((movie: IRegularMovie) => (
        <MoviesListCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            adult={movie.adult}
        />
    ));

    if (isLoading) {
        return <Loader/>;
    }

    if (!isLoading && movies.length === 0) {
        return <p className={styles.catalog__empty}>We cannot find anything!</p>
    }

    return <ul className={styles.catalog__list}>{catalogContent}</ul>;
};

export default MoviesList;