import React from 'react';
import styled from "styled-components"

const CardsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  // background-color: red;
`

const CardInfoContainer = styled.div `
  // display: flex;
  // flex-direction: column;
  align-items: flex-start;
  width: 200px;
  // background-color: blue;
`


const JobsPage = () => {
  return (
    <div>
      <h1>Vagas disponíveis</h1>
      <CardsContainer>
        <CardInfoContainer>
            <h1>PREMIUM</h1>
            <h3>titulo: 'Full-stack Developer'</h3>
            <h4>contato: 'premium@premium.com'</h4>
            <p>descrição: 'Estamos buscando uma pessoa motivada e proativa que tenha experiência em Angular e Firebase. Se você também tiver experiência em Node.js pode sair na frente, mas não é um pré-requisito. Você é livre para trabalhar e se organizar da forma que preferir. Nós realizamos reuniões semanais de acompanhamento para organização da semana de trabalho.</p>
        </CardInfoContainer>
        <CardInfoContainer>
            <h1>empresa: 'GEDUCA'</h1>
            <h3>titulo: 'React Frontend Developer'</h3>
            <h4>contato: 'geduca@geduca.com',</h4>
            <p>'Estamos em busca de profissionais para atuar como pessoa Desenvolvedora Front-end - Pleno! Aqui, você vai desempenhar o papel de Desenvolvedor(a) Front-end, atuando em projetos desafiadores, gerando valor e resultado para os nossos clientes e colegas!'</p>
        </CardInfoContainer>
        <CardInfoContainer>
            <h1>empresa: 'AP Studio',</h1>
            <h3>titulo: 'Developer',</h3>
            <h4>contato: 'apstudio@apstudio.com'</h4>
            <p>descricao: 'Full Stack JavaScript, TypeScript, GraphQL, Node.js, 5+ years of experience', </p>
        </CardInfoContainer>
        <CardInfoContainer>
            <h1>empresa: MPJ Empreendimentos</h1>
            <h3>titulo: 'Desenvolvedor de back end'</h3>
            <h4>contato: 'mpj@mpj.com'</h4>
            <p>descricao: '-Desenvolvimento de melhorias ou novas funcionalidades nos serviços da plataforma bancária; Validação e revisão de código (code review/pair programming)'</p>
        </CardInfoContainer>
      </CardsContainer>
    </div>
  );
};

export default JobsPage;
