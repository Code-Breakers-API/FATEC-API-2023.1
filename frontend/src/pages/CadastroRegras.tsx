import Sidebar from './Sidebar';
import './CadastroRegras.css';

function CadastroRegras() {
    return (
        <>

        <div className='tudoCR'>
            <Sidebar />
        
        <div className='regrasCss'>
            <h2>Cadastro de Regras</h2>

            <form method="post" action="" className='formsCadastroRegras'>
                <p className="crieRegras">Crie uma Nova Regra</p>
                <div>
                    <div className="campo-duplo">
                        <div className="infoContaCR">
                            <label>Produto:</label><br />
                            <input name="produto" id="produto" className="select" required />
                        </div>
                    </div>

                    <div className="campo-unico">
                        <div className="infoContaCR">
                            <label>Titulo de Regra de Recebimento:</label><br />
                            <input type="text" name="tituloRegraRecebimento" required />
                        </div>
                    </div>
                    <div className="campo-unico">
                        <div className="infoContaCR">
                            <label>Tipo de Verificação:</label><br />
                            <select name="verificacao" id="verificacao" className="select" required>
                                <option value="">Selecione uma opção</option>
                                <option value="inspecao_visual">Inspeção visual</option>
                                <option value="verificacao_embalagem">Verificação de embalagem</option>
                                <option value="testes_laboratorio">Testes de laboratório</option>
                            </select>
                        </div>
                    </div>
                    <div className="campo-unico">
                        <div className="infoContaCR">
                            <label>Variação Aceitável em Porcentagem:</label><br />
                            <input type="text" name="numPorcentagem" required />
                        </div>
                    </div><br />

                    <input type="submit" name="cadastrar" className="cadastrarCR" value="Cadastrar" />

                </div>
            </form>
        </div>  
        </div>       
        </>
    );
}

export default CadastroRegras;