// external imports
import React from 'react';

// internal imports
import CityList from '../containers/cityList';
import City from '../containers/city';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <City />
    </div>
  );
};

export default App;
