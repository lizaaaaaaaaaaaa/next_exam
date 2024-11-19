'use client';

import React, {FC, useState} from 'react';
import {Pagination} from "@mui/material";
import {useRouter} from "next/navigation";
import styles from "./PaginationComponent.module.css";

const PaginationComponent: FC = () => {
    const router = useRouter();
    const [page, setPage] = useState<number>(1);

    const pageChangeHandler = (event: React.ChangeEvent<unknown>, page: number): void => {
        setPage(page);
        router.push(`?page=${page}`, {scroll: false});
    }
    return (
        <Pagination count={500} page={page} onChange={pageChangeHandler} className={styles.pagination}/>
    );
};

export default PaginationComponent;