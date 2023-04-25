import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import HomeAdm from './HomeAdm';
import CadastroColaborador from './CadastroColaborador';

function App() {
const email = localStorage.getItem('email')
const name = localStorage.getItem('name')

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login />} />
      {email && name && <Route path='/HomeAdm' element = {<HomeAdm name={name} email={email} />} /> }
      {!email && <Route path='/HomeAdm' element = {<Login />} />}
      {email && name && <Route path='/CadastroColaborador' element = {<CadastroColaborador name={name} email={email} />} />}
    </Routes>
    </BrowserRouter>
  );
}

export default App;