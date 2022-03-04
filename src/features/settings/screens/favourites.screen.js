import React, { useContext } from 'react';

import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { FavouritesWrapper } from '../components/components.style';
import { RestaurantCardInfo } from '../../restaurants/components/restaurant-card.component';
import { RestaurantListContainer } from '../../restaurants/components/restaurant-card.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { TouchableOpacity } from 'react-native';

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

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
    <FavouritesWrapper>
      <RestaurantListContainer
        data={favourites}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </FavouritesWrapper>
  );
};
