import { locations } from './locations.mock';

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];
    if (!location) {
      reject('Opps! location not found');
    }
    resolve(location);
  });
};

export const transformLocationData = (locationData) => {
  const results = locationData.results;
  const { geometry = {} } = results[0];
  const { lng, lat } = geometry.location;
  return { lng, lat, viewport: geometry.viewport };
};
