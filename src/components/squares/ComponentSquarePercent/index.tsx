import { Container } from "./styles";
import { Progress } from 'antd'

export function ComponentSquarePercent(){

  return (
    <Container>
      <div className="title">
        <h2>Status de Monitoramento</h2>
        <p>Quantitativo dos sensores em atividade.</p>
      </div>
      <Progress width={200} type="circle" percent={96} />
    </Container>
  )
}