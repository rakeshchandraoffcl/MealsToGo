import { Button, TextInput } from 'react-native-paper';

import styled from 'styled-components/native';
import { theme } from '../../../infrastructure/theme';

export const ScreenBG = styled.ImageBackground.attrs({
  source: require('../../../../assets/bg-home.jpg'),
})`
  flex: 1;
`;

export const ScreenBGOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
`;

export const ScreenContantWrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
`;
export const LoginContantWrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[3]};
  width: 90%;
  border-radius: 20px;
  max-width: 500px;
`;

export const AuthButton = styled(Button).attrs({
  mode: 'contained',
  color: theme.colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
`;

export const Input = styled(TextInput)`
  width: 100%;
`;
