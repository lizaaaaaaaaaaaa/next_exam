import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import styles from "./PosterPreview.module.css";
import noImage from "../../../assets/images/other/noImage.svg"

type PropsType = {
    title: string,
    poster_path: string
}

const PosterPreview: FC<PropsType> = ({title, poster_path}) => {
    const imageSrc: string = poster_path ? (basePathForImage + poster_path) : noImage.src;
    return <img src={imageSrc} alt={title} className={styles.image}/>;
};

export default PosterPreview;