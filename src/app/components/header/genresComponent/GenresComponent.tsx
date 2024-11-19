'use client';

import React, {FC, useEffect, useState} from 'react';
import {getAllGenres} from "@/app/services/api.service";
import IGenre from "@/app/models/IGenre";
import GenresItemComponent from "@/app/components/header/genresItemComponent/GenresItemComponent";
import styles from "./GenresComponent.module.css"

const GenresComponent: FC = () => {
    const [isGenresActive, setIsGenresActive] = useState<boolean>(false);
    const [genres, setGenres] = useState<IGenre[]>([]);

    const clickGenresButtonHandler = (): void => {
        setIsGenresActive(!isGenresActive);
    };

    useEffect((): void => {
        getAllGenres().then(values => setGenres(values))
    }, []);

    return (
        <div className={styles.genres}>
            <button onClick={clickGenresButtonHandler} className={styles.genres__btn}>Genres</button>
            <ul className={`${styles.genres__list} ${isGenresActive ? styles["genres__list-active"] : ""}`}>
                {genres.map(genre => <GenresItemComponent key={genre.id} id={genre.id} name={genre.name}/>)}
            </ul>
        </div>
    );
};

export default GenresComponent;
