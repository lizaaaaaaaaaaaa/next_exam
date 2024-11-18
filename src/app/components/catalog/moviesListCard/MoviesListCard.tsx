import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";
import styles from "./MoviesListCard.module.css";

type PropsType = {
    title: string,
    poster_path: string,
    vote_average: number,
}

const MoviesListCard: FC<PropsType> = ({title, vote_average, poster_path}) => {
    return (
        <li style={{backgroundImage: `url(${basePathForImage + poster_path})`}} className={styles.catalog__item}>
            <div>{title}</div>
            <StarsRating rating={vote_average} starDimension={"15px"} starSpacing={"1.5px"}/>
        </li>
    );
};

export default MoviesListCard;