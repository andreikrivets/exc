import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

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
    }
})

const CurrencyCard = ({ info }) => {
    const classes = useStyles();
    console.log(info.Cur_Name, info.Cur_OfficialRate);
    return (
        <Card className={classes.card}>
            <CardContent 
                classes={{
                    root: classes.cardContent
                }}
            >
                <Typography variant="body1" component="p">
                    {info.Cur_Name}
                </Typography>
                <Divider className={classes.divider} variant="middle" />                
                <Typography variant="body2" component="p" color="textSecondary">
                    {info.Cur_OfficialRate}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CurrencyCard