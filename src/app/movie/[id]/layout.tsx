import type {Metadata} from "next";
import {getSingleMovieById} from "@/app/services/api.service";

export default function MoviesLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return <div>{children}</div>;
}
