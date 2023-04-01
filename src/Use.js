import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';

const Use = () => {
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [hiddenCountries, setHiddenCountries] = useState([]);

  useEffect(() => {
      fetch('https://countriesnow.space/api/v0.1/countries/capital')
        .then(response => response.json())
        .then(data => setCountries(data.data))
        .catch(error => console.error(error));
  }, []);


  useEffect(() => {
    setVisibleCountries(countries.slice(0, 5)); // show the first 5 countries
    setHiddenCountries(countries.slice(5)); // hide the rest
  }, [countries]);


  const handleShowMore = () => {
    setVisibleCountries([...visibleCountries, ...hiddenCountries]); // add all hidden countries to visible list
    setHiddenCountries([]); // clear hidden countries
  };
 
  return (
    <div>
      <h1>Accordion for countries</h1>
      <div className="accordion">
      {visibleCountries.map(( country,index) => (
        <div key={index}>
          <Accordion title={country.name} content={country.capital}/>
        </div>

      ))}
        {hiddenCountries.length > 0 && (
          <div className="accordion-item">
            <div className="accordion-title" onClick={handleShowMore}>
              <div>Show more</div>
              <div>+</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Use;
