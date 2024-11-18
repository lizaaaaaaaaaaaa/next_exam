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
    })

    const values = await response.json();
    return values.results;
}


export {
    getMoviesByPage,
    getSingleMovieById,
    getAllGenres,
    getPopularMovies
}