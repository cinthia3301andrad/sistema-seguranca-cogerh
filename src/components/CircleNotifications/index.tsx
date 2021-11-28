import { useState } from 'react'



import { Container } from './styles'

type PropsMenu = {
    qtd: number;
    onClick: () => void;
}
export function CircleNotifications({qtd, onClick}: PropsMenu){
    const[isOpen, setIsOpen] = useState(false)
    return (
        <Container  active={isOpen} onClick={onClick}>
            <p>+{qtd}</p>
        </Container>
       
    )
}