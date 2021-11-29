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
            local: "Casa de motor dos canais",
            data: new Date(),
            distancia: 30,
            altura: 1.60,
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
            local: "Porteira dos canais",
            data: new Date(),
            distancia: 30,
            altura: 1.60,
            perigo: 83
        },
        status: "ultra",
    },
      {
          infos: {
              local:  "Via 2 do canal",
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

    const [, setNotifyAtual] = useState<Notificacao>();
    const [statusAtual, setStatusAtual] = useState('safe');
    const [, ] = useState<Notificacao[]>(ocorrencias);

   

    useEffect(() =>{
      
        setTimeout(() => {
            const id = (new Date().getTime() / 1000) * Math.random();
            const newOcorrencia = {...ocorrencias[0], id}
            setOcorrenciasData([newOcorrencia]);
        }, 25000);
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
        const id = (new Date().getTime() / 1000) * Math.random();
        const index = Math.floor(Math.random() * (ocorrencias.length - 1));

        if(ocorrenciasData.length >= 1) { 
            const newOcorrencia = {...ocorrencias[index], id}
            
            setTimeout(() => {
                setOcorrenciasData((prev: any) => [...prev, newOcorrencia])
            }, 25000);
            
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
                                type={ocorrenciasData[ocorrenciasData.length - 1].status}
                                id={ocorrenciasData[ocorrenciasData.length - 1].id}
                                />
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