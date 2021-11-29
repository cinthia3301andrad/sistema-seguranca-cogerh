import {useRef, useState} from 'react';
import { GoAlert } from "react-icons/go";
import { CgDanger } from "react-icons/cg";

import audio from '../../assets/alert.mp3';

import {CircleNotifications} from '../CircleNotifications'

import { Container,Details} from "./styles";
import { motion } from 'framer-motion';
import { ModalOcorrencia } from '../ModalOcorrencia';

interface NotificacaoInvasaoProps {
  id: number;
  qtd: number;
  infos: {
    local: string,
    data: Date,
    altura?: number,
    distancia?: number,
    perigo?: number
  };
  type: string;
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


export function NotificacaoInvasao({infos, type, qtd, id}: NotificacaoInvasaoProps){
  const audioRef = useRef<HTMLAudioElement>(null);
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 
                 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const [detailsActive, setDetailsActive] = useState(false)
  
  const playExpandingAnimation = () => {
    setDetailsActive(!detailsActive);
    setTimeout(() => {
    }, expandingTransition.duration * 100 - 150);
  };

 
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
      setIsModalOpen(true);
    }
  function handleCloseModal() {
      setIsModalOpen(false);
    }

  return (
    <motion.li
      key={infos.local}
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{
        duration: 0.2,
        repeat: 3,
      }}
     className={type}>
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
            <h2><b>Local: </b>{infos.local}</h2>
          </div>
        </div>
        
        <div className="right-comp">
          <h2>
            {infos.data.getHours()}:{infos.data.getMinutes()} - 
            <b> {infos.data.getDate()} de {meses[infos.data.getMonth()]} de {infos.data.getFullYear()}</b>
          </h2>
          {type==='ultra' && 
          <div className="b-detalhes">
            <button onClick={playExpandingAnimation}> {detailsActive? 'Fechar Detalhes' : 'Abrir Detalhes'} </button>
          </div>
          
        }  
        </div>
      </div>
    
      {type === 'ultra' && 
            <Details
            initial={false}
            animate={detailsActive ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          
            >
            <h2>Detalhes da ocorrência</h2>
            <div>
              <p>
                Possível invasor localizado em: <strong>{infos.local}</strong> a {infos.distancia??0}m de distancia.
                
              </p>
              <p>Altura do invasor:  <strong>{infos.altura??0} metros de altura</strong> </p>
                <p> Nível de invasão:  <strong>{infos.perigo??0}% de chances de ser um perigo</strong> </p>
                <p>Aconselhamos que tome medidas cabíveis para tal situação.</p>
            </div>
            <div className="relatar-ocorrencia">
              <button onClick={handleOpenModal}>RELATAR OCORRÊNCIA</button>
            </div>
          </Details>
     }
      {
        qtd > 1 && (
          <CircleNotifications qtd={qtd} />
        )
      }
    </Container>

    <ModalOcorrencia
    id={id}
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                ocorrencia={infos.local}
            />
    </motion.li>
  )
} 