import React from 'react';

import {
  Container,
  Button,
  CardList,
  ItemList,
} from "./styled";

const JobsPage = () => {
  return (
    <Container>
      <CardList>
      <ul key='1'>
              <ItemList>
                <span>Teste:</span>
                <span>Nível:</span>
              </ItemList>
            </ul>
            <ul key='1'>
              <ItemList>
                <span>Teste:</span>
                <span>Nível:</span>
                <Button >Deletar</Button>
              </ItemList>
            </ul>
      </CardList>
    </Container>
  );
};

export default JobsPage;