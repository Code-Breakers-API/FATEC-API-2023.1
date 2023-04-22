/* eslint-disable jsx-a11y/anchor-is-valid */
import { MouseEventHandler } from 'react';
import './ModalProdutos.css';
import { Button, Modal } from 'react-bootstrap';

const linkStyle = { textDecoration: "none",
                    color: "white" };
function ModalProdutos(props: {
    handleSave: MouseEventHandler<HTMLButtonElement> | undefined; show: any; handleClose: any; pedido?: any; 
}) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}  id='modal'>
                <Modal.Header closeButton>
                <Modal.Title>Detalhes do Produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>                              
                        <span>{`Nome do Produto: ${sessionStorage.getItem('nomeProduto')}`}</span>
                        <br />
                        
                        <span>{`Data e Hora: ${sessionStorage.getItem('dataHora')}`}</span>
                        <br />
                        
                        <span>{`Fornecedor: ${sessionStorage.getItem('nomeFornecedor')}`}</span>
                        <br />

                        <span>{`CNPJ: ${sessionStorage.getItem('cnpjFornecedor')}`}</span>
                        <br />

                        <span>{`Transportadora: ${sessionStorage.getItem('Transportadora')}`}</span>
                        <br />
                        
                        <span>{`Tido de Frete: ${sessionStorage.getItem('freteTipo')}`}</span>
                        <br />
                        
                        <span>{`Valor: ${sessionStorage.getItem('valorProduto')}`}</span>
                        <br />

                        <span>{`Descrição: ${sessionStorage.getItem('descricaoProduto')}`}</span>
                        <br />
                    </p>
                </Modal.Body> 
                <Button variant="sucess" onClick={props.handleSave} id="modalbotton">
                <a href="#" style={linkStyle}>
                    Salvar
                </a>
                </Button>
            </Modal>
        </div>

    );
}

    

export default ModalProdutos;
