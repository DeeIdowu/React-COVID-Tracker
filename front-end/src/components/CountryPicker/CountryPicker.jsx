import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api/index';
import styles from './CountryPicker.module.css';

const CountryPicker = () =>{
    const [fetchAPI, setFetchedCountries] = useState([]);
    useEffect(() => {
       const fetchAPI = async() =>{
           setFetchedCountries(await fetchCountries())
       }
       fetchAPI();
    }, [setFetchedCountries])
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;