import React from 'react';

type PropsType = {
    title: string,
    vote_average: number,
    vote_count: number,
    tagline: string,
    overview: string
}

const IntroComponentDetails: React.FC<PropsType> = ({title, vote_average, vote_count, tagline, overview}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{vote_average}</div>
            <div>{vote_count}</div>
            <blockquote>{tagline}</blockquote>
            <p>{overview}</p>
            <button>See more!</button>
        </div>
    );
};

export default IntroComponentDetails;