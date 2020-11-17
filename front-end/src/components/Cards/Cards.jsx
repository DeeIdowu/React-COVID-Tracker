import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) =>{
    console.log(confirmed)
    if(!confirmed){
        return 'Loading...'
    }
    

    return(
        <div className={styles.container}>
          <Grid spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            seperator=","/>
                    </Typography>
                    <Typography color="textSecondary">
                       {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                        No. of Active COVID-19 Cases:
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                    <Typography variant="h5">
                        REAL DATA
                    </Typography>
                    <Typography color="textSecondary">
                        REAL DATE
                    </Typography>
                    <Typography variant="body2">
                        No. of Recoveries from COVID-19:
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="h5">
                        REAL DATA
                    </Typography>
                    <Typography color="textSecondary">
                        REAL DATE
                    </Typography>
                    <Typography variant="body2">
                        No. of Deaths caused by COVID-19:
                    </Typography>
                </CardContent>
            </Grid>
          </Grid>
        </div>
    )
}

export default Cards;