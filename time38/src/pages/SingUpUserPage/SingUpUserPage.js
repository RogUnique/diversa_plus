// import React from 'react';

// const SingUpUserPage = () => {
//   return (
//     <div>
//       <h1>Cadastro Usuário</h1>
//       Nome
//       telefone
//       e-mail
//       Cidade / estado

//       Grupo: pretos, pcd, LGBTQI+, índigena

//       links: Linkedin, portfólio, outros

//       Qual preferência de contato? telefone, e-mail, whatsApp

//       Como prefere ser chamado?

//       Breve descrição e objetivo

//       Upload de CV e foto
//     </div>
//   );
// };

// export default SingUpUserPage;
import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import { ScreenContainer, InputsContainer, ArrowBackContainer } from './styled';
import { Button, TextField, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { goToJobs } from '../../routes/coordinator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FaAngleLeft } from "react-icons/fa";
import { goToLogin } from '../../routes/coordinator';

const SignUpUserPage = () => {
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    cpf: '',
    telefone: '',
    cidade: '',
    estado: '',
    password: '',
    links: '',
    chooseName: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  
  return (
    <ScreenContainer>
      <h1>logo</h1>

      <Typography variant="subtitle1" gutterBottom>
        Cadastrar
      </Typography>

      <InputsContainer>
        <form>
          <TextField
            name={'name'}
            value={form.name}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            placeholder={'Nome e sobrenome'}
          />

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
            name={'cpf'}
            value={form.cpf}
            onChange={onChange}
            label={'CPF'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'number'}
            placeholder={'000.000.000-00 (apenas números)'}
            inputProps={{ pattern: '^d{3}.d{3}.d{3}-d{2}$' }}
          />

          <TextField
            name={'telefone'}
            value={form.telefone}
            onChange={onChange}
            label={'telefone'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'number'}
            placeholder={'(00)0-0000-0000 (apenas números)'}
          />

          <TextField
            name={'cidade'}
            value={form.cidade}
            onChange={onChange}
            label={'cidade'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            placeholder={'cidade'}
          />

          <TextField
            name={'estado'}
            value={form.estado}
            onChange={onChange}
            label={'estado'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            placeholder={'estado'}
          />

          <FormControl variant="filled">
            <InputLabel id="grupo" fullWidth margin={'normal'}>
              Grupo
            </InputLabel>
            <Select labelId="Grupo" id="grupo">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Preto</MenuItem>
              <MenuItem value={20}>LGBTQI+</MenuItem>
              <MenuItem value={30}>Indigena</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name={'links'}
            value={form.links}
            onChange={onChange}
            label={'links'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            placeholder={'Linkedin, portfólio, outros'}
          />

          <TextField
            name={'Como prefere ser chamado?'}
            value={form.chooseName}
            onChange={onChange}
            label={'Como prefere ser chamado'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            placeholder={'Como prefere ser chamado?'}
          />

          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={showPassword ? 'text' : 'password'}
            placeholder={'Mínimo de 6 caracteres'}
            inputProps={{ pattern: '^.{6,}' }}
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
          />

          <TextField
            name={'confirm_password'}
            value={form.password}
            onChange={onChange}
            label={'Confirmar'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={showPassword ? 'text' : 'password'}
            placeholder={'Confirme a senha anterior'}
            inputProps={{ pattern: '^.{6,}' }}
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
          />

          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            padding={10}
            onClick={() => {
              alert('cadastro efetuado');
              goToJobs(navigate);
            }}
          >
            {isLoading ? (
              <CircularProgress color={'inherit'} size={24} />
            ) : (
              <>Criar</>
            )}
          </Button>
        </form>
      </InputsContainer>

      <ArrowBackContainer>
        <IconButton
          onClick={() => goToLogin(navigate)}
          size="larger"
          type="submit"
          aria-label="ArrowBackIos"
        >
          <FaAngleLeft/>
        </IconButton>
      </ArrowBackContainer>
    </ScreenContainer>
  );
};

export default SignUpUserPage;
