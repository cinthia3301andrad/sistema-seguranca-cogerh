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

`