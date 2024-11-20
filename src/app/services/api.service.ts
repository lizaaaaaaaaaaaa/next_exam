import {baseUrl, authToken} from "@/app/constants/api";
import IRegularMovie from "@/app/models/IRegularMovie";
import IDetailedMovie from "@/app/models/IDetailedMovie";
import IGenre from "@/app/models/IGenre";

const getMoviesByPage = async (page: string): Promise<IRegularMovie[]> => {
    const response: Response = await fetch(baseUrl + `/discover/movie?page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        }
    });

    const values = await response.json();
    return values.results;
}

const getSingleMovieById = async (id: string): Promise<IDetailedMovie> => {
    const response: Response = await fetch(baseUrl + `/movie/${id}?language=en-US`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        }
    })

    return response.json();
}

const getAllGenres = async (): Promise<IGenre[]> => {
    const response: Response = await fetch(baseUrl + "/genre/movie/list?language=en", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        }
    })

    const values = await response.json();

    return values.genres;
}

const getPopularMovies = async (): Promise<IRegularMovie[]> => {
    const response: Response = await fetch(baseUrl + "/movie/popular?language=en-US", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        }
    });

    const values = await response.json();
    return values.results;
}

const getWantedFilms = async (text: string, page: string): Promise<IRegularMovie[]> => {
    const response: Response = await fetch(baseUrl + `/search/movie?query=${text}&include_adult=true&language=en-US&page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        }
    })

    const values = await response.json();
    return values.results;
}

const getFilmsByGenre = async (genreId: string, page: string): Promise<IRegularMovie[]> => {
    const response: Response = await fetch(baseUrl + `/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page ? page : "1"}&sort_by=primary_release_date.desc&with_genres=${genreId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        }
    })

    const values = await response.json();
    return values.results;
}
export {
    getMoviesByPage,
    getSingleMovieById,
    getAllGenres,
    getPopularMovies,
    getWantedFilms,
    getFilmsByGenre
}