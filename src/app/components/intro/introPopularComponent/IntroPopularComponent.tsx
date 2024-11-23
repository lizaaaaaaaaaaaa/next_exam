import React, {FC} from 'react';
import {getPopularMovies} from "@/app/services/api.service";
import IntroSliderComponent from "@/app/components/intro/introSliderComponent/IntroSliderComponent";
import IRegularMovie from "@/app/models/IRegularMovie";


const IntroPopularComponent: FC = async () => {
    const movies: IRegularMovie[] = await getPopularMovies();

    return <div className="container">
        <IntroSliderComponent movies={movies}/>
    </div>;
};

export default IntroPopularComponent;