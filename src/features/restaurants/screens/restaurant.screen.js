import { ActivityIndicator, Colors, Searchbar } from 'react-native-paper';
import React, { useContext } from 'react';

import { FlatList } from 'react-native';
import { RestaurantCardInfo } from '../components/restaurant-card.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled(FlatList).attrs({
	contentContainerStyle: { paddingLeft: 16, paddingRight: 16 },
})``;

const LoadingContainer = styled(ActivityIndicator)`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 1;
`;

export const RestaurantScreen = () => {
	const { restaurants, loading, error } = useContext(RestaurantContext);
	const renderItem = ({ item }) => (
		<Spacer position={'bottom'} size={'medium'}>
			<RestaurantCardInfo restaurant={item} />
		</Spacer>
	);
	const keyExtractor = (item) => item.name;

	return (
		<SafeArea>
			{loading && (
				<LoadingContainer>
					<ActivityIndicator animating={true} color={Colors.red800} />
				</LoadingContainer>
			)}
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantListContainer
				data={restaurants}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
			/>
		</SafeArea>
	);
};
