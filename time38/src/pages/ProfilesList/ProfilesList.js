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
                <span>Eduardo Lopes</span>
                <span>Area de atuação: TI - Desenvolvimento de Software</span>
                <span>Contato: eduardos@email.com</span>
                <span>Se identifica com o(s) grupo(s):LGBTQA+ </span>
              </ItemList>
            </ul>
       <ul key='2'>
              <ItemList>
                <span><Avatar githubHandle="CarlaLima" round="50px"/></span>
                <span>Carla Lima</span>
                <span>Area de atuação: Recursos Humanos</span>
                <span>Contato: carlalimarh@email.com</span>
                <span>Se identifica com o(s) grupo(s):LGBTQA+, PCD </span>
              </ItemList>
         </ul>
          <ul key='3'>
                  <ItemList>
                  <span><Avatar githubHandle="AlexSilva" round="50px"/></span>
                  <span>Alex Silva</span>
                  <span>Area de atuação: Marketing Digital</span>
                  <span>Contato: alexsilvamrtk@email.com</span>
                  <span>Se identifica com o(s) grupo(s):PCD, Petra</span>
                 </ItemList>
           </ul>
       <ul key='4'>
                  <ItemList>
                  <span><Avatar githubHandle="CarenMedeiros" round="50px"/></span>
                  <span>Caren Medeiros"</span>
                  <span>Area de atuação:TI - Administradora de Banco de dados</span>
                  <span>Contato:carenMedeirosadm@email.com</span>
                  <span>Se identifica com o(s) grupo(s):Indigine</span>
                 </ItemList>
          </ul>
    
      </CardList>
    </Container>
  );
};

export default ProfilesList;
