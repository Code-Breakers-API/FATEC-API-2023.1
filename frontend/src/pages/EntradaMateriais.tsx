import SidebarAnalista from './SidebarAnalista';
import './EntradaMateriais.css';

function EntradaMateriais() {
    return (
        <>
            <div>
                <SidebarAnalista />

                <h2 className='EntradaMateriais'>Entrada de Materiais</h2> <br />

                <form action="" className='Entrada'>
                    <p>
                        <span>{`Número do Produto: ${sessionStorage.getItem('nomeProduto')}`}</span>
                        <br />

                        <span>{`Data de Compra: ${sessionStorage.getItem('dataCompra')}`}</span>
                        <br />

                        <span>{`Nome do Produto: ${sessionStorage.getItem('nomeProduto')}`}</span>
                        <br />

                        <span>{`Quantidade do Produto: ${sessionStorage.getItem('quantidadeProduto')}`}</span>
                        <br />

                        <span>{`Descrição do Produto: ${sessionStorage.getItem('descricaoProduto')}`}</span>
                        <br />

                        <span>{`Quantidade Volume: ${sessionStorage.getItem('quantidadeVolume')}`}</span>
                        <br />

                        <span>{`Fornecedor: ${sessionStorage.getItem('nomeFornecedor')}`}</span>
                        <br />

                        <span>{`Código de Rastreio: ${sessionStorage.getItem('codigoRastreio')}`}</span>
                        <br />

                        <span>{`Previsão de Entrega: ${sessionStorage.getItem('previsaoEntrega')}`}</span>
                        <br />

                        <span>{`Valor Unitário: ${sessionStorage.getItem('valorUnitario')}`}</span>
                        <br />

                        <span>{`Transportadora: ${sessionStorage.getItem('Transportadora')}`}</span>
                        <br />

                        <span>{`Valor da Compra: ${sessionStorage.getItem('valorCompra')}`}</span>
                        <br />

                        <span>{`Tido de Frete: ${sessionStorage.getItem('freteTipo')}`}</span>
                        <br />
                    </p>

                    <label className='observacao'>Observação:</label>
                    <input type="text" />
                    <br /><br />

                    <input type="submit" className='negar' value='Negar Recebimento'/>
                    <input type="submit" className='aprovar' value='Salvar' />
                </form>

                <form action=""></form>
            </div>
        </>)
}



export default EntradaMateriais;