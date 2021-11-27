import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 3rem;
  height: 100px;

  h1 { 
    color: #12252F;
    font-size: 1.2rem;
 
    font-family: 'Roboto';
    @media (max-width: 600px){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 1rem;
    }
  }
  .calendar {
    display: flex;
    align-items: center;

    width: auto;

    padding: 0.5rem 0.7rem;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 5px;
    p {
      margin: 0;
      font-size: 0.9rem;
      margin-right: 8px;
      font-weight: 500;
      color: #12252F;

    }
    @media (max-width: 600px){
        display: none;
    }
  }
`; 

export const NavBar = styled.nav`
  display: flex;  
  
  border-bottom: 1.5px solid #D6D6D6;
  padding: 0.5rem 0rem -1px 0rem;

  @media (max-width: 600px){
        display: none;
    }
  a {
    color: #12252F;
    font-weight: 500;
    &:hover {
      color: #254E63;
    }
  }


/*   a:not(last-child){
    margin-right: 2rem;
  } */
  
`; 

type PropsButtonNav = {
  active: boolean;
}
export const ButtonNav = styled.div<PropsButtonNav>`
  
  margin-top: 10px;
  padding: 0.5rem 1rem 7px 1rem;
  margin: 0;
  border-bottom:  ${props => 
      props.active ? '3px solid #0093DD': 'none'
     
  };

`; 

