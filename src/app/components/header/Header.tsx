import React from 'react';
import Link from "next/link";
import styles from "./Header.module.css";
import UserInfo from "@/app/components/header/userInfoComponent/UserInfo";
import logo from "../../assets/images/svg/logo.svg";
import Image from "next/image";
import NavComponent from "@/app/components/catalog/navComponent/NavComponent";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__inner}`}>
                <div>
                    <Link href={"/"} className={styles.logo}>
                        <Image src={logo} alt={"Movie Eye"} width={215} height={48}/>
                    </Link>

                </div>
                <NavComponent/>
                <UserInfo/>
            </div>
        </header>
    );
};

export default Header;