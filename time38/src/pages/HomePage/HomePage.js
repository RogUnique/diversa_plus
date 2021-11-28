import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { goToSingUpUser } from '../../routes/coordinator';
import { HomePageContainer } from './styled';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomePageContainer>
      <h1>LOGO</h1>
      <div>
        <Button
          fullWidth
          variant={'contained'}
          color={'primary'}
          onClick={() => goToSingUpUser(navigate)}
        >
          Usuário
        </Button>
      </div>
      <div>
        <Button
          fullWidth
          variant={'contained'}
          color={'primary'}
          onClick={() => goToSingUpUser(navigate)}
        >
          Empresa
        </Button>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
