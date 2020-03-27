/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class City extends Component {
  render() {
    const { activeCity } = this.props;
    return (
      <div className="active-city">
        <h3>{activeCity.name}</h3>
        <p>{activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
  };
}

export default connect(mapStateToProps, null)(City);
