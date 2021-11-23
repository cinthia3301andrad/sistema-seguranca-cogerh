import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3rem;
  height: 100px;

  h1 { 
    color: #12252F;

    font-size: 1.5rem;
    font-family: Roboto;
  }
  .calendar {
    display: flex;
    align-items: center;


    padding: 0.5rem 0.7rem;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 5px;
    p {
      font-size: 0.9rem;
      margin-right: 8px;
      font-weight: 500;
      color: #12252F;

    }
  }
`; 

export const NavBar = styled.nav`
  
  border-bottom: 2px solid #D6D6D6;
  padding: 0.5rem 0 0.5rem 1rem;
  a {
    color: #12252F;
    font-weight: 500;
  }

  a:not(last-child){
    margin-right: 2rem;
  }
  
`; 