'use client';

import React, {FormEvent} from 'react';
import searchImage from "../../../assets/images/svg/search.svg";
import styles from "./SearchFormComponent.module.css";
import {useRouter, useSearchParams} from "next/navigation";

const SearchFormComponent = () => {
    const router = useRouter();
    const params = useSearchParams();

    const searchFormSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const target = event.target as HTMLFormElement;
        const input = target.elements[0] as HTMLInputElement;
        const searchMovie: string = input.value.toLowerCase();

        const currentParams = new URLSearchParams(params);
        currentParams.set("page", "1");
        currentParams.set("movie", searchMovie);
        router.push(`?${currentParams.toString()}`, {scroll: false});
    }
    return <form onSubmit={searchFormSubmitHandler} className={styles.form}>
        <input type="text"/>
        <button>
            <img src={searchImage.src} alt="searchBtn"/>
        </button>
    </form>;
};

export default SearchFormComponent;