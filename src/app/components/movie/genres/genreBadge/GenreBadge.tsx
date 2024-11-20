import React, {FC} from 'react';
import IGenre from "@/app/models/IGenre";
import Link from "next/link";
import styles from "./GenreBadge.module.css";

const GenreBadge: FC<IGenre> = ({id, name}) => {
    return (
        <li>
            <Link href={`/genres/${id}`} className={styles.genres__link}>{name}</Link>
        </li>
    );
};

export default GenreBadge;