'use client';

import React, {FC, useState} from 'react';
import {Pagination} from "@mui/material";
import {useRouter, useSearchParams} from "next/navigation";
import styles from "./PaginationComponent.module.css";

const PaginationComponent: FC<{ count?: number }> = ({count}) => {
    const router = useRouter();
    const params = useSearchParams();

    const [page, setPage] = useState<number>(1);

    const pageChangeHandler = (event: React.ChangeEvent<unknown>, page: number): void => {
        setPage(page);

        const currentParams = new URLSearchParams(params);
        currentParams.set("page", page);
        router.replace(`?${currentParams.toString()}`, {scroll: false});
    }
    return (
        <Pagination count={count ? count : 500} page={page} onChange={pageChangeHandler} className={styles.pagination}/>
    );
};

export default PaginationComponent;