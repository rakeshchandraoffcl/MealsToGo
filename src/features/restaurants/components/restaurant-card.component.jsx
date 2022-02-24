import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import open from '../../../../assets/open';
import star from '../../../../assets/star';
import { Favourite } from '../../../components/favourites/favourite.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component';
import {
  Address,
  Icon,
  Info,
  Ratings,
  RestaurantCard,
  Section,
  SectionEnd,
} from './restaurant-card.styles';

export const RestaurantCardInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const iterable = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={3}>
      <Favourite restaurant={restaurant} />
      <Card.Cover source={{ uri: photos[0] }} />
      <Info>
        <Text variant={'label'}>{name}</Text>
        <Section>
          <Ratings>
            {iterable.map((_, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Ratings>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="caption" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}

            <Spacer position={'left'} size={'large'}>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position={'left'} size={'large'}>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

RestaurantCardInfo.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    isOpenNow: PropTypes.bool,
    rating: PropTypes.number,
    isClosedTemporarily: PropTypes.bool,
  }),
};
