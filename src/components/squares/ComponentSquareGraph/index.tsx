import { Container } from "./styles";
import { Line } from '@ant-design/charts';

export function ComponentSquareGraph(){
  const data = [
    {
      mes: 'Janeiro',
      ocorrencias: 3,
    },
    {
      mes: 'Fevereiro',
      ocorrencias: 40,
    },
    {
      mes: 'Março',
      ocorrencias: 12,
    },
    {
      mes: 'Abril',
      ocorrencias: 57,
    },
    {
      mes: 'Maio',
      ocorrencias: 149,
    },
    {
      mes: 'Junho',
      ocorrencias: 6,
    },
    {
      mes: 'Julho',
      ocorrencias: 13,
    },
    {
      mes: 'Agosto',
      ocorrencias: 150,
    },
    {
      mes: 'Setembro',
      ocorrencias: 13,
    },
    {
      mes: 'Outubro',
      ocorrencias: 2,
    },
    {
      mes: 'Novembro',
      ocorrencias: 0,
    },
    {
      mes: 'Dezembro',
      ocorrencias: 130,
    },
  ];
  
  const config = {
    data,
    yField: 'ocorrencias',
    xField: 'mes',
    autoFit: true,
    colors: ['#0F5481'],
  };

  return (
    <Container>
        <h2>GRÁFICO DE OCORRÊNCIAS</h2>
        <Line {...config} />;
    </Container>
  )
}