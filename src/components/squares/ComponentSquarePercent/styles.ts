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
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--blue);
  }

  .g2-html-annotation {
    white-space: break-spaces !important;
  }
`; 