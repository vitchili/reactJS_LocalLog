import React from 'react';
import logoPNG from '../images/logoIcon.png';
import iconCliente from '../images/iconCliente.png';
import iconEmpresa from '../images/iconEmpresa.png';
import { Link } from 'react-router-dom';
class VerticalHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nomePesq : '',
            filtradoPor : '',
            filtroNome : false,
            filtroCatGeral : false,
            filtroCatEspecifica : false,
            filtroLocalidade : false,
            filtroPreco : false,
            filtroPublico : false
        }
    }
    getDadoPesquisa = (event) => {
        this.setState({nomePesq : event.target.value})
        console.log(this.state.nomePesq);
    }
   render(){
        return(
            <header className="headerVertical">
                <img src={logoPNG} alt="logoIcon" className="logoIcon"/>
                <ul className="tabelaHeader">
                    <li id="tituloMode" className="itemVerticalHeader">Modo</li>
                    <li id="cliente" className="itemVerticalHeader">
                        <br/>
                        <img src={iconCliente} alt="iconCliente" className="icon20"/> Cliente
                    </li>
                    <li id="pesquisar"><br/>Pesquisar &gt;
                        <ul>
                            <li id="independente" className="itemVerticalHeader">
                                <p className="tituloPesq">Pesquisar</p>
                                <p>Buscar: <br/>Locais, Produtos e Serviços: <input type="text" className="inputText" id="inputText"  onChange={(event) => {this.getDadoPesquisa(event)}} /></p>
                                <input type="checkbox"/>Entretenimento<br/>
                                <input type="checkbox"/>Produtos<br/>
                                <input type="checkbox"/>Serviços<br/>
                                 
                                <Link to={`/cliente`}>
                                    <input type="button" value="Pesquisar" className="botaoPesquisar"/>
                                </Link>                         
                            </li>
                        </ul>
                    </li>
                    <li id="empresa" className="itemVerticalHeader">
                        <img src={iconEmpresa} alt="iconEmpresa" className="icon20"/> Empresa      
                    </li>
                    <Link to="/login" className="linkLogin">
                    <li id="cadastrar"><br/>Cadastrar/Modificar &gt;</li>
                    </Link>                            
                        
                </ul>
            </header>
        );
    }
}

export default VerticalHeader;