import React from 'react';
import {getSingleMovieById} from "@/app/services/api.service";
import styles from "./IntroComponent.module.css"
import IntroComponentDetails from "@/app/components/intro/introComponentDetails/IntroComponentDetails";
import IDetailedMovie from "@/app/models/IDetailedMovie";
import Image from "next/image";

const IntroComponent: React.FC = async () => {
    const introMovie: IDetailedMovie = await getSingleMovieById("331482");
    console.log(introMovie);
    const posterUrl: string = `https://image.tmdb.org/t/p/w500/${introMovie.poster_path}`;
    return (
        <section className={styles.intro}>
            <div className={`container ${styles.intro__inner}`}>
                <IntroComponentDetails title={introMovie.title} vote_average={introMovie.vote_average}
                                       vote_count={introMovie.vote_count} tagline={introMovie.tagline}
                                       overview={introMovie.overview}/>
                <Image src={posterUrl} alt={introMovie.title} priority={true} width={295} height={417}/>
            </div>
        </section>
    );
};

export default IntroComponent;