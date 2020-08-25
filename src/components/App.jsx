import React, { useState, useEffect } from "react";
import { Snackbar, CircularProgress } from "@material-ui/core";

import CurrenciesList from "./currencies-list";
import getCurrencyValue from "./getCurrencyValue";

const App = () => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCurrencyValue().then((resp) => {
      setData(resp);
      setIsLoading(false);
    });
  }, []);

  const getData = (curr) => {
    setIsLoading(true);
    getCurrencyValue(curr).then((resp) => {
      setData(resp);
      setIsLoading(false);
    });
  };

  const handleChange = (e) => {
    setOpen(true);
    getData(e);
  };

  const handleClose = () => setOpen(false);

  const circP = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "300px",
      }}
    >
      <CircularProgress />
    </div>
  );

  return isLoading ? (
    circP
  ) : (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={`switched to ${data.base}`}
      />
      <CurrenciesList
        data={data}
        onSelect={handleChange}
        initialCurrency={data.base || "USD"}
      />
    </>
  );
};

const AppW = () => <App />;

export default AppW;
