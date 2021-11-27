import { createGlobalStyle } from "styled-components";
import 'antd/dist/antd.css';
export const GlobalStyle = createGlobalStyle`
:root{
    --background: #EBF7FD;
    
    --blue: #0F5481;
    --blue-500: #0093DD;
    --blue-200: #B6E9FE;

    --dark: #12252F;
    --dark-500: #283B43;
    --green: #33CC95;
    --red: #E52e54;

    --text-body: #969cb3;

    --shape: #FFFFFF
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
/*   1 REM é o tamanho da font-size da pagina */
    html {
      @media(max-width: 1080px) {
        font-size: 93.75%; /* 15px */
      }  
      @media(max-width: 720px) {
        font-size: 87.5%; /* 14px */
      }  
    }
    body {
      background: rgb(238,247,255);
        background: linear-gradient(177deg, rgba(238,247,255,1) 0%, rgba(206,235,250,1) 100%); 
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
    a { 
      text-decoration: none;
    }
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
    button {
      cursor: pointer;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .react-modal-overlay {
      display: flex;
      align-items:center;
      justify-content: center;

      background: rgba(235, 247, 253, 0.9);
      z-index: 100000;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
    .react-modal-content {
      width:90% ;
      max-width: 725px;
   
      background: #fff;
      padding: 3rem;
      position: relative;
      border-radius: 1rem;
      box-shadow: 1px 1px 8px #E5E5E5;
    }
    .react-modal-close {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      border: 2px solid #E5E5E5;
      width: 29px;
      height: 29px;
      background: transparent;

      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      
      padding: 0.5rem;
      transition: filter 0.3s;
      border: 0;
      &:hover {
        filter: brightness(0.7);
      }
  }
`;
