import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;


`; 

export const ListOcorrencias = styled.ul`
  height: 100%;

  width: 100%;



`; 

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 90vh;
    background: white;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;


  @media (max-width: 600px){
    margin: 3rem 1.6rem;
    }


    padding: 1.2rem;
    border-top: .5rem solid var(--blue-500);
    border-radius: 1.2rem;

    border-radius: 12px;

    h1 { 
      margin-bottom: 3rem;
        font-size: 1.2rem;
    }

`; 

