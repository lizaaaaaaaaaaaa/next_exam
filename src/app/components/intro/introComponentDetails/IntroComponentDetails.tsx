import React from 'react';
import styles from "./IntroComponentDetails.module.css";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";

type PropsType = {
    title: string,
    vote_average: number,
    overview: string
}

const IntroComponentDetails: React.FC<PropsType> = ({title, vote_average, overview}) => {
    return (
        <div className={styles.intro__content}>
            <h2>{title}</h2>
            <StarsRating rating={vote_average} starDimension={"40px"} starSpacing={"2px"}/>
            <p className={styles.intro__text}>{overview}</p>
            {/*todo*/}
            <button>See more!</button>
        </div>
    );
};

export default IntroComponentDetails;