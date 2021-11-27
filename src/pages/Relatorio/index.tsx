import { Header } from "../../components/header";
import { ComponentSquareRelatorio } from "../../components/squares/ComponetSquareRelatorio";
import { ContainerRelatorio } from "./styles";

export function Relatorio(){
   
   
    return (
        <ContainerRelatorio>
          <Header activeScreen='relatorio'/>

          <ComponentSquareRelatorio />

        </ContainerRelatorio>
    )
}