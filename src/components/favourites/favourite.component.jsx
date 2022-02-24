import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavWrapper = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);

  const isFav = favourites.find((c) => c.placeId === restaurant.placeId);
  return (
    <FavWrapper onPress={() => (isFav ? removeFavourite(restaurant) : addFavourite(restaurant))}>
      <AntDesign name={isFav ? 'heart' : 'hearto'} color={isFav ? 'red' : 'white'} size={24} />
    </FavWrapper>
  );
};
