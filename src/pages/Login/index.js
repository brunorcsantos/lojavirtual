import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../../assets/carrinho.png';
import GoogleLogin from 'react-google-login';

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const clientId = '427075692444-9ot51bv68ps3k7s3t66mq7d1kr9csppm.apps.googleusercontent.com';

    const responseGoogle = (response) => {
        console.log(response);
      }

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

                <GoogleLogin
                    clientId={clientId}
                    buttonText='Entrar com Google'
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}/>
            </div>

        </div>
    );
}

export default Login;