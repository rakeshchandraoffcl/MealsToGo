import { Camera } from 'expo-camera';
import styled from 'styled-components/native';

export const AvatarWrapper = styled.View`
  align-items: center;
`;
export const FavouritesWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;
export const CameraWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

export const ExpoCamera = styled(Camera)`
  flex: 1;
`;
