import React from "react";

import { Container, Button, CardList, ItemList } from "./styled";

const JobsPage = () => {
  return (
    <Container>
      <CardList>
        <ul key="1">
          <ItemList>
            <h1>PREMIUM</h1>
            <h3>titulo: 'Full-stack Developer'</h3>
            <h4>contato: 'premium@premium.com'</h4>
            <p>
              descrição: 'Estamos buscando uma pessoa motivada e proativa que
              tenha experiência em Angular e Firebase. Se você também tiver
              experiência em Node.js pode sair na frente, mas não é um
              pré-requisito. Você é livre para trabalhar e se organizar da forma
              que preferir. Nós realizamos reuniões semanais de acompanhamento
              para organização da semana de trabalho.
            </p>
          </ItemList>
        </ul>
        <ul key="1">
          <ItemList>
            <h1>empresa: 'GEDUCA'</h1>
            <h3>titulo: 'React Frontend Developer'</h3>
            <h4>contato: 'geduca@geduca.com',</h4>
            <p>
              'Estamos em busca de profissionais para atuar como pessoa
              Desenvolvedora Front-end - Pleno! Aqui, você vai desempenhar o
              papel de Desenvolvedor(a) Front-end, atuando em projetos
              desafiadores, gerando valor e resultado para os nossos clientes e
              colegas!'
            </p>
            <Button>Deletar</Button>
          </ItemList>

          <ItemList>
            <h1>empresa: MPJ Empreendimentos</h1>
            <h3>titulo: 'Desenvolvedor de back end'</h3>
            <h4>contato: 'mpj@mpj.com'</h4>
            <p>
              descricao: '-Desenvolvimento de melhorias ou novas funcionalidades
              nos serviços da plataforma bancária; Validação e revisão de código
              (code review/pair programming)'
            </p>
            <Button>Deletar</Button>
          </ItemList>
        </ul>
      </CardList>
    </Container>
  );
};

export default JobsPage;
