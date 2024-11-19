import React, {FC} from 'react';
import IGenre from "@/app/models/IGenre";
import GenresItemComponent from "@/app/components/movie/genres/genresItemComponent/GenresItemComponent";
import styles from "./GenresListComponent.module.css";

const GenresListComponent: FC<{ genres: IGenre[] }> = ({genres}) => {
    return (
        <ul className={styles.genres__list}>
            {genres.map(genre => <GenresItemComponent id={genre.id} key={genre.id} name={genre.name}/>)}
        </ul>
    );
};

export default GenresListComponent;