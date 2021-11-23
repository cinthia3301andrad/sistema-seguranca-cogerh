import { Container } from "./styles";
import { GoAlert } from "react-icons/go";
import {useState} from 'react'

interface NotificacaoInvasaoProps {
  local: string
}

export function NotificacaoInvasao({local}: NotificacaoInvasaoProps){
  const [data, setData] = useState(new Date())
  return (
    <Container>
      <div className="left-comp">
        <GoAlert color="#ff9853"/>
        <div className="text">
          <h1>Alerta de Ocorrência</h1>
          <h2><b>Local: </b>{local}</h2>
        </div>
      </div>

      <div className="right-comp">
        <h2>13:54 - <b>10 de Novembro de 2021</b></h2>
        <h3>Abrir Detalhes</h3>
      </div>

    </Container>
  )
} 