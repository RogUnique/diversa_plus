import React from 'react';
import Avatar from 'react-avatar';

import {
  Container,
  Button,
  CardList,
  ItemList,
} from "./styled";

const ProfilesList = () => {
  return (
    <Container>
      <CardList>
      <ul key='1'>
              <ItemList>
                <span><Avatar githubHandle="RogUnique" round="50px"/></span>
                <span>Teste:</span>
                <span>Nível:</span>
              </ItemList>
            </ul>
            <ul key='1'>
              <ItemList>
                <span><Avatar name="Roger Lemos" round="50px"/></span>
                <span>Teste:</span>
                <span>Nível:</span>
              </ItemList>
            </ul>
      </CardList>
    </Container>
  );
};

export default ProfilesList;
