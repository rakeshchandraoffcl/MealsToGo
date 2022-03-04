import { Avatar, List } from 'react-native-paper';
import React, { useCallback, useContext, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { AvatarWrapper } from '../components/components.style';
import { SafeArea } from '../../../components/utility/safearea-view.component';
import { Text } from '../../../components/typography/typography.component';
import { TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export const SettingsHomeScreen = ({ navigation }) => {
  const { onSignOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const fetchPhoto = useCallback(async () => {
    try {
      const uri = await AsyncStorage.getItem(`photo-${user.uid}`);
      setPhoto(JSON.parse(uri));
    } catch (error) {
      setPhoto(null);
    }
  }, [user]);

  useFocusEffect(() => {
    fetchPhoto();
  });
  return (
    <SafeArea>
      <AvatarWrapper>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {photo ? (
            <Avatar.Image size={100} source={{ uri: photo }} />
          ) : (
            <Avatar.Icon size={100} icon="human" />
          )}
        </TouchableOpacity>
        <Text>{user.email}</Text>
      </AvatarWrapper>
      <List.Section>
        <List.Item
          title="Favourites"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => navigation.navigate('MyFavourites')}
        />
        <List.Item
          title="Signout"
          left={(props) => <List.Icon {...props} icon="lock" />}
          onPress={onSignOut}
        />
      </List.Section>
    </SafeArea>
  );
};
