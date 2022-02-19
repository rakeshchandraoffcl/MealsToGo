import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const Address = styled.Text`
	color: ${(props) => props.theme.colors.ui.primary};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Info = styled.View`
	padding-top: ${(props) => props.theme.space[3]};
	padding-bottom: ${(props) => props.theme.space[3]};
`;
export const Ratings = styled.View`
	flex-direction: row;
`;
export const Section = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
	align-items: center;
`;
export const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
`;

export const RestaurantCard = styled(Card)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Icon = styled.Image`
	width: 15px;
	height: 15px;
`;
