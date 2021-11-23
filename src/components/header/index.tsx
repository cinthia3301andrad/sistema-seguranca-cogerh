import { Link } from "react-router-dom";

 import { BsCalendar3 } from 'react-icons/bs'

import { Container, NavBar } from "./style";

export function Header(){
  return (
      <Container>
        <h1>SISTEMA DE MONITORAMENTO</h1>
        <NavBar>
          <Link to="/dashboard">
            Dashboard
          </Link>
          <Link to="/relatorio">
            Relatório
          </Link>
          <Link to="/outracoisa">
            Outra coisa
          </Link>
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