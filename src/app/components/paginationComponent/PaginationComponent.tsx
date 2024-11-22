'use client';

import React, {FC} from 'react';
import {Pagination} from "@mui/material";
import {useRouter, useSearchParams} from "next/navigation";
import styles from "./PaginationComponent.module.css";

const PaginationComponent: FC<{ count?: number }> = ({count}) => {
    const router = useRouter();
    const params = useSearchParams();

    const pageChangeHandler = (event: React.ChangeEvent<unknown>, page: number): void => {
        const currentParams = new URLSearchParams(params);
        currentParams.set("page", page.toString());
        router.replace(`?${currentParams.toString()}`, {scroll: true});
    }

    return <Pagination count={count ? count : 500} onChange={pageChangeHandler} className={styles.pagination}/>
};

export default PaginationComponent;