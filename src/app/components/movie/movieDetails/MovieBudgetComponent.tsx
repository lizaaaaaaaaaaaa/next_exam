import React, {FC} from 'react';

const MovieBudgetComponent: FC<{ budget: number }> = ({budget}) => {
    return <div><b>Film budget:</b>{budget > 0 ? `${budget}$` : "unknown"}</div>;
};

export default MovieBudgetComponent;