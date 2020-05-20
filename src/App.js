import React from 'react';
import Header from './components/Header.js';
import VerticalHeader from './components/VerticalHeader.js';
import CorpoIntro from './pages/CorpoIntro.js';
import Cliente from './pages/Cliente.js';
import Empresa from './pages/Empresa.js';
import CadastroEmpresa from './pages/subPageEmpresa/CadastroEmpresa.js'
import EntretenimentoCliente from './pages/subPageEmpresa/EntretenimentoCliente.js'
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
                    <VerticalHeader />  
                    <Route path="/empresa/cadastro">
                        <CadastroEmpresa />
                    </Route>
                </Route>
                <Route path="/cliente">
                    <Cliente />
                    <Route path="/cliente/entretenimento">
                        <EntretenimentoCliente /> 
                    </Route>
                    <Header />
                    <VerticalHeader />
                </Route>
                                    
            </Switch>  
        </Router>
      </div>
    );
  }
}
export default App;
