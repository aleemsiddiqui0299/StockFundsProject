import React from "react";
import { useQuery } from '@apollo/client';
import {GET_COMPANIES} from '../../queries';


const CompanyList = ()=>{
    const { loading, error, data } = useQuery(GET_COMPANIES);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error.message}</p>;

    return (
        <ul>
            {data.getAllCompanies.map((company)=>(
                <li key={company.companyId}>{company.name} YEAR: {company.year}</li>
            ))}
        </ul>
    );
};

export default CompanyList;