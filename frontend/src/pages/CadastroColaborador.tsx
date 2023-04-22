/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from './Sidebar';
import './CadastroColaborador.css';

function CadastroColaborador() {
    return (
        <>

        <div className="tudoCC"> 
          <Sidebar />

          <div className='colaboradorCss'>

                <div>
                    <h2>Cadastrar colaboradores</h2><br />

                    <form method="post" action="" className='formsCadastroColaborador'>
                    <p className="dadosGerais">Dados Gerais</p>
                        <div className="campo-triplo">
                            <div className="infoContaCC">
                                <label>Nome: </label><br/> 
                                <input type="text" name="nome" required />
                            </div>
                            <div className="infoContaCC">
                                <label>CPF: </label><br/> 
                                <input type="text" maxLength={11} name="cpf" required />
                            </div>
                            <div className="infoContaCC">
                                <label>Data de Nascimento: </label><br/> 
                                <input type="date" className="dataNascimento" name="dataAniversario" required />
                            </div>
                        </div>
                        <div className="campo-duplo">
                            <div className="infoContaCC">
                                <label>Cidade: </label><br/> 
                                <input type="text" className="endereco" name="cidade" required />
                            </div>
                            <div className="infoContaCC">
                                <label>Estado: </label><br/> 
                                <input type="text" className="enderecoInput" name="endereco" maxLength={2} required />
                            </div>
                        </div>
                            <p className='funcaoStyle'>Função</p>
                            <div className='funcaoCC'>   
                                <input type="checkbox" name="portaria" required />
                                <label> Analista</label><br/>    
                                <input type="checkbox" name="conferenciaQuantitativa" required />
                                <label> Conferência</label>
                        </div><br />
                        <input type="submit" className="cadastrarCC" value="Cadastrar" />
                    </form>
                </div> 
            </div>
        </div>  

        </>
    )
};

export default CadastroColaborador;