import { FaCheck, FaHome  } from 'react-icons/fa';
import { Card, Nav } from 'react-bootstrap';
import './SidebarAnalista.css';

function SidebarAnalista() {
  return (
    <>
      <Card className='sidebar'>
      <Card.Body>
        <div className="d-flex flex-column">
          <Nav id="sidebarLink">
            <Nav.Link href="#">
              <FaHome size={20} />
              <span className="sidebar-link-text">HOME</span><br />
            </Nav.Link>
            <Nav.Link href="#"> {/* arquivo AnalistaAprovar.tsx */}
              <div className="d-flex align-items-center">
                <FaCheck size={20} />
                <span className="sidebar-link-text">APROVAR ANÁLISE</span>
              </div>
            </Nav.Link>
          </Nav>
        </div>
        <div className="info-adm">
          <label className="info-adm-label">{`Nome: ${sessionStorage.getItem('nomeAdm')}`}</label>
          <label className="info-adm-label">{`ID: ${sessionStorage.getItem('matriculaAdm')}`}</label>
          <button className='sair'>SAIR</button>
        </div>
      </Card.Body>
    </Card>   
    </> 
  );
};

export default SidebarAnalista;