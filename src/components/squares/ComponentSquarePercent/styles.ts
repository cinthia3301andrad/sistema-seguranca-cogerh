import styled from "styled-components";

export const Container = styled.div`
  background: white;
  text-align: center;

  margin-bottom: 1rem;

  padding: 1.2rem;
  border-top: .5rem solid var(--blue-500);
  border-radius: 1.2rem;
  width: 100%;
  border-radius: 12px;
  height: 515px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--blue);
    margin-bottom: 0;
  }
  
  .g2-html-annotation {
    font-size: 18px !important;
    font-weight: bold !important;
    color: #1b5c87 !important;
  }
  
  p {
    font-size: 14px;
    color: var(--dark);
  }

  @media (max-width: 600px){
    height: 350px;
        h2 {
        font-size: 1.2rem;
      
      }
      p {
        font-size: 1rem;
  }
    }
`; 