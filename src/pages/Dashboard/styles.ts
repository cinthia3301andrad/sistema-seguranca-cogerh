import styled from "styled-components";

export const Container = styled.div`
  height: 120vh;

  li { 
    list-style: none;
    
  }
  .alert {

  
      &:nth-child(2) {
        margin-top: 20px;
      }}
  /*   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
/* 
  .grid-header { grid-area: header; }
  .grid-coluna-1 { grid-area: left; }
  .grid-coluna-2 { grid-area: center; }
  .grid-coluna-3 { grid-area: right; } */

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
  /*   display: grid;
    justify-content: center;
    align-items: center;
    grid-template-areas:
    'header header header none'
    'left center center right';
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;  */

    
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
  .coluna-2 { 
    flex: 2;
  }
  .coluna-3 { 
    min-width: 290px;
    
  }
`; 