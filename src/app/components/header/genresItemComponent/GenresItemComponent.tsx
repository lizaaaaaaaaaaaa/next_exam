import React from 'react';
import Link from "next/link";

type PropsType = {
    id: number,
    name: string
}

const GenresItemComponent: React.FC<PropsType> = ({id, name}) => {
    return (
        <li>
            <Link href={`/genres/${id}`}>{name}</Link>
        </li>
    );
};

export default GenresItemComponent;