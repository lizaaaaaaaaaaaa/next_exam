import React from 'react';
import Link from "next/link";
import styles from "./WrongPageContent.module.css";

const WrongPageContent = () => {
    return (
        <div className={styles.wrong}>
            <div>404</div>
            <p>It looks like you have entered the wrong page!</p>
            <Link href={"/"} className={styles.wrong__link}>Back to home</Link>
        </div>
    );
};

// ЛОАДЕР В СЛАЙДЕР В ІНТРО

export default WrongPageContent;