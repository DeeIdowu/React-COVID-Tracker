import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css'

const Cards = ({confirmed, recovered, deaths, lastUpdate}) =>{
    return(
        <div className={styles.container}>
          <Grid spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h5">
                        {confirmed.value}
                    </Typography>
                    <Typography color="textSecondary">
                        REAL DATE
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