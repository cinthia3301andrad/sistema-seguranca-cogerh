import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles'

type PropsMenu = {
    qtd: number;
}
export function CircleNotifications({qtd}: PropsMenu){

    const navigate = useNavigate();
    function handleClick() {
        navigate("/ocorrencias");
    }

    const[isOpen,] = useState(false)
    return (
        <Container  active={isOpen} onClick={handleClick} >
            <p>+{qtd}</p>
        </Container>
       
    )
}