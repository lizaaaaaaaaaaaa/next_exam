import React, {FC} from 'react';
import IGenre from "@/app/models/IGenre";
import Link from "next/link";
import styles from "./GenresItemComponent.module.css";

const GenresItemComponent: FC<IGenre> = ({id, name}) => {
    return (
        <li>
            <Link href={`/genres/${id}`} className={styles.genres__link}>{name}</Link>
        </li>
    );
};

export default GenresItemComponent;