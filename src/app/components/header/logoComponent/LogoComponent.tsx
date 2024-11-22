import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/svg/logo.svg";

type PropsType = {
    className: string
}

const LogoComponent: FC<PropsType> = ({className}) => {
    return <Link href={"/"} className={className}>
        <Image src={logo} alt={"Movie Eye"} width={215} height={48}/>
    </Link>;
};

export default LogoComponent;