import './login.css';
import { useEffect, useState } from 'react';
import logo from '../../assets/carrinho.png';
import api from '../../services/api';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function handleCallbackResponse(response) {
    api.post("/login/google/" + String(response.credential));
    localStorage.setItem("Bearer", response.credential)
  }

  function handleCallbackOurResponse(email, password) {
    let response = api.post("/login", {email: email, senha: password});
    localStorage.setItem("Bearer", response)
    console.log(response)
  }

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "427075692444-campojt28g1ovd0c4i1qsqtug9jqvjtu.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {type: "icon", theme: "filled_black", shape: "pill"}
    )
  });




  return(
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt="Sistema Logo" />
        </div>
          <form>
            <h1>Entrar</h1>
            <input type="text" placeholder="email@email.com"/>
            <input type="password" placeholder="********"/>
            <button type='submit' onClick={handleCallbackOurResponse(email, password)}>Acessar</button>
          </form>
          <div id='signInDiv'/>
      </div>
    </div>
      
  )
}

export default Login;