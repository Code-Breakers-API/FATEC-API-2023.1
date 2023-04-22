/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import SidebarAnalista from './SidebarAnalista';
import './Analista.css'
import { FaSearch } from 'react-icons/fa';
import ModalProdutos from './ModalProdutos';
import { useState } from 'react';


function Analista() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    /* const [numeroPedido, setNumeroPedido] = useState("");
    const handlePesquisar = () => {
        const numeroPedido = document.getElementsByName('numeroPedido')[0].value;
        fetch(`${numeroPedido}`)
          .then(response => response.json())
          .then(data => {
            setDadosPedido(data); // atualiza o estado com os dados do pedido
            setShowModal(true); // exibe o modal com os dados do pedido
          })
          .catch(error => console.error(error));
      } */
    
    return (
        <>
            <div>
                <SidebarAnalista />

                <h2 className='HomeAnalista'>Home</h2><br />

                <div className="infoPed">
                    <label>Número do pedido:</label>
                    <input type="number" name="numeroPedido" />
                    <button type="button" className="pesquisarPedido"  onClick={handleShow}>
                        <FaSearch size={25} />
                    </button>
                    </div>  

                     <ModalProdutos show={showModal} handleClose={handleClose} handleSave={undefined} />              
            </div>
        </>
    )
}

export default Analista;