import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/locations/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%;
`;
export const SearchMap = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchText, setSearchText] = useState(keyword);

  const onSubmit = () => {
    if (searchText) {
      search(searchText);
    }
  };

  useEffect(() => {
    setSearchText(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search Restaurant"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={onSubmit}
        icon={'map'}
      />
    </SearchContainer>
  );
};
