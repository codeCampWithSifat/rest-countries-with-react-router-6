import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {alpha2Code} = useParams();
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${alpha2Code}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])

    const styleContainer = {
        textAlign : "center"
    }
    return (
        <div style={styleContainer}>
            <h2>This is the alpha2Code <strong>{alpha2Code}</strong> </h2>
            <h2>Name : {country.name}</h2>
            <img src={country.flag} alt="" />
            <p>Population : {country.population}</p>
            <p>Region : {country.region}</p>
            <h4>Area : {country.area}</h4>
            <h3>NativeName : {country.nativeName}</h3>
        </div>
    );
};

export default CountryDetail;