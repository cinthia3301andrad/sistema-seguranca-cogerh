import { motion } from "framer-motion";
import styled from "styled-components";


export const ListLi = styled.li`

    padding: 1rem 2rem;
    margin-bottom: 15px;
    background: #F5F6FA;
    border-radius: 12px;
    list-style: none;

    .infos-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      header {
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
          font-size: 1rem;
          margin: 0;
          margin-left: 15px;
        }
        p {
          font-size: 0.8rem;
          margin: 0;
          margin-left: 1.5rem;
        }
      
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;
    }
  
`


export const Details = styled(motion.div)`
 display: flex;
 flex-direction: column;

  background: #fff;

  padding: 1.5rem 3rem;
  min-height: 250px;
  width: 100%;


  margin-top: 25px;

  .infos {
    width: 100%;
  }



  h2 {
    width: 100%;
    font-family: 'Poppins';
    color: #4D4F6C;
    font-size: 1.4rem;
    margin-bottom: 10px;
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
    align-items: center;
    justify-content: flex-end;
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
