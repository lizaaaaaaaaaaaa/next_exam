import React, {FC} from 'react';
import MoviesList from "@/app/components/catalog/moviesList/MoviesList";
import styles from "./MoviesByGenreContentComponent.module.css";
import PaginationComponent from "@/app/components/paginationComponent/PaginationComponent";

type PropsType = {
    genreId: string,
    genreName: string
}

const MoviesByGenreContentComponent: FC<PropsType> = ({genreId, genreName}) => {

    return (
        <section className={styles.movies}>
            <div className="container">
                <h1 className={styles.movies__title}><span>{genreName}</span> movies</h1>
                <MoviesList for={"genresFilms"} genre={genreId}/>
                <PaginationComponent/>
            </div>
        </section>
    );
};

export default MoviesByGenreContentComponent;