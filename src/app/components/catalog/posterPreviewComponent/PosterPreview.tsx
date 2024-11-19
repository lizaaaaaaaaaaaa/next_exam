import React, {FC} from 'react';
import {basePathForImage} from "@/app/constants/api";
import styles from "./PosterPreview.module.css";

type PropsType = {
    title: string,
    poster_path: string
}

const PosterPreview: FC<PropsType> = ({title, poster_path}) => {
    return <img src={basePathForImage + poster_path} alt={title} className={styles.image}/>;
};

export default PosterPreview;