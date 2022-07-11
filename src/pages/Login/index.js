import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../../assets/carrinho.jpg';

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className='container-center'>
            <div className='login'>
                <div className='logo-area'>
                    <img src={logo} alt='Siatema Logo'/>
                </div>
                <form>
                    <h1>Entrar</h1>
                    <input type='text' placeholder='email@email.com'/>
                    <input type='password' placeholder='*******'/>
                    <button type='submit'>Acessar</button>
                </form>
                <Link to='/cadastro'>Criar uma conta</Link>
            </div>

        </div>
    );
}

export default Login;