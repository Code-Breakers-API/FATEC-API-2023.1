import Sidebar from './Sidebar';
import './ColaboradoresAdm.css';

function ColaboradoresAdm() {
    return (
        <>
            <div>
                <Sidebar name='' email=''/>
                <form action="" className='DadosGerais'>
                    <h3>Dados Gerais</h3>
                    <p>
                        <a href="">Cadastrar Colaboradores</a> <br />

                        <span>{`Nome: ${sessionStorage.getItem('nomeColaborador')}`}</span>
                        <br />

                        <span>{`Função: ${sessionStorage.getItem('funcaoAdministrativa')}`}</span>
                        <br />

                        <span>{`CPF: ${sessionStorage.getItem('CPF')}`}</span>
                        <br />

                        <span>{`Data de Nascimento: ${sessionStorage.getItem('dataNascimento')}`}</span>
                        <br />

                        <span>{`Cidade: ${sessionStorage.getItem('Cidade')}`}</span>
                        <br />
                        
                        <span>{`Estado: ${sessionStorage.getItem('Estado')}`}</span>
                        <br />
                    </p>
                </form>
            </div>
        </>
    )
}

export default ColaboradoresAdm