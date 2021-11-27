import styled from "styled-components";

export const Container = styled.div`

    header { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0 7px 0;
        border-bottom: 2px solid #D6D6D6;

        h1{ 
            font-size: 1.5rem;
            font-weight: 500;
            color: #224759;

            margin-bottom: 7px;
        }

        p {
            font-size: 0.9rem;
        }
    }
`; 

export const ContentForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 19px;
  
    textarea:focus, input:focus, select:focus {
    
        border: 2px solid #D2D2D2;
        outline: 0;
    } 

    .column {
        display: flex;
      

        > div {
           
            margin-right: 20px;
        }

        @media(max-width: 600px) {
            flex-direction: column;
            width: 100%;
            > div {

                margin: 15px 0;
            }
        }
    }

    label {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 500;
    }

    input , textarea {
        padding: 5px;

        margin-top: 15px;
        border: 1px solid #D6D6D6;
        border-radius: 0.25rem;
        width: 100%;
        height: 30px;

     
    }
    .textarea {
        width: 100%;
        display: flex;
        flex-direction: column;
         > textarea {
            height: 150px;
            resize: none;
         }
    }

    .input-radio {
   
     ul {
        display: flex;
        flex-direction: column;
     }

     li {
         display: flex;
         align-items: center;
         justify-content: start;
         list-style-type: none;

         margin-top: 10px;

         input {
            width: 15px;
            height:15px;

            margin: 0;
         }

         p {
             margin: 0 0 0 10px;
         }
      }
    }

    .enviar {
        border: 0;
        background: #0F5481;
        border-radius: 12px;

        width: 94px;
        height: 38px;
        color: #fff;
        font-weight: 600;
        font-size: 0.9rem;

        margin-top: 15px;
    }
`