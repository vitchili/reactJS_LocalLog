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
                    <Route path="/cliente/entretenimento">
                        <EntretenimentoCliente /> 
                    </Route>
                    <Route path="/cliente/produtos">
                        <ProdutosCliente /> 
                    </Route>
                    <Route path="/cliente/servicos">
                        <ServicosCliente /> 
                    </Route>
                    <Header />
                    <VerticalHeader />
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
{/*                 <Route path="/autenticate/:user/:password">
                    <Autenticate /> 
                    <Header />
                </Route>
 */}            
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
            </Switch>  
        </Router>
      </div>
    );
  }
}
export default App;
