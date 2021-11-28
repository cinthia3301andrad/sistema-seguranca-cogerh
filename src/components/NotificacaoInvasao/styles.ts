import styled from "styled-components";

import { motion } from "framer-motion";

export const Details = styled(motion.div)`
  display:'flex';
  flex-direction: column;
  padding: 1.5rem 3rem;
  min-height: 250px;
  width: 100%;
  background: rgba(200, 200, 233, 0.2);



  h2 {
    font-family: 'Poppins';
    color: #4D4F6C;
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  > div {
    display: flex;
    flex-direction: column;
   
  }
  p {
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
    color:  #575757;
    opacity: 0.9;
    margin-top: 0.5rem;
  }
  .relatar-ocorrencia { 
    display: flex;
    align-items: end;
    width: 100%;
  }
  button {
    border: none;
    background: rgba(182, 233, 254, 0.4);
    color: rgba(15, 84, 129, 0.99);
    font-family: 'Roboto Condensed', sans-serif;

    font-weight: 700;
    padding: 0.4rem;
    &:hover {
      color: #254E63;
      background: rgba(182, 233, 254, 0.2);
    }
  }
`

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 max-width: 700px;


  .content {  
    background: var(--dark);
    padding: 1.5rem;
    border-radius: 12px;
    width: 100%;
   
    height: 90px;

    display: flex;
    justify-content: space-between;

  }

  .right-comp {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h2 {
      font-size: 14px;
      color: white;
      b {
        color: var(--blue-200);
      }
    }

    button {
      margin-top: 5px;
      background: transparent;
      border: none;
      color: #FF9248;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  .left-comp {
    display: flex;
    align-items: center;

    svg {
      width: 42px;
      height: 42px;
    }
    h1 {
      color: white;
      font-size: 20px;
      padding-bottom: .2rem;
    }
    
    h2 {
      font-size: 14px;
      color: white;
      b {
        color: var(--blue-200);
      }
    }

    svg {
      color: #FF9248;
      font-size: 54px;
      margin-right: 1.2rem;
    }
  }

  @media (max-width: 630px){
    .content {  
      flex-direction: column;
      height: auto;
    }

    .right-comp {
      align-items: start;
      padding-left: 58px ;
      button {
        margin-left: 60% ;
      }
    }
    
    .text {
      h1, h2 {
        margin: 0;
      }
     
    }
    }
`; 

