import cities from '../../db/cities';

export function loadCities() {
  return {
    type: 'LOAD_CITIES',
    payload: cities
  };
}

export function setActiveCity(cityId) {
  const activeCity = cities.find((city) => {
    return city.slug === cityId;
  });

  return {
    type: 'SET_ACTIVE_CITY',
    payload: activeCity
  };
}
