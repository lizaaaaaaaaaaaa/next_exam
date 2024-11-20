import React from 'react';
import {ParamsType} from "@/app/models/ParamsType";
import MoviesByGenreContentComponent
    from "@/app/components/byGenre/moviesByGenreContentComponent/MoviesByGenreContentComponent";
import IGenre from "@/app/models/IGenre";
import {getAllGenres} from "@/app/services/api.service";

const GenreFilmsPage = async ({params}: { params: ParamsType }) => {
    const {id} = await params;

    const genres: IGenre[] = await getAllGenres();
    const searchGenre: IGenre | undefined = genres.find(genre => id === genre.id.toString())

    return <MoviesByGenreContentComponent genreId={id} genreName={searchGenre ? searchGenre.name : ""}/>;
};

export default GenreFilmsPage;