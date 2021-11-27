import { useState } from 'react'

import Logo from '../../../assets/logo.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


import { Container, Content,ButtonNav } from './styles'
import { BsCalendar3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type PropsMenu = {
    activeScreen: string;
}
export function MenuSanduiche({activeScreen}: PropsMenu){
    const[isOpen, setIsOpen] = useState(false)
    return (
        <Container  active={isOpen}>
    {/*         <div className="teste"></div> */}
            <Content active={isOpen}>
            <button onClick={()=> setIsOpen(!isOpen)}>
                {isOpen?  <AiOutlineClose/> : <AiOutlineMenu/> }
            </button>
         
            
           
                {
                    isOpen &&
                    <div className="menu-open">
                        <img src={Logo} alt="logo coghRH" />
                   
                        <ul>
                        <ButtonNav active={activeScreen ==="dashboard"? true : false}>
                            <Link to="/dashboard">
                            DASHBOARD
                            </Link>
                        </ButtonNav>
                        <ButtonNav active={activeScreen ==="relatorio"? true : false}>
                            <Link to="/relatorio">
                            RELATÓRIO
                            </Link>
                        </ButtonNav>
                    </ul>
                        <div className="calendar-mn">
                            <p>
                                {new Date().toLocaleDateString('pt-br')}
                            </p>
                            <BsCalendar3/>
                        </div>
                    </div>
                }
            </Content>
        </Container>
       
    )
}