import React, { useState } from "react";
import uniqid from "uniqid";
import { makeStyles } from "@material-ui/core/styles";

import CurrencyCard from "./currency-card";
import HeaderCard from "./header-card";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 20,
  },
});

const CurrenciesList = ({ data, initialCurrency, onSelect }) => {
  const classes = useStyles();
  const [rate, setRate] = useState(1);
  const getCurrentRate = (currentRate) => {
    if (currentRate > 0) setRate(currentRate);
    else setRate(0);
  };
  if (!data.rates) return null;
  const currencyNames = Object.keys(data.rates);
  const currencyValues = Object.values(data.rates);
  return (
    <>
      <div className={classes.wrapper}>
        <HeaderCard info={initialCurrency} setCurrency={getCurrentRate} />
      </div>
      <div className={classes.wrapper} key={uniqid()}>
        {currencyNames.map((el, i) => {
          return i < 30 ? (
            <CurrencyCard
              name={el}
              value={currencyValues[i]}
              key={uniqid()}
              rate={rate}
              onSelect={onSelect}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default CurrenciesList;
