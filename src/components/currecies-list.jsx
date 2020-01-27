import React from 'react'
import uniquid from 'uniquid'
import { makeStyles } from '@material-ui/core/styles';

import CurrencyCard from './currency-card'

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        justifyContent: "space-around"
    }
})

const CurrenciesList = ({ data }) => {
    const classes = useStyles();
    if (!data.length) return null
    console.log(data);
    return (
        <div className={classes.wrapper}>
            {data.map((el, i) => {
                return i <= 5 ? <CurrencyCard info={el} key={uniquid()} /> : null
            })}
        </div>
    )

}

export default CurrenciesList