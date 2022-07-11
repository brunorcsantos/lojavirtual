import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../../assets/carrinho.png';

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Sistema Logo'/>
                </div>
                <form>
                    <h1>Entrar</h1>
                    <input type='text' placeholder='email@email.com' value={email} onChange={ (e) => setEmail(e.target.value) }/>
                    <input type='password' placeholder='*******'/>
                    <button type='submit'>Acessar</button>
                </form>
                <Link to='/cadastro'>Criar uma conta</Link>
            </div>

        </div>
    );
}

export default Login;