/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from './Sidebar';
import './HomeAdm.css'
import { FaList, FaUserFriends, FaTasks, FaRegFileAlt } from 'react-icons/fa';

interface HomeAdmProps {
    name: string;
    email: string;
}

function HomeAdm(props: HomeAdmProps) {

    return (
        <>
            <div>
                <Sidebar name={ props.name } email={ props.email } />

                <h2 className='HomeAdm'>Home</h2><br />
                
                <div className="buttonNavegadores">
                    <a href="#">
                        <button className='buttonAdm'>
                            <FaList size={45}/><br /><br />
                            VER PEDIDOS
                        </button>
                    </a>
                    <a href="#">
                        <button className='buttonAdm'>
                            <FaUserFriends size={45}/><br /><br />
                            COLABORADORES
                        </button>
                    </a>
                    <a href="/CadastroColaborador">
                        <button className='buttonAdm'>
                            <FaRegFileAlt size={45}/><br /><br />
                            CADASTROS
                        </button>
                    </a><br />
                    <a href="#">
                        <button className='buttonAdmER'>
                            <FaTasks size={45} /> <br /><br />
                            ETAPAS DE <br />
                            RECEBIMENTO
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default HomeAdm;