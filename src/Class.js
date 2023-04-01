import React, { Component } from 'react';
import Accordionclass from './AccordionClass';


class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      visibleCountries: [],
      hiddenCountries: []
    };
    
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => response.json())
      .then(data => {
        this.setState({
          countries: data.data,
          visibleCountries: data.data.slice(0, 5),
          hiddenCountries: data.data.slice(5)
        });
      })
      .catch(error => console.error(error));
  }

  handleShowMore() {
    this.setState(prevState => ({
      visibleCountries: [...prevState.visibleCountries, ...prevState.hiddenCountries],
      hiddenCountries: []
    }));
  }

  render() {
    const { visibleCountries, hiddenCountries } = this.state;
    return (
      <div>
        <h1>Accordion for countries</h1>
        <div className="accordion">
          {visibleCountries.map((country, index) => (
            <div key={index}>
              <Accordionclass title={country.name} content={country.capital} />
            </div>
          ))}
          {hiddenCountries.length > 0 && (
            <div className="accordion-item">
              <div className="accordion-title" onClick={this.handleShowMore}>
                <div>Show more</div>
                <div>+</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Class;
