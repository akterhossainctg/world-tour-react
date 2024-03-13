import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    console.log(country)
    const {name,flags, area,population,cca3} = country;
    const [visited,setVisited] = useState(false);
    const visitHandler = ()=>{
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited?'purple':'black'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area{area}</p>
            <p>Code:{cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Flags Adding</button>
            <br />
            <button onClick={visitHandler}>{visited? 'visited': 'going'}</button>
            {visited ? 'i have visited this country':'i want to visit'}
        </div>
    );
};

export default Country;