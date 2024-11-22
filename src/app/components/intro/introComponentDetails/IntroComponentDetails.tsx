import React, {FC} from 'react';
import styles from "./IntroComponentDetails.module.css";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";
import Link from "next/link";

type PropsType = {
    id: number,
    title: string,
    vote_average: number,
    overview: string
}

const IntroComponentDetails: FC<PropsType> = ({id, title, vote_average, overview}) => {
    return (
        <div className={styles.intro__content}>
            <h2>{title}</h2>
            <StarsRating rating={vote_average} starDimension={"40px"} starSpacing={"2px"}/>
            <p className={styles.intro__text}>{overview}</p>
            <Link href={`/movie/${id.toString()}`} className={styles.intro__link}>See more!</Link>
        </div>
    );
};

export default IntroComponentDetails;