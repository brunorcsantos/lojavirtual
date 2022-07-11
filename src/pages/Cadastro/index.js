import { useState } from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css';
import logo from '../../assets/carrinho.png';

function Cadastro(){
    const [email, setEmail] = useState('')
    const [confirma_email, setConfirma_email] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    return(
        <div className='container-center'>
            <div className='cadastro'>
                <div className='cadastro-area'>
                    <img src={logo} alt='Sistema Logo'/>
                </div>
                <form>
                    <h1>Preecha seu cadastro</h1>
                    <input type='text' placeholder='Nome Completo' value={nome} onChange={ (e) => setNome(e.target.value) }/>
                    <input type='text' placeholder='Digite seu email' value={email} onChange={ (e) => setEmail(e.target.value) }/>
                    <input type='text' placeholder='Confirme seu email' value={confirma_email} onChange={ (e) => setConfirma_email(e.target.value) }/>                
                    <input type='text' placeholder='Digite sua senha' value={password} onChange={ (e) => setPassword(e.target.value) }/>
                    <input type='text' placeholder='Confirme sua senha' value={confirm_password} onChange={ (e) => setConfirm_password(e.target.value) }/>
                    <button type='submit'>Confirmar</button>
                </form>
                </div>

            </div>
    );
}

export default Cadastro;