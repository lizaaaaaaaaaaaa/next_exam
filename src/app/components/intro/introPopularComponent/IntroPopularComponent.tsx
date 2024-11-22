import React, {FC} from 'react';
import {getPopularMovies} from "@/app/services/api.service";
import IntroSliderComponent from "@/app/components/intro/introSliderComponent/IntroSliderComponent";


const IntroPopularComponent: FC = async () => {
    const movies = await getPopularMovies();

    return <div className="container">
        <IntroSliderComponent movies={movies}/>
    </div>;
};

export default IntroPopularComponent;