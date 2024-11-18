import {baseUrl, authToken} from "@/app/constants/api";
import IRegularMovie from "@/app/models/IRegularMovie";
import IDetailedMovie from "@/app/models/IDetailedMovie";
import IGenre from "@/app/models/IGenre";

interface IMovieResponse {
    page: number,
    results: IRegularMovie[],
    total_pages: number,
    total_results: number,
}

const getMoviesByPage = async (page: string): Promise<IMovieResponse> => {
    const response: Response = await fetch(baseUrl + `/discover/movie?page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
        }
    });
    return response.json();
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