import React, {FC} from 'react';
import MovieContentComponent from "@/app/components/movie/movieContentComponent/MovieContentComponent";

const MoviePage = ({params}: { params: { id: string } }) => {

    return <MovieContentComponent id={params.id}/>;
};

export default MoviePage;