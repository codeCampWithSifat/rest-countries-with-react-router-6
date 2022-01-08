import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    console.log(props.country)
    const {name ,flag , capital , region , population,alpha2Code} = props.country;

    const navigate = useNavigate();
    const handleClick = (alpha2Code) => {
        const url = `/country/${alpha2Code}`
        navigate(url)
    }

    return (
        <div>
            <div className="country_style">
            <h3>Name : {name}</h3>
            <img src={flag} alt="" />
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
            <p><small>Population : {population}</small></p>
            <Link to ={`/country/${alpha2Code}`}>Show Country Detail {alpha2Code}</Link> <br /> <br />
            <button onClick={() => handleClick(alpha2Code)}>Show Country Info</button>
            </div>
        </div>
    );
};

export default Country;