/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class cityList extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map((city) => {
          return (
            <p
              className="list-group-item"
              key={city.slug}
            >
              {city.name}
            </p>);
        })}
      </div>
    );
  }
}
