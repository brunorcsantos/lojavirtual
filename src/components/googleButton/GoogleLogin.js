// import './login.css';
import { useContext, useEffect, useState } from 'react';
// import logo from '../../assets/carrinho.png';
import api from '../../services/api';
import axios from 'axios';
import { AuthContext } from '../../contexts/Auth';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

function GoogleLogin(){
  const {googleLogin} = useContext(AuthContext);
  let navigate = useNavigate()


  async function logar(response){
    console.log(response);
    
    if(response != undefined){
        googleLogin(response)
        .then( (resposta) => {
          if(resposta == 200){
            toast.success('Bem vindo de volta!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            navigate('/');
          }
        }).catch((err) => {
          toast.error('Ops algo deu errado!');
        })
      }
  }


  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "189992687297-pk6qd1toijahev3tgmlsq4nb4sb729ma.apps.googleusercontent.com",
      callback: logar
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {type: "icon", theme: "filled_black", shape: "pill"}
    )
  }, []);


  return(
    <div >
        <div id='signInDiv'/>
      
    </div>
      
  )
}

export default GoogleLogin;