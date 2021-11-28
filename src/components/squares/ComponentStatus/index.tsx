import { GoAlert } from "react-icons/go";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";

import { Container } from './styles'

interface ComponentStatusProps {
  status: string
}

export function ComponentStatus({ status}: ComponentStatusProps){
  return (
    <Container status={status}>
        <h1>Status</h1>  
        {status==='alert' ?  <GoAlert/> :status==='safe' ? <AiFillSafetyCertificate/> : <CgDanger/> }
       
        <h2>{status==='alert' ?  'Em alerta' :status==='safe' ? 'Seguro': 'Em perigo'}</h2>
    </Container>
  )
}