import React, {FC} from 'react';

const MoviePlaytimeComponent: FC<{ runtime: number }> = ({runtime}) => {
    return <div>
        <b>Playtime:</b>
        <span>
            {runtime ? runtime : "unknown"} {runtime ? (runtime > 1 ? "minutes" : "minute") : ""}
        </span>
    </div>;
};

export default MoviePlaytimeComponent;