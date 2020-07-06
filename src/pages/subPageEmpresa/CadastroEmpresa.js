import React from 'react';
import '../../styleComponents/empresa.css';
import {Link} from 'react-router-dom';

class CadastroEmpresa extends React.Component{    
    constructor(props){
        super(props)
        this.state = {
            nome : '',
            desc : '',
            logradouro : '',
            numero : '',
            complemento : '',
            bairro : '',
            cidade : '',
            telefone : '',
            catGeral : '',
            catEspecifica : ''
        }
    }
    render(){
        return(
            <div className="divCadastro">
                <h1>Cadastrar estabelecimento</h1>
                <form className="formCadastro">
                    <p>Nome*: <input type="text" id="nome" className="inputTextForm" onChange={(event) => {this.setState({nome : event.target.value})}}/></p>
                    <p>Descrição*: <input type="text" id="desc" className="inputTextForm" onChange={(event) => {this.setState({desc : event.target.value})}}/></p>
                    <p>Logradouro*: <input type="text" id="logradouro" className="inputTextForm" onChange={(event) => {this.setState({logradouro : event.target.value})}}/></p>
                    <p>Número*: <input type="number" id="numero" className="inputTextForm" onChange={(event) => {this.setState({numero : event.target.value})}}/></p>
                    <p> Complemento: <input type="text" id="complemento" className="inputTextForm" onChange={(event) => {this.setState({complemento : event.target.value})}}/></p>
                    <p> Bairro*: <input type="text" id="bairro" className="inputTextForm" onChange={(event) => {this.setState({bairro : event.target.value})}}/></p>
                    <p> Cidade*: <input type="text" id="cidade" className="inputTextForm" onChange={(event) => {this.setState({cidade : event.target.value})}}/></p>
                    <p> Telefone*: <input type="text" id="telefone" className="inputTextForm" onChange={(event) => {this.setState({telefone : event.target.value})}}/></p> 
                    <br/>
                    <p>
                        Categoria geral*:&nbsp; 
                        <select id="selectCategoriaGeral">
                            <option value="entretenimento">Entretenimento</option>
                            <option value="produtos">Venda de Produtos</option>
                            <option value="servicos">Serviços</option>
                        </select>
                    </p>
                    <p>Categoria específica*:&nbsp;
                        <select id="selectCategoriaEspecifica">
                            <option value="restaurante">Restaurante</option>
                            <option value="chopperia">Chopperia</option>
                            <option value="churrascaria">Churrascaria</option>
                            <option value="lgbt">LGBT</option>
                            <option value="pub">Pub</option>
                            <option value="bar">Bar</option>
                            <option value="shopping">Shopping</option>
                            <option value="teatro">Teatro</option>
                            <option value="parque">Parque de diversões</option>
                            <option value="estadio">Estádio</option>
                            <option value="clube">Clube</option>
                            <option value="paintball">Paintball</option>
                            <option value="boliche">Boliche</option>
                            <option value="kart">Kart</option>
                            <option value="skate">Skate</option>
                            <option value="museu">Museu</option>
                            <option value="balada">Balada</option>
                            <option value="resort">Resort</option>
                            <option value="golfe">Golfe</option>
                            <option value="cafeteria">Cafeteria</option>
                            <option value="espeteria">Espeteria</option>
                            <option value="pilates">Pilates</option>
                            <option value="academia">Academia</option>
                            <option value="pizzaria">Pizzaria</option>

                            <option value="carreto">Carreto</option>
                            <option value="pintura">Pintura</option>
                            <option value="floricultura">Floricultura</option>
                            <option value="chaveiro">Chaveiro</option>
                            <option value="lavanderia">Lavanderia</option>
                            <option value="aluguelQuadras">Aluguel de Quadras</option>
                            <option value="design">Design</option>
                            <option value="funeraria">Funerária</option>
                            <option value="musica">Música</option>
                            <option value="veterinaria">Veterinária</option>
                            <option value="hotel">Hotel</option>
                            <option value="psicologo">Psicologia</option>
                            <option value="tatuagem">Tatuagem</option>
                            <option value="fisioterapia">Fisioterapia</option>
                            <option value="podologia">Podologia</option>
                            <option value="salaoBeleza">Salão de Beleza</option>
                            <option value="dentista">Dentista</option>
                            <option value="otica">Otica</option>
                            <option value="nutricionsta">Nutricionista</option>
                            <option value="cabelereiro">Cabelereiro</option>
                            <option value="terapeuta">Terapeuta</option>
                            <option value="personal">Personal Trainer</option>
                            <option value="dermatologia">Dermatologia</option>
                            <option value="ONG">ONG</option>
                            <option value="confeiteraria">Confeiteraria</option>
                            <option value="imobiliaria">Imobiliária</option>
                            <option value="buffet">Buffet</option>

                            <option value="eletrica">Elétrica</option>
                            <option value="construcao">Construção</option>
                            <option value="supermercado">Supermercado</option>
                            <option value="alimenticios">Alimentícios</option>
                            <option value="suplementos">Suplementos</option>
                            <option value="acougue">Açougue</option>
                            <option value="cosmeticos">Cosméticos</option>
                            <option value="gamer">Gamer</option>
                            <option value="informatica">Informática</option>
                            <option value="moveis">Móveis</option>
                            <option value="imoveis">Imóveis</option>
                            <option value="eletrodomesticos">Eletrocomésticos</option>
                            <option value="fitness">Fitness</option>
                            <option value="clinicos">Clínicos</option>
                            <option value="musicais">Musicais</option>
                            <option value="agro">Agro</option>
                            <option value="infantis">Infantis</option>
                            <option value="moda">Moda</option>
                            <option value="beleza">Beleza</option>
                            <option value="jardinagem">Jardinagem</option>
                            <option value="decoracao">Decoração</option>
                            <option value="esportivos">Esportivos</option>
                            <option value="automoveis">Automóveis</option>
                        </select>
                    </p>
                    <Link to={`/getDadosCadastro/${this.state.nome}/${this.state.desc}/${this.state.logradouro}/${this.state.numero}/${this.state.complemento}/${this.state.bairro}/${this.state.cidade}/${this.state.telefone}`}>
                        <input type="button" value="Confirmar" id="botaoConfirmar" />
                    </Link>
                    <Link to="/empresa">    
                        <input type="button" value="Voltar" id="botaoVoltar"/>
                    </Link>
                </form>
            </div>
        );
    }    
}
export default CadastroEmpresa;