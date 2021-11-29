import { Header } from "../../components/header";


import { Container, Content, ListOcorrencias} from "./styles";

import { OcorrenciaContent } from "../../components/OcorrenciaContent";

import ReactModal from 'react-modal';
import { useContext } from "react";
import { OcorrenciasContext } from "../../context/ocorrenciasContext";
ReactModal.setAppElement('*');



export function Ocorrencias(){
    const {ocorrenciasData} = useContext(OcorrenciasContext);
 
    return (
        <Container>
          <Header activeScreen='ocorrencias'/>
            <Content>
                <h1>Ocorrencias não relatadas</h1> 

                <ListOcorrencias>
                    {
                        ocorrenciasData?.map((ocorrencia: any) => {
                            return(
                                <OcorrenciaContent key={ocorrencia.id} ocorrencia={ocorrencia}/>
                            )
                        })
                    }

                </ListOcorrencias>
            </Content>
         
        </Container>
    )
}