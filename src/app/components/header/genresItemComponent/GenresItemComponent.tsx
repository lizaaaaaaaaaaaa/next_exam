import React from 'react';

type PropsType = {
    name: string
}

const GenresItemComponent:React.FC<PropsType> = ({name}) => {
    return (
        <li>
            {/*todo*/}
            <a href="">{name}</a>
        </li>
    );
};

export default GenresItemComponent;