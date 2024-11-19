import React, {FC} from 'react';
import MoviesList from "@/app/components/catalog/moviesList/MoviesList";
import PaginationComponent from "@/app/components/paginationComponent/PaginationComponent";
import styles from "./CatalogComponent.module.css";

const CatalogComponent: FC = () => {
    return (
        <section className={"container"}>
            <div className={styles.catalog__call}>Movies for every mood — find your movie!</div>
            <MoviesList/>
            <PaginationComponent/>
        </section>
    );
};

export default CatalogComponent;