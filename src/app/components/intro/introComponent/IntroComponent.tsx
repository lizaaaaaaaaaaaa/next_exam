import React, {FC} from 'react';
import {getSingleMovieById} from "@/app/services/api.service";
import styles from "./IntroComponent.module.css"
import IntroComponentDetails from "@/app/components/intro/introComponentDetails/IntroComponentDetails";
import IDetailedMovie from "@/app/models/IDetailedMovie";
import hero from "../../../assets/images/intro/hero.png"
import Image from "next/image";
import IntroPopularComponent from "@/app/components/intro/introPopularComponent/IntroPopularComponent";

const IntroComponent: FC = async () => {
    const introMovie: IDetailedMovie = await getSingleMovieById("118340");

    return (
        <section className={styles.intro}>
            <div className={`container ${styles.intro__main}`}>
                <IntroComponentDetails movie={introMovie}/>
                <Image src={hero} alt={introMovie.title} priority={true} width={877} height={723}
                       className={styles.intro__img}/>
            </div>
            <IntroPopularComponent/>
        </section>
    );
};

export default IntroComponent;