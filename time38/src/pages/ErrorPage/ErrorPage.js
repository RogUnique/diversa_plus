import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorPageContainer } from "./styled";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Footer from "../../components/Footer";
import { goToJobs } from "../../routes/coordinator";


const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ErrorPageContainer>
      <Typography
        color={"neutral"}
        variant={"h1"}
        align={"center"}
        gutterBottom={true}
      >
        <strong>Ops!</strong>
      </Typography>
      <Typography
        color={"neutral"}
        variant={"overline"}
        align={"center"}
        gutterBottom={true}
      >
        Página não encontrada!
      </Typography>
      <Typography
        color={"neutral"}
        variant={"body1"}
        align={"center"}
        gutterBottom={true}
      >
        Parece que houve um erro com a página procurada. É possível que a página
        tenha sido removida ou o endereço não exista.
      </Typography>
      <div>
        <Button
          fullWidth
          variant={"contained"}
          color={"primary"}
          onClick={() => goToJobs(navigate)}
        >
          Voltar para a página de vagas
        </Button>
      </div>
      <Footer />
    </ErrorPageContainer>
  );
};

export default ErrorPage;
