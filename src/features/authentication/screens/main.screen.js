import {
  AuthButton,
  ScreenBG,
  ScreenBGOverlay,
  ScreenContantWrapper,
} from '../components/authentication.style';
import React, { useContext } from 'react';

import { ActivityIndicator } from 'react-native';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { Spacer } from '../../../components/spacer/spacer.component';

export const MainScreen = ({ navigation }) => {
  const { initialLoading } = useContext(AuthenticationContext);
  const goTo = (path) => () => {
    navigation.navigate(path);
  };
  return (
    <SafeArea>
      <ScreenBG>
        <ScreenBGOverlay>
          {initialLoading ? (
            <ActivityIndicator />
          ) : (
            <ScreenContantWrapper>
              <AuthButton icon="lock-open" onPress={goTo('LogIn')}>
                Log IN
              </AuthButton>
              <Spacer position="top" size="medium">
                <AuthButton icon="account-plus" onPress={goTo('Register')}>
                  Register
                </AuthButton>
              </Spacer>
            </ScreenContantWrapper>
          )}
        </ScreenBGOverlay>
      </ScreenBG>
    </SafeArea>
  );
};
