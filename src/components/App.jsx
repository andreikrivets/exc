import React, { useState, useEffect } from "react";
import { Snackbar, CircularProgress } from "@material-ui/core";

import CurrenciesList from "./currencies-list";
import getCurrencyValue from "./data/getCurrencyValue";

const App = () => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = (curr) => {
    setIsLoading(true);
    getCurrencyValue(curr).then((resp) => {
      setData(resp);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData("USD");
  }, []);

  const handleChange = (e) => {
    setOpen(true);
    getData(e);
  };

  const handleClose = () => setOpen(false);

  const circProgress = (
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
    circProgress
  ) : (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={`switched to ${data.base_code}`}
      />
      <CurrenciesList
        data={data}
        onSelect={handleChange}
        initialCurrency={data.base_code || "USD"}
      />
    </>
  );
};

const AppW = () => <App />;

export default AppW;
