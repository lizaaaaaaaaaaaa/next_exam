import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import styles from "./PosterPreview.module.css";
import noImage from "../../../assets/images/other/noImage.svg"
import roundFraction from "@/app/helpers/round.fraction";

type PropsType = {
    title: string,
    poster_path: string,
    vote_average: number,
    adult: boolean
}

const PosterPreview: FC<PropsType> = ({title, poster_path, vote_average, adult}) => {
    const imageSrc: string = poster_path ? (basePathForImage + poster_path) : noImage.src;
    return <div className={styles.image__container}>
        <img src={imageSrc} alt={title} className={styles.image}/>
        {adult ? <span className={styles.image__adult}>18+</span> : ""}
        <span className={styles.image__rate}>{roundFraction(vote_average)}</span>
    </div>;
};

export default PosterPreview;