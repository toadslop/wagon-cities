/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadCities, setActiveCity } from '../actions';

class CityList extends Component {
  componentDidMount() {
    this.props.loadCities();
  }

  handleClick = (event) => {
    this.props.setActiveCity(event.target.id);
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map((city) => {
          return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <p
              className="list-group-item"
              key={city.slug}
              id={city.slug}
              onClick={this.handleClick}
            >
              {city.name}
            </p>);
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { loadCities, setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
