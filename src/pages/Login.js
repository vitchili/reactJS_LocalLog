import React from 'react';
import {Link} from 'react-router-dom';
import logoLogin from '../images/logoTIS.png'
import '../styleComponents/login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usuarioDigitado : "",
            passwordDigitado: "",
        /*     user : "usuario",
            password : "123456" */
        }
    }
    render(){
        return(
                <div className="corpoLogin">
                    <img src={logoLogin} id="logoLogin" />
                    <hr/>
                    <form action="/autenticate:teste" method="GET">
                    <ul>
                        <li>
                            <input type="text" placeholder="USERNAME" className="entradaLogin" onChange={(event) => {this.setState({usuarioDigitado : event.target.value})}}/>
                        </li>
                        <li>
                            <input type="password" placeholder="PASSWORD" className="entradaLogin" onChange={(event) => {this.setState({passwordDigitado : event.target.value})}}/>
                        </li>  
                        <li>
                            <Link to={`/autenticate/${this.state.usuarioDigitado}/${this.state.passwordDigitado}`}>
                                <input type="submit" value="LOGIN" className="entradaLogin" id="loginButton" /* onClick={this.validaLogin} *//>
                            </Link>
                        </li>  
                        <li>
                            <input type="checkbox" name="remember" id="rememberLogin"/>
                            <label htmlFor="remember" className="labelLogin">Remember me</label>
                            &nbsp;<small className="forgotLogin">Forgot your password</small>
                        </li>  
                    </ul>
                    </form>
                    <hr/>
                </div>
        );
    }
}
    export default Login;