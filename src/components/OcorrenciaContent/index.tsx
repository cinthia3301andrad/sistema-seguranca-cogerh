import { ModalOcorrencia } from '../ModalOcorrencia';

import { IoMdClose } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import {BsChevronDown} from 'react-icons/bs'
import { Details, ListLi} from "./styles";
import { useState } from "react";
import { GoAlert } from 'react-icons/go';

type OcorrenciaContentProps = {
    ocorrencia: any;
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

export function OcorrenciaContent({ocorrencia}: OcorrenciaContentProps){
    const [detailsActive, setDetailsActive] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleCloseModal(){
        setIsModalOpen(false);
    }

    const playExpandingAnimation = () => {
        setDetailsActive(!detailsActive);
        setTimeout(() => {
        }, expandingTransition.duration * 100 - 150);
      };
      
    return(
        <ListLi key={ocorrencia.id}>
            <div className="infos-header">
                <header>
                {ocorrencia.status ==='pir'?  <GoAlert color="#ff9853"/> : <CgDanger color="#D14E4E"/>}
                    <h2>{ocorrencia.infos.local}</h2>  
                                        
                    <p>13:24 - 22/04/2021</p>
                    </header>
                        <button onClick={playExpandingAnimation}>
                          {
                               ocorrencia.status === "ultra" ?
                               <BsChevronDown/> : <IoMdClose/>
                          } 
                        </button>
            </div>
            {
                ocorrencia.status === "ultra" && 
                <Details
                initial={false}
                animate={detailsActive ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
                key={ocorrencia.id}
            >
                <h2>Detalhes da ocorrência</h2>
                <div className="infos">
                    <p>Possível invasor localizado em: <strong>{ocorrencia.infos.local}</strong> a {ocorrencia.infos.distancia??0}m de distancia.
                                            
                    </p>
                    <p>Altura do invasor:  <strong>{ocorrencia.infos.altura??0} metros de altura</strong> </p>
                    <p> Nível de invasão:  <strong>{ocorrencia.infos.perigo??0}% de chances de ser um perigo</strong> </p>
                    <p>Aconselhamos que tome medidas cabíveis para tal situação.</p>
                    </div>
                    <div className="relatar-ocorrencia">
                        <button onClick={()=>setIsModalOpen(true)}>RELATAR OCORRÊNCIA</button>
                    </div>
            </Details>
            }

            <ModalOcorrencia
            
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                ocorrencia={ocorrencia.infos.local}
            />
            </ListLi>
    )
}