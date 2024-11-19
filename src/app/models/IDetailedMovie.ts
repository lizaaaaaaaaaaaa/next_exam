import IGenre from "@/app/models/IGenre";
import IProductionCompanies from "@/app/models/IProductionCompanies";
import IProductionCountries from "@/app/models/IProductionCountries";

export default interface IDetailedMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: IBelongsToCollection | null;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompanies[];
    production_countries: IProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLanguages[];
    status: string;
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IBelongsToCollection {
    id: number;
    name: string;
    poster_path?: string | null;
    backdrop_path?: string | null;
}

export interface ISpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}