import React from 'react';
import MoviesList from "@/app/components/catalog/moviesList/MoviesList";

const GenreFilmsPage = ({params}: { params: { id: string } }) => {

    return <MoviesList for={"genresFilms"} genre={params.id}/>
};

export default GenreFilmsPage;