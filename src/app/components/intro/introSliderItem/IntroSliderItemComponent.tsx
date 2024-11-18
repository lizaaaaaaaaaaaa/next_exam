import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";
import cutText from "@/app/helpers/cut.text";
import styles from "./IntroSliderItemComponent.module.css";

type PropsType = {
    title: string,
    vote_average: number,
    overview: string,
    poster_path: string
}

const IntroSliderItemComponent: FC<PropsType> = ({
                                                     title, vote_average,
                                                     overview, poster_path
                                                 }) => {
    const poster: string = basePathForImage + poster_path;

    const description: string = cutText(overview, 85)
    return (
        <div style={{backgroundImage: `url(${poster})`}} className={styles.intro__item}>
            {/*todo зробити посилання на сторінку про цей фільм*/}
            <h5>{title}</h5>
            <StarsRating rating={vote_average} starDimension={"20px"} starSpacing={"2px"}/>
            <p>{description}</p>
        </div>
    );
};

export default IntroSliderItemComponent;