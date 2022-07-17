// import './login.css';
import { useEffect, useState } from 'react';
// import logo from '../../assets/carrinho.png';
import api from '../../services/api';
import axios from 'axios';

function GoogleLogin(){

  async function handleCallbackResponse(response) {
    console.log(response);
    let resGoogle = await axios.post('https://oauth2.googleapis.com/tokeninfo?id_token=' + String(response.credential));

    let perfil = {nome: resGoogle.data.name, email: resGoogle.data.email, imagem: resGoogle.data.picture, google: true};

    let resapi = await api.post("/login/google/" + String(response.credential));

    if(resapi.status == 200){
        localStorage.setItem({token: resapi.data, perifl: perfil});
    }
  }


  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "189992687297-pk6qd1toijahev3tgmlsq4nb4sb729ma.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {type: "icon", theme: "filled_black", shape: "pill"}
    )
  });


  return(
    <div >
        <div id='signInDiv'/>
      
    </div>
      
  )
}

export default GoogleLogin;