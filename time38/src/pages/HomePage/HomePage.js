import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { goToLoginUser, goToLoginCompany } from '../../routes/coordinator';
import {
  ButtonContainer,
  DescriptionContainer,
  HomePageContainer,
} from './styled';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomePageContainer>
      <h1>Maiorise</h1>
      <DescriptionContainer>
        <p>
          Somos a Diversa + , focados em conectar pessoas pertencentes a grupos
          minoritários a oportunidades profissionais. Levamos esse nome pois
          sabemos que minoritarias são as chances dadas a estas pessoas, por
          isso, através da nossa plataforma criamos conexões entre estes
          individuos e as empresas que buscam aumentar a diversidade e
          consequentemente suas capacidades de crescimento. 
         </p> 
          <p>Conheça nossa  plataforma:</p>
      </DescriptionContainer>

      <ButtonContainer>
        <Button
          fullWidth
          variant={'contained'}
          color={'primary'}
          onClick={() => goToLoginUser(navigate)}
        >
          Usuário
        </Button>

        <Button
          fullWidth
          variant={'contained'}
          color={'primary'}
          onClick={() => goToLoginCompany(navigate)}
        >
          Empresa
        </Button>
      </ButtonContainer>
    </HomePageContainer>
  );
};

export default HomePage;
