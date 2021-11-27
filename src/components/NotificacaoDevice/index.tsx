import { Container,Details} from "./styles";
import { GoAlert } from "react-icons/go";
import {useState} from 'react'

interface NotificacaoDeviceProps {
  local: string;
  onOpenModal: () => void;
}

const expandingTransition = {
  type: "spring",
  duration: 2,
  stiffness: 30,
};
const backdropVariants = {
  expanded: {
    width: "100%",
    display: "flex",
    minHeight: '250px',
  },

  collapsed: {
    display: "none",
  
  },
};


export function NotificacaoDevice({local, onOpenModal}: NotificacaoDeviceProps){

  const [detailsActive, setDetailsActive] = useState(false)
  
  const playExpandingAnimation = () => {
    setDetailsActive(!detailsActive);
    setTimeout(() => {
    }, expandingTransition.duration * 100 - 150);
  };
  return (
    <Container>
      <div className="content">
        <div className="content-alert">
          <div className="left-comp">
            <GoAlert color="#ff9853"/>
          </div>
  
          <div className="right-comp">
            <div className="text">
              <h1>Alerta de Ocorrência!</h1>
              <h2><b>Local: </b>{local}</h2>
            </div>
            <h2>13:54 - <b>10 de Novembro de 2021</b></h2>
          </div>
        </div>
        <div className="content-botao">
          <button onClick={playExpandingAnimation}>{detailsActive ? "Fechar detalhes" : "Abrir detalhes"}</button>
        </div>
      </div>
      <Details
       initial={false}
       animate={detailsActive ? "expanded" : "collapsed"}
       variants={backdropVariants}
       transition={expandingTransition}
      
       >
        <h2>Detalhes da ocorrência</h2>
        <div>
          <p>
            Localização: <strong>{local}</strong> a <strong>30 metros</strong> de distância.
           
          </p>
          <p>Altura do invasor:  <strong><strong>1 metro</strong> de altura</strong> </p>
          <p> Nível de invasão:  <strong>90% de chances de ser um perigo</strong> </p>
        </div>
        <div className="relatar-ocorrencia">
          <button onClick={onOpenModal}>RELATAR OCORRÊNCIA</button>
        </div>
      </Details>

    </Container>
  )
} 