import React, {FC} from 'react';
import IGenre from "@/app/models/IGenre";
import GenreBadge from "@/app/components/movie/genres/genreBadge/GenreBadge";
import styles from "./GenreBadges.module.css";

const GenreBadges: FC<{ genres: IGenre[] }> = ({genres}) => {
    return (
        <ul className={styles.genres__list}>
            {genres.map(genre => <GenreBadge id={genre.id} key={genre.id} name={genre.name}/>)}
        </ul>
    );
};

export default GenreBadges;