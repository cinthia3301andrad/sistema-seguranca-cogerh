import { Container } from "./styles";


interface ComponentSquareProps {
  title: string
  number: number
}

export function ComponentSquare({title, number}: ComponentSquareProps){
  return (
    <Container>
        <h2>{title}</h2>
        <h1>{number}</h1>
    </Container>
  )
}