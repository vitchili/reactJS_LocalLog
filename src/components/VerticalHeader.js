import React from 'react';
import logoPNG from '../images/logoIcon.png';
import iconCliente from '../images/iconCliente.png';
import iconEmpresa from '../images/iconEmpresa.png';
import logoFace from '../images/icon-face.png';
import logoInsta from '../images/icon-insta.png';
import logoWhats from '../images/icon-wpp.png';
import { Link } from 'react-router-dom';
class VerticalHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nomePesq : '',
            filtradoPor : '',
            userDigitado : '',
            senhaDigitada : '',
            dadosOficiaisUserPass : ''
        }
    }
    getDadoPesquisa = (event) => {
        this.setState({nomePesq : event.target.value})
    }

    getFiltroPesquisa = (event) => {
        this.setState({filtradoPor : event.target.value})
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
                    <li id="pesquisar"><br/>Pesquisar >
                        <ul>
                            <li id="independente" className="itemVerticalHeader">
                                <p className="tituloPesq">Pesquisar</p>
                                <p>Buscar: <br/>Locais, Produtos e Serviços: <input type="text" className="inputText" id="inputText"  onChange={(event) => {this.getDadoPesquisa(event)}} /></p>
                                <p className="filtro">                    
                                    Filtrar por:<br/>
                                    <input type="radio" id="nome" name="filtro"/>
                                        <label htmlFor="nome">Nome</label><br/>
                                    <input type="radio" id="catGeral" name="filtro"/>
                                        <label htmlFor="catGeral">Categoria Geral</label><br/>
                                    <input type="radio" id="catEspecifica" name="filtro"/>
                                        <label htmlFor="other">Categoria Específica</label><br/>
                                    <input type="radio" id="preco" name="filtro"/>
                                        <label htmlFor="preco">Preço</label><br/>
                                    <input type="radio" id="localidade" name="filtro"/>
                                        <label htmlFor="localidade">Localidade</label><br/>
                                    <input type="radio" id="catEspecifica" name="filtro"/>
                                        <label htmlFor="other">Público-alvo</label> 
                                    
                                </p>
                                <Link to="/cliente">
                                    <p>
                                        <input type="button" value="Pesquisar" className="botaoPesquisar"/>
                                    </p> 
                                </Link>                         
                            </li>
                        </ul>
                    </li>
                    <li id="empresa" className="itemVerticalHeader">
                        <img src={iconEmpresa} alt="iconEmpresa" className="icon20"/> Empresa      
                    </li>
                    <li id="cadastrar"><br/>Cadastrar/Modificar >
                        <ul>
                            <li className="loginPreCadastro">
                                <p className="tituloPesq">Faça login!</p>
                                <p>Usuário*: <input type="text" className="inputLogin"  onChange={(event) => {this.getUserDigitado(event)}}/></p>
                                <p>Senha*: &nbsp;<input type="password" className="inputLogin"  onChange={(event) => {this.getPassDigitado(event)}}/></p>
                                <br/>
                                <input type="button" value="Cadastrar" className="botaoCadastrar"/>
                                <Link to="/empresa">
                                    <input type="button" value="Confirmar" className="botaoConfirmar" onClick={() => this.validaUserPass()}/>
                                </Link>                            
                            </li>
                        </ul>
                    </li>
                    <li className="redesSociais">
                        <img src={logoFace} alt="facebook" className="logoRedes"/>
                        <img src={logoInsta} alt="instagram" className="logoRedes"/>
                        <img src={logoWhats} alt="whatsapp" className="logoRedes"/>
                    </li>
                </ul>
            </header>
        );
    }
    getUserDigitado = (event) =>{
        this.setState({userDigitado : event.target.value});
        console.log(this.state.userDigitado);
    }

    getPassDigitado = (event) =>{
        this.setState({senhaDigitada : event.target.value});
        console.log(this.state.senhaDigitada);
    }
    //Daqui ate a linha 119 é uma comunicacao com o fake BD em localhost:8081.
    //O proxy foi configurado antes da aplicação iniciar.
    getResponse =  async() => {
        //Aqui supomos uma conexao com BD que acessa os users e passwords
        const response = await fetch('/userPass');
        const body = await response.json();
        if(response.status !== 200){
            throw Error(body.message);
        }
        return body;
    }
    componentDidMount(){
        this.getResponse()
        .then(res =>{
            const someData = res;
            this.setState({ dadosOficiaisUserPass : someData});
        })
    }
    validaUserPass = () => {
        var validado = false;
        for(var i=0;i<5; i++){
            if((this.state.userDigitado === this.state.dadosOficiaisUserPass.usersPass[i].user) && (this.state.senhaDigitada === this.state.dadosOficiaisUserPass.usersPass[i].password)){
                validado = true;
               i=5;
            }
        }
        if(validado === false){
            for(var j=0; j<10; j++){
                alert("Saia da página e tente novamente");
            }
            throw new Error("Usuário ou senha incorretos.");
        }
    }
}

export default VerticalHeader;