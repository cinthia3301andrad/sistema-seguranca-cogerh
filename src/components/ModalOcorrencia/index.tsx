
import { useContext } from "react";
import Modal from "react-modal";

import { ToastContainer, toast } from 'react-toastify';

import iconClose from "../../assets/close.svg";
import { OcorrenciasContext } from "../../context/ocorrenciasContext";
import { Container,ContentForm } from './styles'
toast.configure();
interface ModalProps {
    id: number;
    isOpen: boolean;
    onRequestClose: () => void;
    ocorrencia: string;
  }

export function ModalOcorrencia({isOpen, onRequestClose, ocorrencia, id}: ModalProps){
  
    const {ocorrenciasData,setOcorrenciasData} = useContext(OcorrenciasContext);

    
    const  notify = () => toast.success('Ocorrência relatada com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    function handleRemoveOcorrencia() {
            const newOcorrencias = ocorrenciasData.filter((ocorrenciaData: any) => {
              if(ocorrenciaData.id !== id) return ocorrenciaData;
              return;
            });
      
            setOcorrenciasData(newOcorrencias)
        }
    function handleOcorrenciaRelatada(event: any){
        event.preventDefault();
        handleRemoveOcorrencia();
      
        onRequestClose();
        notify();

    }
  
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={iconClose} alt="fechar modal" />
        </button>
        <Container>
            <header>
                <h1>Ocorrência  {ocorrencia} </h1>
                <div>
                    <p>Local: <strong>Perto do canal</strong></p>
                    <p><strong>13:45 -  {new Date().toLocaleDateString('pt-br')}</strong></p>
                </div>
            </header>
            <ContentForm onSubmit={(event) =>  handleOcorrenciaRelatada(event)}>

                <div className="column">
                    <div>
                        <label>Nome do vigilante: *</label>
                        <input type="text" required/>
                    </div>
                    <div>
                        <label> Como você classifica essa ocorrência? *</label>
                        <ul className="input-radio">
                            <li><input type="radio" value="MALE" name="gender"/> <p>Sem perigo</p></li>
                            <li><input type="radio" value="MALE" name="gender"/> <p>Suspeira de invasão</p></li>
                            <li><input type="radio" value="MALE" name="gender"/> <p>Invasão</p></li>
                        </ul>
                    </div>
                </div>
                <div className="textarea">
                    <label >Descrição da ocorrência: *</label>
                    <textarea required/>
                </div>

                <button type="submit" className="enviar">Enviar</button>

            </ContentForm>
  
        </Container>
      </Modal>
    )
}