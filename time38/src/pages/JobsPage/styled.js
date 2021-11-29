import styled from "styled-components";


export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: var(--primaryColor)
`;

export const CardList = styled.ul`
  margin-top: 35px;
  row-gap: 15px;
  column-gap: 20px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;
  @media (max-width: 945px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Button = styled.button`
  background: rgb(0,19,255);
  color: #f5f5f5;
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  font-family: "Roboto Slab";
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  :hover {
    border: 2px solid var(--azul-claro);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  :active {
    background: var(--azul-claro);
    transform: translateY(2px);
  }
`;

export const Card = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1 solid ;

  strong {
    font-size: 16px;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }
  span {
    padding: 12px;
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;