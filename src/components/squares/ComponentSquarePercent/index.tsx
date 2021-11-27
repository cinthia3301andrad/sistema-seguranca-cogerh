import { Container } from "./styles";
import { Progress } from 'antd'

export function ComponentSquarePercent(){

  return (
    <Container>
        <h2>Status de Monitoramento</h2>
        <Progress percent={75} />
        <h2> Dos sensores funcionando </h2>
    </Container>
  )
}