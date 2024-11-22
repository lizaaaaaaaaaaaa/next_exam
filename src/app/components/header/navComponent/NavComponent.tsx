import React, {FC} from 'react';
import GenresComponent from "@/app/components/header/genresComponent/GenresComponent";
import Link from "next/link";
import styles from "./NavComponent.module.css";

const NavComponent: FC = () => {
    return (
        <nav>
            <ul className={styles.nav__list}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <GenresComponent/>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;