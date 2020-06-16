import React from 'react';
import userSenhas from '../backend/userPass.json';
import '../styleComponents/cliente.css';
import Empresa from '../pages/Empresa';
import Header from '../components/Header';
import VerticalHeader from '../components/VerticalHeader';
import { Redirect } from 'react-router-dom';

class Autenticate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : this.props.match.params.user,
            password : this.props.match.params.password
        };
    }
    componentDidMount() {
        
    }
    valida(){
        var validador = false;
        for(let i=0; i<userSenhas.usersPass.length; i++){
            if(userSenhas.usersPass[i].user === this.state.user && userSenhas.usersPass[i].password === this.state.password){
                validador = true;
                i = userSenhas.usersPass.length-1;
            }
        }
        return validador;
    }
    render(){   
        if(this.valida()){
            return(
                <div>
                    <Empresa />
                    <Header />
                    <VerticalHeader />
                </div>     
            );
        }else{
            alert("Usuario ou senha incorretos.")
            return(
                <Redirect to={{pathname: "/login"}}/>
            );
        }
        
    }    
}
export default Autenticate;