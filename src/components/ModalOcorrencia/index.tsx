
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
                        <label>Nome do vigilante: *</label>
                        <input type="text" />
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
                    <textarea />
                </div>

                <button className="enviar">Enviar</button>

            </ContentForm>
  
        </Container>
      </Modal>
    )
}