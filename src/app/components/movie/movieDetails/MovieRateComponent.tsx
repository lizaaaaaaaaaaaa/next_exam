import React, {FC} from 'react';
import StarsRating from "@/app/components/starsRatingComponent/StarsRating";

type PropsType = {
    vote_average: number,
    vote_count: number,
    className:string
}

const MovieRateComponent:FC<PropsType> = ({vote_average, vote_count, className}) => {
    return (
        <div className={className}>
            <StarsRating rating={vote_average} starDimension={"40px"} starSpacing={"2px"}/>
            <span>{vote_count}</span>
        </div>
    );
};

export default MovieRateComponent;