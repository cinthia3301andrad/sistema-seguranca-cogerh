import { Header } from "../../components/header";

import { Container, Content } from "./styles";

type PropsOcorrencias = {
    ocorrencias?: Array<any>;
}

export function Ocorrencias({ocorrencias}: PropsOcorrencias){
   
   
    return (
        <Container>
          <Header activeScreen='ocorrencias'/>
            <Content>
                <h1>Todas as ocorrencias - não relatadas</h1> 
            </Content>
         
        </Container>
    )
}