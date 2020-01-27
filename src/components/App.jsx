import React, { useState } from 'react'

import CurrenciesList from './currecies-list'

const App = () => {
    const [data, setData] = useState({});

    const getCurrencyValue = async () => {
        const url = 'http://www.nbrb.by/api/exrates/rates?periodicity=0';
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    }

    const getData = () => getCurrencyValue()
        .then(resp => {
            setData(resp);
        })
    
    return (
        <>
            <button nam="r" onClick={getData}>tu</button>
            <CurrenciesList data={ data } />    
        </>
    )
}

const AppW = () => <App />

export default AppW