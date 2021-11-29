import React from "react";

import { Container, Button, CardList, Card } from "./styled";
import Footer from "../../components/Footer";

const JobsPage = () => {
  return (
    <Container>
      <CardList>
        <Card>
          <span>PREMIUM</span>
          <h3>Full-stack Developer</h3>
          <h4>
            <strong>Contato: </strong>premium@premium.com
          </h4>
          <p>
            <strong>Descrição: </strong> Estamos buscando uma pessoa motivada e
            proativa que tenha experiência em Angular e Firebase. Se você também
            tiver experiência em Node.js pode sair na frente, mas não é um
            pré-requisito. Você é livre para trabalhar e se organizar da forma
            que preferir. Nós realizamos reuniões semanais de acompanhamento
            para organização da semana de trabalho.
          </p>
          <Button>Aplicar</Button>
        </Card>
        <Card>
          <span>GEDUCA</span>
          <h3>React Frontend Developer</h3>
          <h4>
            <strong>Contato: </strong>geduca@geduca.com
          </h4>
          <p>
            <strong>Descrição: </strong> Estamos em busca de profissionais para
            atuar como pessoa Desenvolvedora Front-end - Pleno! Aqui, você vai
            desempenhar o papel de Desenvolvedor(a) Front-end, atuando em
            projetos desafiadores, gerando valor e resultado para os nossos
            clientes e colegas!
          </p>
          <Button>Aplicar</Button>
        </Card>

        <Card>
          <span>MPJ Empreendimentos</span>
          <h3>Desenvolvedor de back end</h3>
          <h4>
            <strong>Contato: </strong>mpj@mpj.com
          </h4>
          <p>
            <strong>Descrição: </strong> Desenvolvimento de melhorias ou novas
            funcionalidades nos serviços da plataforma bancária; Validação e
            revisão de código (code review/pair programming)
          </p>
          <Button>Aplicar</Button>
        </Card>
      </CardList>
      <Footer/>
    </Container>
  );
};

export default JobsPage;
