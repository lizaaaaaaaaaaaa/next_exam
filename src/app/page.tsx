import styles from "./page.module.css";
import IntroComponent from "@/app/components/intro/introComponent/IntroComponent";

const Home = ()=> {
    return (
        <div className={styles.page}>
            <IntroComponent/>
        </div>
    );
}

export default Home;