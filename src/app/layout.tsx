import type {Metadata} from "next";
import "./globals.css";
import "./reset.css";
import Header from "@/app/components/header/Header";

export const metadata: Metadata = {
    title: "MovieEye",
    description: "Find your movie with us!",
};

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
