import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { RestaurantCardInfo } from '../components/restaurant-card.component';

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantCardInfo restaurant={restaurant} />
      <ScrollView>
        <List.AccordionGroup>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            id="1"
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            id="2"
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            id="3"
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            id="4"
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.AccordionGroup>
      </ScrollView>
    </SafeArea>
  );
};
