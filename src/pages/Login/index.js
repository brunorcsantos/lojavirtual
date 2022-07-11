import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useEffect } from 'react';

function Login(){
    function handleCallbackResponse(response) {
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
        {theme: "outline", size: "large"}
      )
    });
    return(
        <div id="signInDiv"></div>
    )
}

export default Login;