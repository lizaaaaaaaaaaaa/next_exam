import React, {FC} from 'react';
import styles from "./Header.module.css";
import UserInfo from "@/app/components/header/userInfoComponent/UserInfo";
import NavComponent from "@/app/components/header/navComponent/NavComponent";
import LogoComponent from "@/app/components/header/logoComponent/LogoComponent";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__inner}`}>
                <LogoComponent className={styles.logo}/>
                <NavComponent/>
                <UserInfo/>
            </div>
        </header>
    );
};

export default Header;