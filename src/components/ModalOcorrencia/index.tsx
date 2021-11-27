
import Modal from "react-modal";
import iconClose from "../../assets/close.svg";
import { Container,ContentForm } from './styles'

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    ocorrencia: string;
  }

export function ModalOcorrencia({isOpen, onRequestClose, ocorrencia }: ModalProps){
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
            <ContentForm>

                <div className="column">
                    <div>
                        <label>Nome do vigilante:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label> Como você classifica essa ocorrência?:</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label >Nome do vigilante:</label>
                    <input type="text" />
                </div>

            </ContentForm>
  
        </Container>
      </Modal>
    )
}