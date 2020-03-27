/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class city extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="active-city">
        <h3>{this.props.city.name}</h3>
        <p>{this.props.city.address}</p>
      </div>
    );
  }
}
