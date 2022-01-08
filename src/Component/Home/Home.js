import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'
const Home = () => {
    const [countries , setCountries] = useState([]);
    useEffect(() => {
      fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2 style ={{textAlign: "center"}}>Around 250 Countries</h2>
            <div className="countries_style">
            {
                countries.map(country =><Country key={country.alpha3Code} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Home;