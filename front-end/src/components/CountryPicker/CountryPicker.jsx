import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {countries} from '../../api/index';
import styles from './CountryPicker.module.css';

const CountryPicker = () =>{
    const [fetchCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
       const fetchCountries = async() =>{
           setFetchedCountries(await countries)
       }
       fetchCountries();
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