import React from 'react';
import MovieContentComponent from "@/app/components/movie/movieContentComponent/MovieContentComponent";
import type {Metadata} from "next";
import {getSingleMovieById} from "@/app/services/api.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const id = await params.id;
    const {title, overview} = await getSingleMovieById(id);
    return {
        title: `${title}`,
        description: `${overview}`
    }
}

const MoviePage = async ({params}: { params: { id: string } }) => {
    const id: string = await params.id;
    return <MovieContentComponent id={id}/>;
};

export default MoviePage;