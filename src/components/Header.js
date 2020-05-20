import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <header className="cabecalho">
            <ul>
                <Link to="/"><li className="itemCabecalho">Início</li></Link>
                <li className="itemCabecalho">Contato</li>
                <li className="itemCabecalho">Como funciona</li>
                <li className="itemCabecalho">Login</li>
            </ul>
        </header>
    );
}

export default Header;