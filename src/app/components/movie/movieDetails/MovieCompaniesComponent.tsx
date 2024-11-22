import React, {FC} from 'react';
import IProductionCompanies from "@/app/models/IProductionCompanies";
import CompaniesListComponent from "@/app/components/movie/companies/companiesListComponent/CompaniesListComponent";

const MovieCompaniesComponent: FC<{ production_companies: IProductionCompanies[] }> = ({production_companies}) => {
    return <div>
        <b>Production companies:</b>
        {production_companies.length > 0 ?
            <CompaniesListComponent companies={production_companies}/>
            : "unknown"}
    </div>;
};

export default MovieCompaniesComponent;