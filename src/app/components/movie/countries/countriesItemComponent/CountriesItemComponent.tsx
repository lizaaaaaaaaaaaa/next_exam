import React, {FC} from 'react';

const CountriesItemComponent: FC<{ name: string }> = ({name}) => {
    return (
        <li>
            <span>{name}</span>
        </li>
    );
};

export default CountriesItemComponent;