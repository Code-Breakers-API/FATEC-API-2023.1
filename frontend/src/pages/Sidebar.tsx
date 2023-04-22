/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaHome, FaSearch, FaUsers, FaList, FaEdit } from 'react-icons/fa';
import { Card, Nav } from 'react-bootstrap';
import './Sidebar.css';

function Sidebar() {
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
            <Nav.Link href="#">
              <div className="d-flex align-items-center">
                <FaSearch size={20} />
                <span className="sidebar-link-text">VER PEDIDOS</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <FaUsers size={20} />
              <span className="sidebar-link-text">COLABORADORES</span>
            </Nav.Link>
            <Nav.Link href="#">
              <FaList size={20} />
              <span className="sidebar-link-text">ETAPAS DE RECEBIMENTO</span>
            </Nav.Link>
            <Nav.Link href="#">
              <FaEdit size={20} />
              <span className="sidebar-link-text">CADASTROS</span>
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

export default Sidebar;


