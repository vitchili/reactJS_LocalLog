import React from 'react';
import '../styleComponents/cliente.css'
import { Link } from 'react-router-dom';
import entretenimentoImage from '../images/entretenimento.png';
import produtosImage from '../images/produtos.png';
import servicosImage from '../images/servicos.png';
class Cliente extends React.Component{

    
    render(){    
        return(
            <div className="corpoCliente">{/* 
                <h1 className="tituloCliente">Pesquisa de Estabelecimentos</h1> */}
                <ul>
                    <li className="acaoCliente">
                        <Link to="/cliente/entretenimento"><img src={entretenimentoImage} alt="entretenimentoImage" className="acoesImgCliente"/></Link>
                    </li>
                    <li className="acaoCliente">
                        <Link to="/cliente/produtos"><img src={produtosImage} alt="produtosImage" className="acoesImgCliente"/></Link>
                    </li>
                    <li className="acaoCliente">
                        <Link to="/cliente/servicos"><img src={servicosImage} alt="servicosImage" className="acoesImgCliente"/></Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Cliente;
