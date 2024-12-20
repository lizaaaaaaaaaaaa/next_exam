import type {Metadata} from "next";
import {ParamsType} from "@/app/models/ParamsType";
import {getSingleMovieById} from "@/app/services/api.service";

export const generateMetadata = async ({params}: { params: ParamsType }): Promise<Metadata> => {
    const {id} = await params;
    const {title, overview} = await getSingleMovieById(id);
    return {
        title: `${title ? title : "MovieEye"}`,
        description: `${overview ? overview : "Find your movie with us!"}`,
    };
};

export default function MoviesLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return <div>{children}</div>;
}
