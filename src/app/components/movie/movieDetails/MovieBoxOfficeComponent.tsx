import React, {FC} from 'react';

const MovieBoxOfficeComponent: FC<{ revenue: number }> = ({revenue}) => {
    return <div><b>Box Office:</b>{revenue > 0 ? `${revenue}$` : "unknown"}</div>;
};

export default MovieBoxOfficeComponent;