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


export function Dashboard(){

    const [isAlterar, setIsAlterar] = useState(false)
    const [notifyAtual, setNotifyAtual] = useState<Notificacao>();
    const [statusAtual, setStatusAtual] = useState('safe');
    const [notificacoes, setNotificacoes] = useState<Notificacao[]>([
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
    ]);

/*     function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setNotificacoes(array);
    }

    useEffect(()=> {
        setTimeout(() => {

            shuffleArray(notificacoes)
            setIsAlterar(!isAlterar)
        }, 5000);


    }, [isAlterar]) ; */

    useEffect(() => {
        let index = notificacoes.findIndex(notificacao => notificacao.status === "ultra")
        if(index < 0) {
            index = notificacoes.length - 1
            setStatusAtual('alert')
        } else setStatusAtual('perigo')
        
        setNotifyAtual(notificacoes[index])

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
                        {
                            notifyAtual && 
                            <motion.li
                            initial={{ opacity: 0, translateY: -100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 100
                            }}
                            className="alert">
                                <NotificacaoInvasao qtd={notificacoes.length - 1}
                                                    infos={notifyAtual.infos} 
                                                    onOpenModal={handleOpenModal} 
                                                    type={notifyAtual.status}/>
                        </motion.li>
                        }
                       
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