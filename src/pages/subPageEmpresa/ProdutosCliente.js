import React from 'react';
import '../../styleComponents/cliente.css';
import someData from '../../backend/locais_produtos.json';

class ProdutosCliente extends React.Component {
    render(){
        let rows = []
        for(let i=0; i<5; i++){
          rows.push(<div>
            <hr/>
            <h1 className="tituloEstabelecimento">{someData.locais_produtos[i].nome}</h1>
            <h2>{someData.locais_produtos[i].descricao}</h2>
            <small>
                <p className="paragrafoEstabelecimentos">Endereço:&nbsp;
                {someData.locais_produtos[i].logradouro}, nº: {someData.locais_produtos[i].numero}, compl: {someData.locais_produtos[i].complemento}&nbsp;
                Bairro: {someData.locais_produtos[i].bairro}. Cidade: {someData.locais_produtos[i].cidade}</p>
            </small>
            
            <p className="paragrafoEstabelecimentos">
                Telefone: {someData.locais_produtos[i].telefone}
            </p>
            <p className="paragrafoEstabelecimentos">
                Categoria geral: {someData.locais_produtos[i].categoria_geral}<br/>
                Categoria específica: {someData.locais_produtos[i].categoria_especifica}<br/>
                Segunda categoria: {someData.locais_produtos[i].categoria_especifica2}
            </p>
            <hr/>
        </div>)
        }
        return (
          <div className="pageEstabelecimentos">
              {rows}
          </div>
        )
      }

}
export default ProdutosCliente;