import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  color: var(--primaryColor);

`;

export const LogoImage = styled.img`
  width: 180px;
  height: 180px;
  margin: 20px 18px 16px;
  object-fit: contain;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  button {
    margin: 10px;
  }
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const SignUpButtonContainer = styled.div`
  width: 90vw;
  max-width: 450px;
  font-size: 16px;
  text-align: center;
`;
