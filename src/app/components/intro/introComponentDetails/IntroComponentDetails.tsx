import React, {FC} from 'react';
import styles from "./IntroComponentDetails.module.css";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";
import Link from "next/link";
import IDetailedMovie from "@/app/models/IDetailedMovie";

const IntroComponentDetails: FC<{ movie: IDetailedMovie }> = ({movie}) => {

    return (
        <div className={styles.intro__content}>
            <h2>{movie.title}</h2>
            <StarsRating rating={movie.vote_average} starDimension={"40px"} starSpacing={"2px"}/>
            <p className={styles.intro__text}>{movie.overview}</p>
            <Link href={`/movie/${movie.id.toString()}`} className={styles.intro__link}>See more!</Link>
        </div>
    );
};

export default IntroComponentDetails;