import React, { useState } from 'react'
import uniquid from 'uniquid'
import { makeStyles } from '@material-ui/core/styles';

import CurrencyCard from './currency-card'
import HeaderCard from './header-card'

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: 20,
    }
})

const blr = {
    Cur_ID: 1,
    Cur_Name: "Белорусский рубль",
    Cur_OfficialRate: 1
}

const CurrenciesList = ({ data }) => {
    console.log(data);
    const classes = useStyles();
    const [rate, setRate] = useState(1);
    const getCurrentRate = (currentRate) => {
        if (currentRate > 0) setRate(currentRate)
        else setRate(0)
    }
    if (!data.length) return null
    return (
        <>
            <div className={classes.wrapper}>
                <HeaderCard info={blr} setCurrency={getCurrentRate} />
            </div>
            <div className={classes.wrapper}>
                {data.map((el, i) => {
                    return i <= 5 ? <CurrencyCard info={el} key={uniquid()} rate={rate} /> : null
                })}
            </div>
        </>
    )

}

export default CurrenciesList