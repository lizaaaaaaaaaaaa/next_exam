import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import styles from "./PosterPreview.module.css";
import noImage from "../../../assets/images/other/noImage.svg"
import roundFraction from "@/app/helpers/round.fraction";

type PropsType = {
    title: string,
    poster_path: string,
    vote_average: number
}

const PosterPreview: FC<PropsType> = ({title, poster_path, vote_average}) => {
    const imageSrc: string = poster_path ? (basePathForImage + poster_path) : noImage.src;
    return <div className={styles.image__container}>
        <img src={imageSrc} alt={title} className={styles.image}/>
        <span>{roundFraction(vote_average)}</span>
    </div>;
};

export default PosterPreview;