import React, {FC} from 'react';

const MovieOriginalTitle: FC<{ original_title: string }> = ({original_title}) => {
    return <div>
        <b>Original title:</b>
        <h2>{original_title}</h2>
    </div>;
};

export default MovieOriginalTitle;