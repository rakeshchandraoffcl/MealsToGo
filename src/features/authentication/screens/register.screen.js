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

export const RegisterScreen = ({ navigation }) => {
  const password_ref = useRef();
  const password_repeat_ref = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { onRegister, registerError, rgisterLoading } = useContext(AuthenticationContext);

  const goTo = (path) => () => {
    navigation.navigate(path);
  };

  const onSubmit = () => {
    if (!email || !password || !repeatPassword) return;
    onRegister(email, password, repeatPassword);
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
                onSubmitEditing={() => password_repeat_ref.current.focus()}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </Spacer>
            <Spacer size="medium">
              <Input
                label="Repeat Password"
                secureTextEntry={true}
                ref={password_repeat_ref}
                value={repeatPassword}
                onChangeText={(text) => setRepeatPassword(text)}
              />
            </Spacer>
            {registerError && (
              <Spacer size="small">
                <Text variant={'error'}>{registerError}</Text>
              </Spacer>
            )}
            <Spacer size="medium">
              <AuthButton
                icon="lock-open"
                loading={rgisterLoading}
                disabled={rgisterLoading}
                onPress={onSubmit}
              >
                Register
              </AuthButton>
            </Spacer>
          </LoginContantWrapper>
          <Button onPress={goTo('LogIn')}>Log In</Button>
        </ScreenBGOverlay>
      </ScreenBG>
    </SafeArea>
  );
};
