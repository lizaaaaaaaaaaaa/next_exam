import React, {FC} from 'react';

const MovieTaglineComponent: FC<{ tagline: string }> = ({tagline}) => {
    return <div>
        <b>Tagline:</b>
        <blockquote>{tagline}</blockquote>
    </div>;
};

export default MovieTaglineComponent;