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
        height: "5vw",
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
        fontSize: "0.9vw",
    },
})

const correctNames = (name) => {
    const nameArray = name.split(' ');
    if (nameArray[0].length > 7) {
        nameArray[0] = nameArray[0].slice(0, 7) + '.';
    }
    return nameArray.join(' ');
}

const HeaderCard = ( { info, setCurrency } ) => {
    const classes = useStyles();
    const handleChange = (e) => {
        setCurrency(e.target.value);
    }
    if (!info) return null;
    return (
        <Card className={classes.card} value={info.Cur_ID}>
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
                    {correctNames(info.Cur_Name)}
                </Button>
                <Divider className={classes.divider} variant="middle" />    

                <TextField 
                    className={classes.input} 
                    defaultValue={info.Cur_OfficialRate}
                    onChange={handleChange}
                />
            </CardContent>
        </Card>
    )
}

export default HeaderCard;