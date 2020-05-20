import React from 'react';
import '../../styleComponents/cliente.css';

class EntretenimentoCliente extends React.Component {
    state = {
        nome : "",
        descricao : "",
        logradouro : "",
        numero : "",
        complemento : "",
        bairro : "",
        cidade : "",
        telefone : "",
        categoria_geral : "",
        categoria_especifica : "",
        categoria_especifica2: "",
        foto : ""
    }

    getResponse =  async() => {
        //Aqui supomos uma conexao com BD que acessa os users e passwords
        const response = await fetch('/locais_entretenimento');
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
            this.setDados(0);     
        });
    }

    setDados = (i) => {
        this.getResponse()
        .then(res =>{
            const someData = res;
            this.setState({
                nome : someData.locais_entretenimento[i].nome,
                descricao : someData.locais_entretenimento[i].descricao,
                logradouro : someData.locais_entretenimento[i].logradouro,
                numero : someData.locais_entretenimento[i].numero,
                complemento : someData.locais_entretenimento[i].complemento,
                bairro : someData.locais_entretenimento[i].bairro,
                cidade : someData.locais_entretenimento[i].cidade,
                telefone : someData.locais_entretenimento[i].telefone,
                categoria_geral : someData.locais_entretenimento[i].categoria_geral,
                categoria_especifica : someData.locais_entretenimento[i].categoria_especifica,
                categoria_especifica2: someData.locais_entretenimento[i].categoria_especifica2,
                foto : ""
            });
        });
        console.log(this.state.nome);
    }
    /************************* */
    renderEstabelecimento(i){
        this.setDados(i);
        var conteudo = (
            <div>
                <hr/>
                <h1 className="tituloEstabelecimento">{this.state.nome}</h1>
                <h2>{this.state.descricao}</h2>
                <small>
                    <p className="paragrafoEstabelecimentos">Endereço:&nbsp;
                    {this.state.logradouro}, nº: {this.state.numero}, compl: {this.state.complemento}&nbsp;
                    Bairro: {this.state.bairro}. Cidade: {this.state.cidade}</p>
                </small>
                
                <p className="paragrafoEstabelecimentos">
                    Telefone: {this.state.telefone}
                </p>
                <p className="paragrafoEstabelecimentos">
                    Categoria geral: {this.state.categoria_geral}<br/>
                    Categoria específica: {this.state.categoria_especifica}<br/>
                    Segunda categoria: {this.state.categoria_especifica2}
                </p>
            </div>    
        );
        return conteudo;
      }
      render(){
          //Aqui temos que dar um jeito de imprimir todos estabelecimentos. o return está retornando apenas o primeiro.
          //Quando imprimimos em tela os outros, o state entra em conflito quando mudado. entao n 
          //n da pra imprimir this.renderEstabelecimento(1), 2, 3, etc simultaneamente
        return (
          <div className="pageEstabelecimentos">
              {this.renderEstabelecimento(0)} 
          </div>
        )
      }
    
    /*
    render(){
            var conteudo = (
                <div>
                    <hr/>
                    <h1 className="tituloEstabelecimento">{this.state.nome}</h1>
                    <h2>{this.state.descricao}</h2>
                    <small>
                        <p>Endereço:&nbsp;
                        {this.state.logradouro}, nº: {this.state.numero}, compl: {this.state.complemento}
                        Bairro: {this.state.bairro}. Cidade: {this.state.cidade}</p>
                    </small>
                    
                    <p>
                        Telefone: {this.state.telefone}
                    </p>
                    <p>
                        Categoria geral: {this.state.categoria_geral}<br/>
                        Categoria específica: {this.state.categoria_especifica}<br/>
                        Segunda categoria: {this.state.categoria_especifica2}
                    </p>
                </div>    
            );
            var count = 0;
            return (
            <div className="pageEstabelecimentos">  
              {conteudo}
              <input type="button" onClick={() => this.setDados(count)} />
              {count ++}
            </div>  
        );
    }*/
}
export default EntretenimentoCliente;