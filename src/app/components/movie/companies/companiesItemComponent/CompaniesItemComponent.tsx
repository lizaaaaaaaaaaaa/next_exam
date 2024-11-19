import React, {FC} from 'react';
type PropsType = {
    name: string,
}
const CompaniesItemComponent: FC<PropsType> = ({name}) => {
    return (
        <li>
            <h6>{name}</h6>
        </li>
    );
};

export default CompaniesItemComponent;