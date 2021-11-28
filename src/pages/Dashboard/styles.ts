import styled from "styled-components";

export const Container = styled.div`
  height: auto;

  li { 
    list-style: none;
    
  }
  .alert {

  
      &:nth-child(2) {
        margin-top: 20px;
      }}

`; 

export const Main = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  overflow: hidden;

  .colunas {
    display: flex;
    flex-direction: column;

    width: 80%;
    max-width: 1000px;
    
  }
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 30px;
    width: 100%;
    
    gap: 1rem;
  
  }
  .coluna-1, .coluna-2, .coluna-3 { 
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .coluna-1 { 
    max-width: 250px;
  }
  .coluna-2 { 
    max-width: 400px;
    flex: 2;
  }
  .coluna-3 { 
    min-width: 315px;
    
  }
  @media (max-width: 600px){
    .coluna-1, .coluna-2, .coluna-3 { 
      width: 95%; 
    }
  }
`; 