import React, {FC} from 'react';
import styles from "./ErrorComponent.module.css";

const ErrorComponent: FC = () => {
    return (
        <div className={`container ${styles.error}`}>
            <div>Something went wrong...</div>
            <p>Please, try again later!</p>
        </div>
    );
};

export default ErrorComponent;