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
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h1 {
    font-size: 3rem;
    padding-top: 1.2rem
  }

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
  }

  h1, h2 {
    color: var(--blue);
  }
`; 