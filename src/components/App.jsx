import React, { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import uniquid from 'uniquid';

import getCurrencyValue from './getCurrencyValue'
import CurrenciesList from './currencies-list'

const App = () => {
    const [data, setData] = useState({});
    let currency = 'USD';
    const [isLoading, setIsLoading] = useState(true);
    const getData = () => {
        setIsLoading(true);
        getCurrencyValue(currency)
            .then(resp => {
                setData(resp);
                setIsLoading(false);
            })
        }

    const setCurrency = (e) => {
        currency = e;
        getData();
    }

    document.addEventListener('DOMContentLoaded', getData);
    if (isLoading) return (
        <div style={{display: "flex", justifyContent: "center", marginTop:"300px"}}>
            <CircularProgress />
        </div>
    ) 
    return (
        <>
            <CurrenciesList key={uniquid()} data={data} onSelect={setCurrency} />    
        </>
    )
}

const AppW = () => <App />

export default AppW