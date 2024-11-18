"use client";

import React, {FC} from 'react';
import dynamic from "next/dynamic";
import IRegularMovie from "@/app/models/IRegularMovie";
import IntroSliderItemComponent from "@/app/components/intro/introSliderItem/IntroSliderItemComponent";
import styles from "./IntroSliderComponent.module.css";
import ISliderSettings from "@/app/models/ISliderSettings";

const Slider = dynamic(() => import('react-slick'), {ssr: false});

const IntroSliderComponent: FC<{ movies: IRegularMovie[] }> = ({movies}) => {
    const settings:ISliderSettings = {
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true
    };

    return (
        <Slider {...settings} className={styles.intro__slider}>
            {movies.map(movie => (
                <IntroSliderItemComponent key={movie.id} title={movie.title} vote_average={movie.vote_average}
                                          overview={movie.overview} poster_path={movie.poster_path}>
                </IntroSliderItemComponent>
            ))}
        </Slider>
    );
};

export default IntroSliderComponent;
