import React, { useState, useEffect } from 'react';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';

import { fetchCountryData } from '../../api';
import styles from './CountryPicker.module.css'; 


const CountryPicker = ({ handleCountryChange }) => {


  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchCountryData();
      setCountryData(data)
    })();

  }, [])

  return (
    <FormControl className={styles.formcontrol}>
      <InputLabel id='select'>Global</InputLabel>
      <Select labelId='select' defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <MenuItem value=""><em>Global</em></MenuItem>
        {countryData.map((country, index) => <MenuItem key={index} value={country}>{country}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default CountryPicker; 