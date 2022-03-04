import { Platform, SafeAreaView, StatusBar } from 'react-native';

import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : 0};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
