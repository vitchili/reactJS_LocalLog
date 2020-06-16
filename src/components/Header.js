import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <header className="cabecalho">
            <ul>
                <Link to="/"><li className="itemCabecalho">Início</li></Link>
                <Link to="/contato"><li className="itemCabecalho">Contato</li></Link>
                <li className="itemCabecalho">Como funciona</li>
                <Link to="/login"><li className="itemCabecalho">Login</li></Link>
            </ul>
        </header>
    );
}

export default Header;