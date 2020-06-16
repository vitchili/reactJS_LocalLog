import React from 'react';
import '../styleComponents/empresa.css';
import cadastroImage from '../images/cadastrarEstabelecimento-min.png';
import modificarImage from '../images/modificarEstabelecimento-min.png';
import estatisticaImage from '../images/estatisticaEstabelecimento-min.png';
import { Link } from 'react-router-dom';
const Empresa = () => {
    return(
        <div className="enterpriseMode">
            {/*Aqui terao 3 routers. 1 para cadastro, 1 para modificar empresa e outra para ver estatísticas*/ }
            
            <ul>
                <li className="acaoEnterprise">
                    <Link to="/empresa/cadastro"><img src={cadastroImage} alt="cadastroImg" className="acoesImgEmpresa"/></Link>
                </li>
                <li className="acaoEnterprise">
                    <img src={modificarImage} alt="modificarImg" className="acoesImgEmpresa"/>
                </li>
                <li className="acaoEnterprise">
                    <img src={estatisticaImage} alt="estatisticaImg" className="acoesImgEmpresa"/>
                </li>
            </ul>
        </div>
    );
}
export default Empresa;
