import React from 'react';
import Link from "next/link";
import GenresComponent from "@/app/components/header/genresComponent/GenresComponent";
import styles from "./Header.module.css";
import UserInfo from "@/app/components/header/userInfoComponent/UserInfo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__inner}`}>
                <div>
                    <Link href={"/"} className={styles.logo}>
                        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3L20 16L2 29V3Z" stroke="#1B6D7D" strokeWidth="3"/>
                            <path d="M8 3L26 16L8 29V3Z" stroke="#1B6D7D" strokeWidth="3"/>
                        </svg>
                        <span>FilmSpace</span>
                    </Link>
                    <GenresComponent/>
                </div>
                <UserInfo/>
            </div>
        </header>
    );
};

export default Header;