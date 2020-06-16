import React from 'react';
import '../styleComponents/empresa.css';
import '../styleComponents/contato.css';
import {Link} from 'react-router-dom';

const Contato = () => {
    return(
        <div className="divContato">
            <form className="formularioContato">
                <h1>Contato</h1>
                <p>Em caso de dúvidas, sugestões ou reclamações, nos envie uma mensagem!</p>
                <p>Nome*: <input type="text" id="nome" className="inputTextForm"/></p>
                <p>e-mail*: <input type="text" id="email" className="inputTextForm"/></p>
                <p>Título*: <input type="text" id="titulo" className="inputTextForm"/></p>
                <p>Mensagem*: <textarea  rows="7" cols="75" className="textarea"></textarea></p>
                <br/><br/><br/><br/><br/><br/>
                
                <p><input type="submit" value="Confirmar" id="botaoConfirmar"/>
                    <Link to="/">    
                        <input type="button" value="Voltar" id="botaoVoltar"/>
                    </Link>
                </p>
            </form>
        </div>
    );
}
export default Contato;