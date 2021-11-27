import { Link } from "react-router-dom";

 import { BsCalendar3 } from 'react-icons/bs'

import { Container, NavBar, ButtonNav } from "./styles";

interface HeaderProps {
  activeScreen: string;
}

export function Header({activeScreen}: HeaderProps){
  return (
      <Container>
        <h1>SISTEMA DE MONITORAMENTO</h1>
        <NavBar>
          <ButtonNav active={activeScreen ==="dashboard"? true : false}>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </ButtonNav>
          <ButtonNav  active={activeScreen ==="relatorio"? true : false}>
            <Link to="/relatorio">
              Relatório
            </Link>
          </ButtonNav>
          <ButtonNav  active={activeScreen ==="outracoisa"? true : false}>
            <Link to="/outracoisa">
              Outra coisa
            </Link>
          </ButtonNav>
        
      
        </NavBar>
        <div className="calendar">
          <p>
            {new Date().toLocaleDateString('pt-br')}
          </p>
          <BsCalendar3/>
        </div>
      </Container>
  )
}