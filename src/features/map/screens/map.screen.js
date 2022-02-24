import React, { useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { LocationContext } from '../../../services/locations/location.context';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { MapCallout } from '../components/map-callout.component';
import { SearchMap } from '../components/search-map.component';

const Map = styled(MapView)`
  max-width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const { lng, lat, viewport } = location;

  const [latDelta, seLatdelta] = useState(0);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    seLatdelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <SafeArea>
      <SearchMap />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((c) => (
          <MapView.Marker
            key={c.name}
            title={c.name}
            coordinate={{
              latitude: c.geometry.location.lat,
              longitude: c.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() => {
                navigation.navigate('RestaurantDetails', { restaurant: c });
              }}
            >
              <MapCallout restaurant={c} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </SafeArea>
  );
};
