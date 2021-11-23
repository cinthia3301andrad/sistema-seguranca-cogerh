import { GoAlert } from "react-icons/go";
import { Container } from './styles'

interface ComponentStatusProps {
  title: string
  status: string
}

export function ComponentStatus({title, status}: ComponentStatusProps){
  return (
    <Container status="alert">
        <h1>Status</h1>
        <GoAlert/>
        <h2>{title}</h2>
    </Container>
  )
}