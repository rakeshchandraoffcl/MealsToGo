import {
  AuthButton,
  Input,
  LoginContantWrapper,
  ScreenBG,
  ScreenBGOverlay,
} from '../components/authentication.style';
import React, { useContext, useRef, useState } from 'react';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Button } from 'react-native-paper';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component';

export const LoginScreen = ({ navigation }) => {
  const password_ref = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error, loading } = useContext(AuthenticationContext);

  const goTo = (path) => () => {
    navigation.navigate(path);
  };

  const onSubmit = () => {
    if (!email || !password) return;

    onLogin(email, password);
  };

  return (
    <SafeArea>
      <ScreenBG>
        <ScreenBGOverlay>
          <LoginContantWrapper>
            <Input
              label="Email"
              keyboardType="email-address"
              onSubmitEditing={() => password_ref.current.focus()}
              blurOnSubmit={false}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Spacer size="medium">
              <Input
                label="Password"
                secureTextEntry={true}
                ref={password_ref}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </Spacer>
            {error && (
              <Spacer size="small">
                <Text variant={'error'}>{error}</Text>
              </Spacer>
            )}
            <Spacer size="medium">
              <AuthButton icon="lock-open" loading={loading} disabled={loading} onPress={onSubmit}>
                Log IN
              </AuthButton>
            </Spacer>
          </LoginContantWrapper>
          <Button onPress={goTo('Register')}>Sign up</Button>
        </ScreenBGOverlay>
      </ScreenBG>
    </SafeArea>
  );
};
