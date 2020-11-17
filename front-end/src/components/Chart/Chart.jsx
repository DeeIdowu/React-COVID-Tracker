import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';

const Chart = () =>{
    const [dailyData, setDailyData] = useState({});

    useEffect(()=>{
        const fetchAPI = () =>{
            
        }
    })
    return(
        <h1>
        Welcome to Chart component
        </h1>
    )
}

export default Chart;