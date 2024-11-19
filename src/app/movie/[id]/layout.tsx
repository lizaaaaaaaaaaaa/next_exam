import type {Metadata} from "next";
import Header from "@/app/components/header/Header";
import {getSingleMovieById} from "@/app/services/api.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const {title, overview} = await getSingleMovieById(params.id);
    return {
        title: `${title}`,
        description: `${overview}`
    }
}
export default function MoviesLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        </body>
        </html>
    );
}
