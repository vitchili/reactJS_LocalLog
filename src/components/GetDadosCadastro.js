import React from 'react';
import '../styleComponents/cliente.css';
import someData from '../backend/locais_entretenimento.json';
import Header from '../components/Header'
class GetDadosCadastro extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            nome : this.props.match.params.nome,
            desc : this.props.match.params.desc,
            logradouro : this.props.match.params.logradouro,
            numero : this.props.match.params.numero,
            complemento : this.props.match.params.complemento,
            bairro : this.props.match.params.bairro,
            cidade : this.props.match.params.cidade,
            telefone : this.props.match.params.telefone,
        }
    }
    componentDidMount(){
        console.log('ooi')
    }
    render(){
        let rows = []
        for(let i=0; i<5; i++){
          rows.push(<div>
            <hr/>
            <h1 className="tituloEstabelecimento">{someData.locais_entretenimento[i].nome}</h1>
            <h2>{someData.locais_entretenimento[i].descricao}</h2>
            <small>
                <p className="paragrafoEstabelecimentos">Endereço:&nbsp;
                {someData.locais_entretenimento[i].logradouro}, nº: {someData.locais_entretenimento[i].numero}, compl: {someData.locais_entretenimento[i].complemento}&nbsp;
                Bairro: {someData.locais_entretenimento[i].bairro}. Cidade: {someData.locais_entretenimento[i].cidade}</p>
            </small>
            
            <p className="paragrafoEstabelecimentos">
                Telefone: {someData.locais_entretenimento[i].telefone}
            </p>
            <p className="paragrafoEstabelecimentos">
                Categoria geral: {someData.locais_entretenimento[i].categoria_geral}<br/>
                Categoria específica: {someData.locais_entretenimento[i].categoria_especifica}<br/>
                Segunda categoria: {someData.locais_entretenimento[i].categoria_especifica2}
            </p>
            <hr/>
        </div>)
        }
        return (
          <div className="pageEstabelecimentos">
            <h1 className="tituloEstabelecimento">{this.state.nome}</h1>
            <h2>{this.state.desc}</h2>
            <small>
                <p className="paragrafoEstabelecimentos">Endereço:&nbsp;
                {this.state.logradouro}, nº: {this.state.numero}, compl: {this.state.complemento}&nbsp;
                Bairro: {this.state.bairro}. Cidade: {this.state.cidade}</p>
            </small>
            
            <p className="paragrafoEstabelecimentos">
                Telefone: {this.state.telefone}
            </p>
            <hr/>
              {rows}
          </div>
        )
      }

}    

export default GetDadosCadastro;
