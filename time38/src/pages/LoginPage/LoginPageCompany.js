import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import {
  ScreenContainer,
  InputsContainer,
  SignUpButtonContainer,
  LogoImage,
} from './styled';
import { Button, TextField, Typography } from '@material-ui/core';
import { goToJobs } from '../../routes/coordinator';
import { goToProfilesList } from '../../routes/coordinator';
import { goToSingUpUser } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logo.jpeg';
import Footer from '../../components/Footer';

const LoginPageCompany = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <Typography variant="subtitle1" gutterBottom>
        Entrar
      </Typography>
      <InputsContainer>
        <form>
          <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'email'}
            placeholder={'email@email.com'}
          />
          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClickShowPassword}
                    onMouseDown={onMouseDownPassword}
                  ></IconButton>
                </InputAdornment>
              ),
            }}
            label={'Senha'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={showPassword ? 'text' : 'password'}
            placeholder={'Mínimo de 6 caracteres'}
            inputProps={{ pattern: '^.{6,}' }}
          />

          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            onClick={() => goToProfilesList(navigate)}
          >
            Login
          </Button>
        </form>
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSingUpUser(navigate)}
          type={'submit'}
          fullWidth
          variant={'text'}
          color={'primary'}
        >
          Não possui cadastro? Clique aqui.
        </Button>
      </SignUpButtonContainer>
      <Footer/>
    </ScreenContainer>
  );
};

export default LoginPageCompany;
