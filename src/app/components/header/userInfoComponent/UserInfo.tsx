import React, {FC} from 'react';
import Image from "next/image";
import avatar from "../../../assets/images/other/avatar.jpg";
import styles from "./UserInfo.module.css";

const UserInfo: FC = () => {
    return (
        <div className={styles.user}>
            <Image src={avatar} className={styles.user__image} alt="avatar" width={50} height={50}/>
            <div>Liza</div>
        </div>
    );
};

export default UserInfo;