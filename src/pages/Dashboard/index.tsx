import { Header } from '../../components/header'
import { ComponentStatus, ComponentSquare, ComponentSquarePercent, ComponentSquareGraph } from '../../components/squares'
import { Container, Main } from './styles'
import { NotificacaoInvasao } from '../../components/NotificacaoInvasao'
import { useState, useEffect } from 'react';
import { ModalOcorrencia } from '../../components/ModalOcorrencia';
import { motion } from 'framer-motion';
import { NotificacaoDevice } from '../../components/NotificacaoDevice'

export function Dashboard(){
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidthScreen(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
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
                        {widthScreen > 650 ? 
                        <NotificacaoInvasao local="Perto do Canal" onOpenModal={handleOpenModal}/>
                        :
                        <NotificacaoDevice local="Perto do Canal" onOpenModal={handleOpenModal} />}
                        
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