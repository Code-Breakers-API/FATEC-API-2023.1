/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from './Sidebar';
import './CadastrosAdm.css'

function CadastrosAdm() {
    return (
        <>
            <div>
                <Sidebar />

                <h2 className='HomeAdm'>Home</h2><br />

                <div className="buttonNavegadores">
                    <a href="">
                        <button className='buttonAdm'>Cadastro de Regras de Recebimento</button>
                    </a><br />
                    <a href="">
                        <button className='buttonAdmCP'>Cadastro de Produtos</button>
                    </a><br />
                    <a href="">
                        <button className='buttonAdmCC'>Cadastro de Colaboradores</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default CadastrosAdm;