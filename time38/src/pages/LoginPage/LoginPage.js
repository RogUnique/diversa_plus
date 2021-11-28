import { Button } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPageContainer } from './styled';
import { goToJobs } from '../../routes/coordinator';
import { goToSingUpUser } from '../../routes/coordinator';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <p>usr</p>
      <p>senha</p>

      <div>
        <Button
          fullWidth
          variant={'contained'}
          color={'primary'}
          onClick={() => goToJobs(navigate)}
        >
          Login
        </Button>
      </div>
      <div>
        <Button
          fullWidth
          variant={'contained'}
          color={'primary'}
          onClick={() => goToSingUpUser(navigate)}
        >
          Cadastre-se
        </Button>
      </div>
    </LoginPageContainer>
  );
};

export default LoginPage;
