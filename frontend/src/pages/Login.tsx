import './Login.css';

function Login() {
  return (
    <>
      <p id='login'>Inspeção de Entrada de Produtos</p><br/>
      <div className="infoConta">
          <label className='infoContaName'>E-mail</label>
          <br/>
          <input type="email" id="email" name="email" required />
          <br/><br/>
          <label className='infoContaName'>Senha</label>
          <br/>
          <input type="password" name="senhaLogin" />
          <br/><br/>
          <input type="submit" className="entrar" value="Entrar" />
      </div>
    </>
  );
}

export default Login;