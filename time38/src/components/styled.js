import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-flow: row nowrap;
  .div1 {
    background-color: var(--red);
    min-width: 16.666666%;
  }
  .div2 {
    background-color: var(--orange);
    min-width: 16.666666%;
  }
  .div3 {
    background-color: var(--yellow);
    min-width: 16.666666%;
  }
  .div4 {
    background-color: var(--green);
    min-width: 16.666666%;
  }
  .div5 {
    background-color: var(--blue);
    min-width: 16.666666%;
  }
  .div6 {
    background-color: var(--purple);
    min-width: 16.666666%;
  }
`;
export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
