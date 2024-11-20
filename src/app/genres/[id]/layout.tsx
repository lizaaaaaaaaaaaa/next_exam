import type {Metadata} from "next";
import {ParamsType} from "@/app/models/ParamsType";
import {getAllGenres} from "@/app/services/api.service";
import IGenre from "@/app/models/IGenre";

export const generateMetadata = async ({params}: { params: ParamsType }): Promise<Metadata> => {
    const {id} = await params;
    const genres: IGenre[] = await getAllGenres();
    const searchGenre: IGenre | undefined = genres.find(genre => id === genre.id.toString())
    return {
        title: searchGenre ? `${searchGenre.name} films` : "MovieEye"
    };
};


export default function MoviesLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return <div>{children}</div>;
}
