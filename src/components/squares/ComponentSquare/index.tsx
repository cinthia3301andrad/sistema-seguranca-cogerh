import { Container } from "./styles";


interface ComponentSquareProps {
  title: string
  number: number
  style?: React.CSSProperties
}

export function ComponentSquare({title, number, style}: ComponentSquareProps){
  return (
    <Container style={style}>
        <h2>{title}</h2>
        <h1>{number}</h1>
    </Container>
  )
}