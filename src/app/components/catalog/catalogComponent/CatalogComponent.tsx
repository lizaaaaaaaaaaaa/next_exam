import React from 'react';
import MoviesList from "@/app/components/catalog/moviesList/MoviesList";
import PaginationComponent from "@/app/components/paginationComponent/PaginationComponent";
import styles from "./CatalogComponent.module.css";

const CatalogComponent: React.FC = () => {
    return (
        <section className={"container"}>
            <div className={styles.catalog__call}>Кіно для кожного настрою — знайди свій фільм!</div>
            <MoviesList/>
            <PaginationComponent/>
        </section>
    );
};

export default CatalogComponent;