import React, {FC} from 'react';
import IProductionCompanies from "@/app/models/IProductionCompanies";
import CompaniesItemComponent from "@/app/components/movie/companies/companiesItemComponent/CompaniesItemComponent";
import styles from "./CompaniesListComponent.module.css";

const CompaniesListComponent: FC<{ companies: IProductionCompanies[] }> = ({companies}) => {
    return (
        <ul className={styles.movie__companies}>
            {companies.map(company => <CompaniesItemComponent key={company.id} name={company.name}/>)}
        </ul>
    );
};

export default CompaniesListComponent;