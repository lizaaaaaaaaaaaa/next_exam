import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";
import cutText from "@/app/helpers/cut.text";
import styles from "./IntroSliderItemComponent.module.css";
import Link from "next/link";

type PropsType = {
    id: number,
    title: string,
    vote_average: number,
    overview: string,
    poster_path: string
}

const IntroSliderItemComponent: FC<PropsType> = ({
                                                     id,
                                                     title, vote_average,
                                                     overview, poster_path
                                                 }) => {
    const poster: string = basePathForImage + poster_path;

    const description: string = cutText(overview, 85)
    return (
        <Link href={`/movie/${id.toString()}`} style={{backgroundImage: `url(${poster})`}}
              className={styles.intro__item}>
            <h5>{title}</h5>
            <StarsRating rating={vote_average} starDimension={"20px"} starSpacing={"2px"}/>
            <p>{description}</p>
        </Link>
    );
};

export default IntroSliderItemComponent;