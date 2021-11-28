import { Header } from '../../components/header'
import { ComponentStatus, ComponentSquare, ComponentSquarePercent, ComponentSquareGraph } from '../../components/squares'
import { Container, Main } from './styles'
import { NotificacaoInvasao } from '../../components/NotificacaoInvasao'
import { useState, useEffect } from 'react';
import { ModalOcorrencia } from '../../components/ModalOcorrencia';
import { motion } from 'framer-motion';

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
type PropsDashboard = {
    ocorrencias: Notificacao[];
}

export function Dashboard({ocorrencias}: PropsDashboard){

    const [isChange, setIsChange] = useState(false)
    const [notifyAtual, setNotifyAtual] = useState<Notificacao>();
    const [statusAtual, setStatusAtual] = useState('safe');
    const [notificacoes, setNotificacoes] = useState<Notificacao[]>(ocorrencias);

    function testando(){
       if(notifyAtual){
        return  <NotificacaoInvasao qtd={notificacoes.length - 1}
        infos={notifyAtual.infos} 
        onOpenModal={handleOpenModal} 
        type={notifyAtual.status}/>
       }
    }
     function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        const newArray = [...array]
        console.log("ue", array, notifyAtual)
      
        setNotificacoes(newArray);
    }

    useEffect(()=> {
        setTimeout(() => {

            shuffleArray(notificacoes)
            setIsChange(!isChange)
        }, 5000);


    }, [isChange]) ; 
    
/*     useEffect(()=> {
        setTimeout(() => {
            setNotificacoes([...notificacoes, 
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
            ])
        }, 5000);

    }, [notificacoes]) ; */

    useEffect(() => {
        console.log("entrou", notificacoes);
        if(notificacoes.length > 0) {
          
           /*  let index = notificacoes.findIndex(notificacao => notificacao.status === "ultra") */
     /*        if(index < 0) {
                index = notificacoes.length - 1
                setStatusAtual('alert')
            } else setStatusAtual('perigo') */
            const newNotification = notificacoes[notificacoes.length -1];
            if(newNotification.status==='pir') setStatusAtual('alert')
            else if(newNotification.status==='ultra')setStatusAtual('perigo')
            else setStatusAtual('safe')
            console.log("uhh", notificacoes,newNotification)
            setNotifyAtual(newNotification)
        }
    }, [notificacoes])

  
    const [isModalOpen, setIsModalOpen] = useState(false);
    function handleOpenModal() {
        setIsModalOpen(true);
      }
      function handleCloseModal() {
        setIsModalOpen(false);
      }
   
    return (
        <Container>
            <Header activeScreen="dashboard"/>
          
            <Main>
                <div className="colunas"> 
                    <ul className="header">
                    { notificacoes.map((notificacao, index) => {
                        if (index > 3){
                            return (<NotificacaoInvasao qtd={notificacoes.length - 1}
                                infos={notificacao.infos} 
                                onOpenModal={handleOpenModal} 
                                type={notificacao.status}/>)
                        }return<></>;
                      
                    })}
                       
                    </ul>
                    <div className="row">
                        <div className="coluna-1">
                            <ComponentStatus status={statusAtual} />
                            <ComponentSquare style={{height: '300px'}} title="Seguranças Ativos" number={24}/> 
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
            <ModalOcorrencia
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                ocorrencia={"Tal"}
            />
        </Container>
    )
}