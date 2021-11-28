import styled from "styled-components";

type PropsContainer = {
    active: boolean;
}
export const Container = styled.button<PropsContainer>`
    border: 0;
    position: absolute;
    bottom: 30%;
    left: 96.5%;


    width: 40px;
    height: 40px;
    border-radius: 50%;

    background: #0093DD;

    p { 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 0;
        color: #fff;
        font-weight: bold;
    }

    @media (max-width: 600px){
        bottom: 37%;
        left: 94%;
    }
`; 