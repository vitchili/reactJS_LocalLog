import React from 'react';
import '../styleComponents/empresa.css';
import cadastroImage from '../images/cadastrarEstabelecimento-min.png';
import modificarImage from '../images/modificarEstabelecimento-min.png';
import { Link } from 'react-router-dom';

const Empresa = () => {
    return(
        <div className="enterpriseMode">
            <ul>
                <li className="acaoEnterprise">
                    <Link to="/empresa/cadastro"><img src={cadastroImage} alt="cadastroImg" className="acoesImgEmpresa"/></Link>
                </li>
                <li className="acaoEnterprise">
                    <img src={modificarImage} alt="modificarImg" className="acoesImgEmpresa"/>
                </li>
            </ul>
        </div>
    );
}
export default Empresa;