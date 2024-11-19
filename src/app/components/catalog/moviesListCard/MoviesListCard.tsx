import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";
import styles from "./MoviesListCard.module.css";
import Link from "next/link";
import PosterPreview from "@/app/components/catalog/posterPreviewComponent/PosterPreview";

type PropsType = {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
}

const MoviesListCard: FC<PropsType> = ({id, title, vote_average, poster_path}) => {
    return (
        <li className={styles.catalog__item}>
            <Link href={`/movie/${id}`}>
                <PosterPreview title={title} poster_path={poster_path}/>
                <div className={styles.catalog__name}>{title}</div>
                <StarsRating rating={vote_average} starDimension={"15px"} starSpacing={"1.5px"}/>
            </Link>
        </li>
    );
};

export default MoviesListCard;