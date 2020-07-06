import React from 'react';
import Header from './components/Header.js';
import VerticalHeader from './components/VerticalHeader.js';
import CorpoIntro from './pages/CorpoIntro.js';
import Cliente from './pages/Cliente.js';
import Empresa from './pages/Empresa.js';
import CadastroEmpresa from './pages/subPageEmpresa/CadastroEmpresa.js'
import EntretenimentoCliente from './pages/subPageEmpresa/EntretenimentoCliente.js'
import ProdutosCliente from './pages/subPageEmpresa/ProdutosCliente.js'
import ServicosCliente from './pages/subPageEmpresa/ServicosCliente.js'
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Contato from './pages/Contato';
import Autenticate from './components/Autenticate';
import ComoFunciona from './pages/ComoFunciona.js';
import GetDadosCadastro from './components/GetDadosCadastro.js';

class App extends React.Component{
  render(){
    return(
      <div className="body">   
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <VerticalHeader />
                    <CorpoIntro />
                    <Footer />
                </Route>
                <Route path="/empresa">
                    <Empresa />
                    <Header /> 
                    <Route path="/empresa/cadastro">
                        <CadastroEmpresa />
                    </Route>
                    <VerticalHeader /> 
                </Route>
                <Route path="/cliente">
                    <Cliente />    
                    <VerticalHeader />
                    <Header />
                    <Route path="/cliente/entretenimento">    
                        <EntretenimentoCliente />
                    </Route>
                    <Route path="/cliente/produtos">
                        <ProdutosCliente />
                    </Route>
                    <Route path="/cliente/servicos">
                        <ServicosCliente />
                    </Route>
                </Route>
                
                <Route path="/login">
                    <Header />
                    <Login />
                    <Footer />
                </Route>
                <Route path="/contato">
                    <Contato />
                    <Header />
                    <Footer />
                </Route>
                <Route path="/como-funciona">
                    <ComoFunciona />
                    <Header />
                    <Footer />
                </Route>
                <Route 
                    exact 
                    path="/autenticate/:user/:password" 
                    location={this.props.location} 
                    render={({ 
                        location, 
                        match 
                    }) => (
                        <Autenticate  match={match} />
                    )} 
                />
                <Route path="/getDadosCadastro">
                    <VerticalHeader />
                <Route 
                    exact 
                    path="/getDadosCadastro/:nome/:desc/:logradouro/:numero/:complemento/:bairro/:cidade/:telefone" 
                    location={this.props.location} 
                    render={({ 
                        location, 
                        match 
                    }) => (
                        <GetDadosCadastro  match={match} />
                    )} 
                />
                    <Header/>
                </Route>
            </Switch>  
        </Router>
      </div>
    );
  }
}
export default App;
