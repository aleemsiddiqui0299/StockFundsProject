import React from "react";
import { useQuery } from '@apollo/client';
import {GET_EQUITIES_COMPANIES} from '../../queries';


const StockList = ()=>{
    const { loading, error, data } = useQuery(GET_EQUITIES_COMPANIES);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error.message}</p>;

    return (
        <ul>
            {data.getAllEquities.map((equity)=>(
                <li key={equity.name}>{equity.name}</li>
            ))}
        </ul>
    );
};

export default StockList;