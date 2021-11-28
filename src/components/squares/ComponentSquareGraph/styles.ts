import styled from "styled-components";

export const Container = styled.div`
  background: white;
  text-align: center;

  margin-top: 1rem;

  padding: 1.2rem;
  border-top: .5rem solid var(--blue-500);
  border-radius: 1.2rem;
  width: 100%;
  border-radius: 12px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 230px;

> div {
  width: 100% !important;

  > div {
    width: 100% !important;
    canvas {
    width: 100% !important;
  }
  }
}
 
  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--blue);
    margin-bottom: 15px;
  }

  img {
    max-width: 200px;
  }
  @media (max-width: 600px){
        h2 {
        font-size: 1.2rem;
      
       }
    }

`; 