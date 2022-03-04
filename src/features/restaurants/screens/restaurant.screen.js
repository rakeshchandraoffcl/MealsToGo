import { ActivityIndicator, Colors } from 'react-native-paper';
import React, { useContext, useState } from 'react';

import { FadeInView } from '../../../components/animation/fading.animation';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantCardInfo } from '../components/restaurant-card.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { RestaurantFavouritesBar } from '../../../components/favourites/favourite-bar.component';
import { RestaurantListContainer } from '../components/restaurant-card.styles';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { SearchRestaurant } from '../components/search-restaurant.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

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
        <FadeInView>
          <RestaurantCardInfo restaurant={item} />
        </FadeInView>
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
