import React from 'react';

type PropsType = {
    id: number,
    name: string
}

const GenresItemComponent:React.FC<PropsType> = ({id,name}) => {
    return (
        <li>
            <a href={`/genres/${id}`}>{name}</a>
        </li>
    );
};

export default GenresItemComponent;