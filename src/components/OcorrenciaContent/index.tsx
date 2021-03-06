import { ModalOcorrencia } from '../ModalOcorrencia';
import ReactTooltip from 'react-tooltip';

import { IoMdClose } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import {BsChevronDown} from 'react-icons/bs'
import { Details, ListLi} from "./styles";
import { useContext, useState } from "react";
import { GoAlert } from 'react-icons/go';
import { OcorrenciasContext } from '../../context/ocorrenciasContext';
import { meses } from '../../utils/datas';

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

    const {ocorrenciasData,setOcorrenciasData} = useContext(OcorrenciasContext);

    const [detailsActive, setDetailsActive] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleCloseModal(){
        setIsModalOpen(false);
    }

    function handleButton (){
      if(ocorrencia.status ==='ultra'){
        playExpandingAnimation()
      }else {
        handleRemoveOcorrencia();
      }
    }

    function handleRemoveOcorrencia() {
      const newOcorrencias = ocorrenciasData.filter((ocorrenciaData: any) => {
        if(ocorrenciaData.id !== ocorrencia.id) return ocorrenciaData;
        return;
      });

      setOcorrenciasData(newOcorrencias)
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
                                        
                    <p>{ocorrencia.infos.data.getHours()}:{ocorrencia.infos.data.getMinutes()} - {ocorrencia.infos.data.getDate()} de {meses[ocorrencia.infos.data.getMonth()]} de {ocorrencia.infos.data.getFullYear()}</p>
                    </header>
                      
                        <button onClick={ handleButton } data-tip={ocorrencia.status ==='pir' ? 'Remover aviso' : 'Expandir'}>
                          {
                               ocorrencia.status === "ultra" ?
                               <BsChevronDown/> : <IoMdClose/>
                          } 
                        </button>
                        <ReactTooltip place="top" type="info" effect="solid"/>
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
                <h2>Detalhes da ocorr??ncia</h2>
                <div className="infos">
                    <p>Poss??vel invasor localizado em: <strong>{ocorrencia.infos.local}</strong> a {ocorrencia.infos.distancia??0}m de distancia.
                                            
                    </p>
                    <p>Altura do invasor:  <strong>{ocorrencia.infos.altura??0} metros de altura</strong> </p>
                    <p> N??vel de invas??o:  <strong>{ocorrencia.infos.perigo??0}% de chances de ser um perigo</strong> </p>
                    <p>Aconselhamos que tome medidas cab??veis para tal situa????o.</p>
                    </div>
                    <div className="relatar-ocorrencia">
                        <button onClick={()=>setIsModalOpen(true)}>RELATAR OCORR??NCIA</button>
                    </div>
            </Details>
            }

            <ModalOcorrencia
                id={ocorrencia.id}
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                ocorrencia={ocorrencia.infos.local}
            />
            </ListLi>
    )
}