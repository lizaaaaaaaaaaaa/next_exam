"use client";

import React, {FC} from 'react';
import dynamic from "next/dynamic";
import IRegularMovie from "@/app/models/IRegularMovie";
import IntroSliderItemComponent from "@/app/components/intro/introSliderItem/IntroSliderItemComponent";
import styles from "./IntroSliderComponent.module.css";
import ISliderSettings from "@/app/models/ISliderSettings";

const Slider = dynamic(() => import('react-slick'), {ssr: false});

const IntroSliderComponent: FC<{ movies: IRegularMovie[] }> = ({movies}) => {
    const settings: ISliderSettings = {
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        swipe: false
    };

    const sliderItems: React.JSX.Element[] = movies.map(movie => (
        <IntroSliderItemComponent key={movie.id} id={movie.id} title={movie.title}
                                  vote_average={movie.vote_average}
                                  overview={movie.overview} poster_path={movie.poster_path}/>
    ));

    return (
        <Slider {...settings} className={styles.intro__slider}>
            {sliderItems}
        </Slider>
    );
};

export default IntroSliderComponent;
