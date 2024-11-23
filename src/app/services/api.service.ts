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

interface IGenresResponse {
    page: number,
    genres: IGenre[]
}

const getData = async <T>(url: string): Promise<T> => {
    try {
        const response: Response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            redirect("/error");
        }

        return await response.json();
    } catch {
        redirect("/error");
    }
}

export const getMoviesByPage = async (page: string): Promise<IRegularMovie[]> => {
    const values: IResponse = await getData<IResponse>(baseUrl + `/discover/movie?page=${page}`);
    return values.results;
}

export const getSingleMovieById = async (id: string): Promise<IDetailedMovie> => {
    return await getData<IDetailedMovie>(baseUrl + `/movie/${id}?language=en-US`);
}

export const getAllGenres = async (): Promise<IGenre[]> => {
    const values: IGenresResponse = await getData<IGenresResponse>(baseUrl + "/genre/movie/list?language=en");
    return values.genres;
}

export const getPopularMovies = async (): Promise<IRegularMovie[]> => {
    const values: IResponse = await getData<IResponse>(baseUrl + "/movie/popular?language=en-US");
    return values.results;
}

export const getWantedFilms = async (text: string, page: string): Promise<IResponse> => {
    return await getData(baseUrl + `/search/movie?query=${text}&include_adult=true&language=en-US&page=${page}`);
}

export const getFilmsByGenre = async (genreId: string, page: string): Promise<IRegularMovie[]> => {
    const values: IResponse = await getData<IResponse>(baseUrl + `/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page ? page : "1"}&sort_by=primary_release_date.asc&with_genres=${genreId}`);
    return values.results;
}