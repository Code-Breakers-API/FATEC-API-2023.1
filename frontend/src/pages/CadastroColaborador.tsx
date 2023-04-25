/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from './Sidebar';
import './CadastroColaborador.css';
import { FormEvent, useRef } from 'react';

interface CadastroProps {
    name: string;
    email: string;
}

function CadastroColaborador(props: CadastroProps) {
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const cpf = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const profile = useRef<HTMLInputElement>(null);
    //const history = useNavigate();

    async function authenticate(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const userName = name.current?.value || "";
        const userEmail = email.current?.value || "";
        const userCpf = cpf.current?.value || "";
        const userPassword = password.current?.value || "";
        const userProfile = profile.current?.value || "";


        const response = await fetch('http://localhost:3000/create', {
            method: 'POST',
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                cpf: userCpf,
                password_user: userPassword,
                profile_id: userProfile
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, DELETE'
            },

        });

        //const data = await response.json()
        if (response.ok) {
            alert('Cadastrado com sucesso!')
            // const token = data.token
            // localStorage.setItem('token', token)
            // localStorage.setItem('email', data.user.email)
            // localStorage.setItem('name', data.user.name)
            // history('/HomeAdm', { state: { name: data.user.name, email: data.user.email } });
        } else {
            alert('Autenticação inválida')
        }
    }
    return (
        <>

            <div className="tudoCC">
                <Sidebar name={props.name} email={props.email} />

                <div className='colaboradorCss'>

                    <div>
                        <h2>Cadastrar colaboradores</h2><br />

                        <form method="post" action="" className='formsCadastroColaborador' onSubmit={authenticate} >
                            <p className="dadosGerais">Dados Gerais</p>
                            <div className="campo-triplo">
                                <div className="infoContaCC">
                                    <label>Nome: </label><br />
                                    <input type="text" ref={name} required />
                                </div>
                                <div className="infoContaCC">
                                    <label>CPF: </label><br />
                                    <input type="text" maxLength={11} ref={cpf} required />
                                </div>
                                <div className="infoContaCC">
                                    <label className='infoContaName'>Email
                                        <br />
                                        <input type="email" ref={email} required />
                                    </label>
                                </div>
                                <div>
                                    <label className='infoContaName'>Senha
                                        <br />
                                        <input type="password" ref={password} />
                                    </label>
                                </div>
                            </div>
                            <div className="campo-duplo">
                                <div className="infoContaCC">
                                    <label>Perfil: </label><br />
                                    <input type="text" className="endereco" ref={profile} required />
                                </div>
                            </div>
                            {/* <p className='funcaoStyle'>Função</p>
                            <div className='funcaoCC'>
                                <input type="checkbox" ref = {profile} required />
                                <label> Analista</label><br />
                                <input type="checkbox" ref={profile} required />
                                <label> Conferência</label>
                            </div><br /> */}
                            <button type="submit" className="cadastrarCC">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
};

export default CadastroColaborador;