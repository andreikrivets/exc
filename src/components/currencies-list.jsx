import React, { useState } from 'react'
import uniquid from 'uniquid'
import { makeStyles } from '@material-ui/core/styles';

import CurrencyCard from './currency-card'
import HeaderCard from './header-card'

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 20,
    }
})

const toArray = (data) => {
    let info = [];
    let i = 0;
    for (let key in data.rates) {
        info[i] = [];
        info[i].push(key);
        info[i].push(data.rates[key])
        i++
    }
    return info;
} 

const CurrenciesList = ({ data, onSelect }) => {
    const classes = useStyles();
    const [rate, setRate] = useState(1);
    const getCurrentRate = (currentRate) => {
        if (currentRate > 0) setRate(currentRate)
        else setRate(0)
    }
    if (!data.rates) return null;
    const info = toArray(data);
    return (
        <>
            <div className={classes.wrapper}>
                <HeaderCard info={data.base} setCurrency={getCurrentRate} />
            </div>
            <div className={classes.wrapper} key={uniquid()}>
            {info.map((el, i) => {
                return i<30 ? <CurrencyCard info={el} key={uniquid()} rate={rate} onSelect={onSelect} onClick={() => console.log('click')}/> : null;
            })}
            </div> 
        </>
    )

}

export default CurrenciesList