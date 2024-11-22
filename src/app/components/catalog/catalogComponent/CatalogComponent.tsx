'use client';

import React, {FC, useState} from 'react';
import MoviesList from "@/app/components/catalog/moviesList/MoviesList";
import PaginationComponent from "@/app/components/paginationComponent/PaginationComponent";
import styles from "./CatalogComponent.module.css";
import SearchFormComponent from "@/app/components/catalog/searchFormComponent/SearchFormComponent";

const CatalogComponent: FC = () => {
    const [totalPages, setTotalPages] = useState<number>(500);

    const getTotalPagesHandler = (pages: number): void => {
        setTotalPages(pages)
    }

    return (
        <section className={"container"}>
            <div className={styles.catalog__call}>Movies for every mood — find your movie!</div>
            <SearchFormComponent/>
            <MoviesList for={"allFilms"} getTotalPagesHandler={getTotalPagesHandler}/>
            <PaginationComponent count={totalPages}/>
        </section>
    );
};

export default CatalogComponent;