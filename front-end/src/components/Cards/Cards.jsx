import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) =>{
    console.log(confirmed)
    if(!confirmed){
        return 'Loading...'
    }
    

    return(
        <div className={styles.container}>
          <Grid spacing={3} justify="center">
            <Grid item component={Card} className={cx(styles.test)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                     <Typography variant="body2">
                        No. of Active COVID-19 Cases:
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
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                     <Typography variant="body2">
                        No. of Recoveries from COVID-19:
                    </Typography>
                   <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            seperator=","/>
                    </Typography>
                   <Typography color="textSecondary">
                       {new Date(lastUpdate).toDateString()}
                    </Typography>
                   
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="body2">
                        No. of Deaths caused by COVID-19:
                    </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            seperator=","/>
                    </Typography>
                    <Typography color="textSecondary">
                     {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Grid>
          </Grid>
        </div>
    )
}

export default Cards;