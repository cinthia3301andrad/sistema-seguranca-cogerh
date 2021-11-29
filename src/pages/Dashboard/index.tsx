import { Header } from '../../components/header'
import { ComponentStatus, ComponentSquare, ComponentSquarePercent, ComponentSquareGraph } from '../../components/squares'
import { Container, Main } from './styles'
import { NotificacaoInvasao } from '../../components/NotificacaoInvasao'
import { useState, useEffect, useContext } from 'react';
import ReactModal from 'react-modal';
import React from 'react';
import { OcorrenciasContext } from '../../context/ocorrenciasContext';
ReactModal.setAppElement('*');

type Notificacao = {
    infos: { 
        local: string,
        data: Date,
        distancia?: number,
        altura?: number,
        perigo?: number 
    }, 
    status: string
}

export function Dashboard(){

    const {ocorrenciasData, setOcorrenciasData} = useContext(OcorrenciasContext);


    const ocorrencias = [
        {
          infos: {
              local:  "Canal 2",
              data: new Date(),
              distancia: 10,
              altura: 172,
              perigo: 78
          },
          status: "ultra",
      }, 
      {
          infos: {
              local:  "Portão Principal",
              data: new Date(),
          },
          status: "pir",
      },
      {
          infos: {
              local: "Atrás da Casa",
              data: new Date(),
              distancia: 30,
              altura: 160,
              perigo: 83
          },
          status: "ultra",
      },
      {
          infos: {
              local:  "Portão Principal",
              data: new Date(),
          },
          status: "pir",
      },
      {
          infos: {
              local:  "Canal Principal",
              data: new Date(),
          },
          status: "pir",
      },
    ];
    const [isChange, setIsChange] = useState(false)
    const [notifyAtual, setNotifyAtual] = useState<Notificacao>();
    const [statusAtual, setStatusAtual] = useState('safe');
    const [notificacoes, ] = useState<Notificacao[]>(ocorrencias);

     function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        const newArray = [...array]
 
      
        setOcorrenciasData(newArray);
    }

   

    useEffect(() =>{
      
        setTimeout(() => {
            setOcorrenciasData([ocorrencias[0]]);
        },10000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
 

    useEffect(() => {
    
        if(ocorrenciasData.length > 0) {
         
            const newNotification = ocorrenciasData[ocorrenciasData.length - 1];
            if(newNotification.status==='pir') setStatusAtual('alert')
            else if(newNotification.status==='ultra')setStatusAtual('perigo')
            else setStatusAtual('safe')
        
            setNotifyAtual(newNotification);
        }

        const index = Math.floor(Math.random() * (ocorrencias.length - 1));
        if(ocorrenciasData.length >= 1) { 
            
            setTimeout(() => {
                setOcorrenciasData((prev: any) => [...prev, ocorrencias[index]])
            }, 10000);
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ocorrenciasData])

  
  
   
    return (
        <Container>
            <Header activeScreen="dashboard"/>
          
            <Main>
                <div className="colunas"> 
                    <ul className="header">
                    {ocorrenciasData.length > 0 &&  (
                        <NotificacaoInvasao 
                                key={ocorrenciasData[ocorrenciasData.length - 1]}
                                qtd={ocorrenciasData.length - 1}
                                infos={ocorrenciasData[ocorrenciasData.length - 1].infos} 
                                type={ocorrenciasData[ocorrenciasData.length - 1].status}/>
                    )}
                       
                    </ul>
                    <div className="row">
                        <div className="coluna-1">
                            <ComponentStatus status={statusAtual} />
                            <ComponentSquare style={{height: '300px'}} title="Seguranças Ativos" number={100}/> 
                        </div>
                        <div className="coluna-2">
                            <ComponentSquare style={{height: '200px'}} title="Total de Ocorrências" number={323}/> 
                            <ComponentSquareGraph/>
                        </div>
                        <div className="coluna-3">
                            <ComponentSquarePercent />
                        </div> 
                    </div>

                </div>
            </Main>
         
        </Container>
    )
}