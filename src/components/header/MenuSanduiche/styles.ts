import styled from "styled-components";
type PropsContent = {
    active: boolean;
}
type PropsContainer = {
    active: boolean;
}
export const Container = styled.div<PropsContainer>`

    display: none;
    position: ${props => props.active? 'fixed' : 'absolute'};
    top: ${props => props.active? '0px' : '15px'};
    left: ${props => props.active? '0px' : '20px'};
  
    z-index: 10000;
    bottom: 0;

    .teste {
        width: 300px;
        position: relative;
        top: 10px;
        left: 100px;
     
        height: 1000px;
        background: pink;
    }

    @media (max-width: 600px){
        display: flex;
    }
`; 


export const Content = styled.div<PropsContent>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 150%;
    padding: 15px 0;
    height: 100vh;
    background: ${props => props.active ? '#fff' : 'transparent'};
 
    /* height: 100vh; */
   > button {
        margin-right: 15px;
        border:none;
        background: transparent;

        svg {
            width: 25px; 
            height:25px;

        }
    }

    ul { 
    
        
        margin-top: 40px;
        width: 100%;
        font-family: 'Roboto';

        li { 
            list-style: none;

            &:nth-child(2) {
               
                background: #D6F3FF;
            }
        }
    }
    .calendar-mn {
        display: flex;
        align-items: center;

        width: auto;

        padding: 0.5rem 0.7rem;
        border: 1px solid #30557F;
        box-sizing: border-box;
        border-radius: 5px;
        margin-top: 15px;
        p {
            margin: 0;
            font-size: 0.9rem;
            margin-right: 8px;
            font-weight: 500;
            color: #12252F;

        }
    }

    .menu-open {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 235px;
        img {
            width:100px;
        }
    }
`; 

type PropsButtonNav = {
    active: boolean;
}
export const ButtonNav = styled.div<PropsButtonNav>`
    margin: 0;

  padding: 0.5rem 1rem 7px 1rem;

  background:  ${props => 
      props.active ? '#D6F3FF': 'none'
     
  };

    list-style: none;
    padding: 8px 10px;
    a {
               
        color: #30557F;
        font-weight: 500;
        &:hover {
            color: #254E63;
            opacity: 0.6;
            }
        }

`; 

