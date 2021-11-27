import { Header } from '../../components/header'
import { ComponentStatus, ComponentSquare, ComponentSquarePercent, ComponentSquareGraph } from '../../components/squares'
import { Container, Main } from './styles'
import { NotificacaoInvasao } from '../../components/NotificacaoInvasao'
import { useState } from 'react';
import { ModalOcorrencia } from '../../components/ModalOcorrencia';
import { motion } from 'framer-motion';


export function Dashboard(){
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
                    <motion.li
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 100
                        }}
                        className="alert"
        
                        >
                        <NotificacaoInvasao local="Perto do Canal" onOpenModal={handleOpenModal}/>
                    </motion.li>
                 <motion.li
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 40
                        }}
                        className="alert"
        
                        >
                        <NotificacaoInvasao local="Perto do Canal" onOpenModal={handleOpenModal}/>
                    </motion.li>
             
                       
                    </ul>
                    <div className="row">
                        <div className="coluna-1">
                            <ComponentStatus title="Em alerta" status="alerta" />
                            <ComponentSquare title="Seguranças Ativos" number={24}/> 
                        </div>
                        <div className="coluna-2">
                            <ComponentSquare title="Total de Ocorrências" number={323}/> 
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