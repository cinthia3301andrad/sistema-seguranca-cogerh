import styled from "styled-components";


type StatusProps = {
  status: string;
}
export const Container = styled.div<StatusProps>`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => 
      props.status === 'alert' ? '#FF9248' : 
      props.status === 'safe' ? '#45B16A' : '#D14E4E'
  };
  padding: 1.2rem;
  width: 100%;
  max-width: 200px;
  height: 200px;
  border-radius: 12px;

  h1, h2 {
    font-size: 1.3rem;
    font-family: Roboto;
    text-transform: uppercase;
    text-align: center;
  }

 h2 {
    font-size: 1rem;
  }

  svg {
    width: 50%;
    height: 45%;
    margin: 10px 0;
    display: flex;
  
  }

  svg, h1, h2 {
    color: white;
  }
`; 