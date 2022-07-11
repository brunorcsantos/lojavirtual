import { useState } from 'react';
import { Link } from 'react-router-dom';
import './endereco.css';
import logo from '../../assets/carrinho.png';

function Endereco(){
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    return(
        <div className='container-center'>
            <div className='endereco'>
                <div className='endereco-area'>
                    <img src={logo} alt='Sistema Logo'/>
                </div>
                <form>
                    <h1>Preecha seu enredeço</h1>
                    <input type='text' placeholder='Nome da rua, av, estrada, etc...' value={rua} onChange={ (e) => setRua(e.target.value) }/>
                    <input type='text' placeholder='Número' value={numero} onChange={ (e) => setNumero(e.target.value) }/>
                    <input type='text' placeholder='Complemento' value={complemento} onChange={ (e) => setComplemento(e.target.value) }/>                
                    <input type='text' placeholder='Cep' value={cep} onChange={ (e) => setCep(e.target.value) }/>
                    <input type='text' placeholder='Cidade' value={cidade} onChange={ (e) => setCidade(e.target.value) }/>
                    <input type='text' placeholder='Estado' value={estado} onChange={ (e) => setEstado(e.target.value) }/>
                    <button type='submit'>Confirmar</button>
                </form>
            </div>

        </div>
    );
}

export default Endereco;