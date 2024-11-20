import React from 'react';
import MovieContentComponent from "@/app/components/movie/movieContentComponent/MovieContentComponent";
import {ParamsType} from "@/app/models/ParamsType";

const MoviePage = async ({params}: { params: ParamsType }) => {
    const {id} = await params;
    return <MovieContentComponent id={id}/>;
};


export default MoviePage;
