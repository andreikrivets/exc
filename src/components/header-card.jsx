import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Typography, Divider, TextField } from '@material-ui/core';

import './currency-card.css'

const useStyles = makeStyles({
    card: {
        padding: "0 0",
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
            padding: "0 0"
          }
    },
    divider: {
        width: "100%"
    },
    input: {
        textAlign: "center",
        width: "100%"
    },
    button: {
        width: "100%",
        fontSize: "1.5vw",
    },
})

const HeaderCard = ( { info, setCurrency } ) => {
    const classes = useStyles();
    const handleChange = (e) => {
        setCurrency(e.target.value);
    }
    if (!info) return null;
    return (
        <Card className={classes.card}>
            <CardContent 
                classes={{
                    root: classes.cardContent
                }}
            >
                <Button 
                    color="secondary"
                    className={classes.button} 
                    variant="contained" 
                >
                    {info}
                </Button>
                <Divider className={classes.divider} variant="middle" />    

                <TextField 
                    className={classes.input} 
                    defaultValue={ 1 }
                    onChange={handleChange}
                />
            </CardContent>
        </Card>
    )
}

export default HeaderCard;