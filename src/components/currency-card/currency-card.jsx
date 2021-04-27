import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
} from "@material-ui/core";

import "./currency-card.css";

const useStyles = makeStyles({
  card: {
    padding: "0 0",
    marginBottom: "30px",
  },
  cardContent: {
    padding: "0 0",
    width: "15vw",
    minWidth: "150px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
    "&:last-child": {
      padding: "0 0",
    },
  },
  divider: {
    width: "100%",
  },
  input: {
    textAlign: "center",
    width: "100%",
  },
  button: {
    width: "100%",
    fontSize: "1.5vw",
  },
});

const CurrencyCard = ({ name, value, rate, onSelect }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent
        classes={{
          root: classes.cardContent,
        }}
      >
        <Button
          color="primary"
          className={classes.button}
          variant="contained"
          onClick={() => onSelect(name)}
        >
          {name}
        </Button>
        <Divider className={classes.divider} variant="middle" />
        <TextField
          className={classes.input}
          value={(value * rate).toFixed(3)}
        />
      </CardContent>
    </Card>
  );
};

export default CurrencyCard;
