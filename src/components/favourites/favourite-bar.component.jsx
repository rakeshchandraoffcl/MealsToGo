import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/typography.component';

const FavWrapper = styled.View`
  padding: 10px;
`;

export const RestaurantFavouritesBar = ({ restaurants }) => {
  console.log(restaurants);
  return (
    <FavWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map((c) => (
          <Spacer position="left" size="small" key={c.name}>
            <CompactRestaurantInfo restaurant={c} />
          </Spacer>
        ))}
      </ScrollView>
    </FavWrapper>
  );
};
