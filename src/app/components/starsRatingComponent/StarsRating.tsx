'use client';

import React from 'react';
import dynamic from "next/dynamic";

const StarRatings = dynamic(() => import('react-star-ratings'), {ssr: false})

type PropsType = {
    rating: number;
    starDimension: string,
    starSpacing: string
}

const RatingComponent: React.FC<PropsType> = ({rating, starSpacing, starDimension}) => {
    const starColor: string = "#ca7900";

    return (
        <StarRatings
            rating={rating}
            starRatedColor={starColor}
            numberOfStars={10}
            starDimension={starDimension}
            starSpacing={starSpacing}
        />
    );
};

export default RatingComponent;