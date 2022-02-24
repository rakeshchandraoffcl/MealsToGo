import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantFavouritesBar } from '../../../components/favourites/favourite-bar.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { RestaurantCardInfo } from '../components/restaurant-card.component';
import { SearchRestaurant } from '../components/search-restaurant.component';

const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: { paddingLeft: 16, paddingRight: 16 },
})``;

const LoadingContainer = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [showFav, setShowFav] = useState(false);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('RestaurantDetails', { restaurant: item });
      }}
    >
      <Spacer position={'bottom'} size={'medium'}>
        <RestaurantCardInfo restaurant={item} />
      </Spacer>
    </TouchableOpacity>
  );
  const keyExtractor = (item) => item.name;

  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <SearchRestaurant showFav={showFav} toggleShowFav={() => setShowFav(!showFav)} />
      {!!showFav && <RestaurantFavouritesBar restaurants={favourites} />}
      <RestaurantListContainer
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeArea>
  );
};
