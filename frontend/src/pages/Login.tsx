import { FormEvent, useRef } from 'react';
import './Login.css';

function Login() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  async function authenticate(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    const userEmail = email.current?.value || "";
    const userPassword = password.current?.value || "";

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
        password_user: userPassword,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, DELETE'
      },
      
    });

      const data = await response.json()
      if(response.ok){
        const token = data.token
        localStorage.setItem('token', token)
        alert('Autenticado')
      }else{
        alert('Autenticação inválida')
      }
      console.table(data)
  }

  return (
    <>
      <p id='login'>Inspeção de Entrada de Produtos</p><br/>
      <div className="infoConta">
      <form onSubmit={authenticate}>
        <label className='infoContaName'>Email
          <br/>
          <input type="email" ref = {email} required />
        </label>
        <br/><br/>
        <label className='infoContaName'>Senha
          <br/>
          <input type="password" ref = {password} />
        </label>
        <br/><br/>
        <button type="submit" className="entrar">Login</button>
      </form>
      </div>
    </>
  );
}

export default Login;