import React from 'react';
import MoviesList from "@/app/components/catalog/moviesList/MoviesList";

const MoviesByGenreContentComponent = ({params}: { params: { id: string } }) => {

    return (
        <div>
            <MoviesList for={"genresFilms"} genre={params.id}/>
        </div>
    );
};

export default MoviesByGenreContentComponent;