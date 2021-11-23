import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

`; 

export const Main = styled.div`

  height: 100vh;
  max-width: 1600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .colunas {
    display: flex;
    justify-content: center;
    align-items: center;

    .coluna {
      margin-right: 1rem;
    }

    .two {
      width: 400px;
    }
  }
`; 