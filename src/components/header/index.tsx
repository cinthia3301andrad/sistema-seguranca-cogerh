import { Link } from "react-router-dom";

 import { BsCalendar3 } from 'react-icons/bs'

import { Container, NavBar, ButtonNav } from "./styles";
import { MenuSanduiche } from "./MenuSanduiche";

interface HeaderProps {
  activeScreen: string;
}

export function Header({activeScreen}: HeaderProps){
  return (
      <Container>
        <MenuSanduiche activeScreen={activeScreen}/>
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
          <ButtonNav  active={activeScreen ==="ocorrencias"? true : false}>
            <Link to="/ocorrencias">
              Todas as ocorrências
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