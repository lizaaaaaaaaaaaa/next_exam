import {baseUrl, authToken} from "@/app/constants/api";
import IRegularMovie from "@/app/models/IRegularMovie";
import IDetailedMovie from "@/app/models/IDetailedMovie";
import IGenre from "@/app/models/IGenre";
import {redirect} from "next/navigation";

interface IResponse {
    page: number,
    results: IRegularMovie[],
    total_pages: number,
    total_results: number
}

const fetchConfig = {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json",
    }
}

const responseIsNotOkHandler = (response: Response): void => {
    if (!response.ok) {
        redirect("/error");
    }
}

export const getMoviesByPage = async (page: string): Promise<IRegularMovie[]> => {
    try {
        const response: Response = await fetch(baseUrl + `/discover/movie?page=${page}`, fetchConfig);
        responseIsNotOkHandler(response);
        const values = await response.json();
        return values.results;
    } catch {
        redirect("/error");
    }
}

export const getSingleMovieById = async (id: string): Promise<IDetailedMovie> => {
    try {
        const response: Response = await fetch(baseUrl + `/movie/${id}?language=en-US`, fetchConfig);
        responseIsNotOkHandler(response);
        return response.json();
    } catch {
        redirect("/error");
    }
}

export const getAllGenres = async (): Promise<IGenre[]> => {
    try {
        const response: Response = await fetch(baseUrl + "/genre/movie/list?language=en", fetchConfig)
        const values = await response.json();
        responseIsNotOkHandler(response);
        return values.genres;
    } catch {
        redirect("/error");
    }
}

export const getPopularMovies = async (): Promise<IRegularMovie[]> => {
    try {
        const response: Response = await fetch(baseUrl + "/movie/popular?language=en-US", fetchConfig);
        responseIsNotOkHandler(response);
        const values = await response.json();
        return values.results;
    } catch {
        redirect("/error");
    }
}

export const getWantedFilms = async (text: string, page: string): Promise<IResponse> => {
    try {
        const response: Response = await fetch(baseUrl + `/search/movie?query=${text}&include_adult=true&language=en-US&page=${page}`, fetchConfig);
        responseIsNotOkHandler(response);
        return await response.json();
    } catch {
        redirect("/error");
    }
}

export const getFilmsByGenre = async (genreId: string, page: string): Promise<IRegularMovie[]> => {
    try {
        const response: Response = await fetch(baseUrl + `/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page ? page : "1"}&sort_by=primary_release_date.asc&with_genres=${genreId}`, fetchConfig);
        responseIsNotOkHandler(response);
        const values = await response.json();
        return values.results;
    } catch {
        redirect("/error");
    }
}