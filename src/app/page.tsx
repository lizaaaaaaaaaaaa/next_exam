import styles from "./page.module.css";
import IntroComponent from "@/app/components/intro/introComponent/IntroComponent";
import CatalogComponent from "@/app/components/catalog/catalogComponent/CatalogComponent";

const MoviesPage = () => {
    return (
        <div className={styles.page}>
            <IntroComponent/>
            <CatalogComponent/>
        </div>
    );
}

export default MoviesPage;