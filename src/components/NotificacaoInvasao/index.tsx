import { Container,Details} from "./styles";
import { GoAlert } from "react-icons/go";
import { CgDanger } from "react-icons/cg";
import audio from '../../assets/alert.mp3';
import {useRef, useState} from 'react';


interface NotificacaoInvasaoProps {
  local: string;
  onOpenModal: () => void;
  type: 'pir' | 'ultra';
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


export function NotificacaoInvasao({local, onOpenModal, type}: NotificacaoInvasaoProps){
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [detailsActive, setDetailsActive] = useState(false)
  
  
  const playExpandingAnimation = () => {
    setDetailsActive(!detailsActive);
    setTimeout(() => {
    }, expandingTransition.duration * 100 - 150);
  };
  return (
    <Container>
      <audio
        ref={audioRef}
        src={audio}
                                    
        autoPlay
        />
      <div className="content">
        <div className="left-comp">
          {type==='pir'?  <GoAlert color="#ff9853"/> : <CgDanger color="#D14E4E"/>}
          <div className="text">
            <h1> {type==='pir'? 'Alerta de ocorrência!' : 'Alerta de invasão!'}</h1>
            <h2><b>Local: </b>{local}</h2>
          </div>
        </div>
        
        <div className="right-comp">
          <h2>13:54 - <b>10 de Novembro de 2021</b></h2>
          {type==='ultra' && 
          <button onClick={playExpandingAnimation}> {detailsActive? 'Fechar Detalhes' : 'Abrir Detalhes'} </button>
        }  
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
            Possível invasor localizado em: <strong>{local}</strong> a '30m' de distancia.
           
          </p>
          <p>Altura do invasor:  <strong>tantos metros de altura</strong> </p>
           <p> Nível de invasão:  <strong>90% de chances de ser um perigo</strong> </p>
            <p>Aconselhamos que tome medidas cabíveis para tal situação.</p>
        </div>
        <div className="relatar-ocorrencia">
          <button onClick={onOpenModal}>RELATAR OCORRÊNCIA</button>
        </div>
      </Details>

    </Container>
  )
} 