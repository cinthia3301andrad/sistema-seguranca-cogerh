import { Header } from '../../components/header'
import { ComponentStatus, ComponentSquare, ComponentSquarePercent, ComponentSquareGraph } from '../../components/squares'
import { Container, Main } from './styles'
import { NotificacaoInvasao } from '../../components/NotificacaoInvasao'

export function Dashboard(){
    return (
        <Container>
            <Header/>
            
            <Main>
                <NotificacaoInvasao local="Perto do Canal"/>
                <div className="colunas"> 
                    <div className="coluna one">
                        <ComponentStatus title="Em alerta" status="alerta" />
                        <ComponentSquare title="Seguranças Ativos" number={24}/> 
                    </div>
                    
                    <div className="coluna two">
                        <ComponentSquare title="Total de Ocorrências" number={323}/> 
                        <ComponentSquareGraph/>
                    </div>

                    <div>
                        <ComponentSquarePercent />
                    </div>
                </div>

            </Main>
        </Container>
    )
}