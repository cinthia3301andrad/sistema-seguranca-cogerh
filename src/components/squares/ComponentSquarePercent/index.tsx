import { Container } from "./styles";
import { RingProgress } from '@ant-design/charts';

export function ComponentSquarePercent(){

  const config = {
    height: 200,
    width: 200,
    autoFit: false,
    percent: 0.2,
    color: ['#0F5481', '#E8EDF3'],
  };

  return (
    <Container>
      <div className="title">
        <h2>Status de Monitoramento</h2>
        <p>Quantidade de sensores em atividade</p>
      </div>
      <div className="progress"><RingProgress {...config} /></div>
    </Container>
  )
}