import React, { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import uniquid from 'uniquid';
import Snackbar from '@material-ui/core/Snackbar';

import getCurrencyValue from './getCurrencyValue'
import CurrenciesList from './currencies-list'

const App = () => {
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const [currency, setCurrency] = useState('USD')
    const [isLoading, setIsLoading] = useState(true);
    const getData = () => {
        setIsLoading(true);
        getCurrencyValue(currency)
            .then(resp => {
                setData(resp);
                setIsLoading(false);
            })
        }

    const handleChange = (e) => {
        setOpen(true);
        setCurrency(e);
        getData();
    }

    const handleClose = () => setOpen(false);

    document.addEventListener('DOMContentLoaded', getData);
    if (isLoading) return (
        <div style={{display: "flex", justifyContent: "center", marginTop:"300px"}}>
            <CircularProgress />
        </div>
    ) 
    return (
        <>        
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} message={`switched to ${currency}`} />
            <CurrenciesList key={uniquid()} data={data} onSelect={handleChange} initialCurrency={currency}/>    
        </>
    )
}

const AppW = () => <App />

export default AppW