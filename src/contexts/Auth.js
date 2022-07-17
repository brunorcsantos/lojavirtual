
import { useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [usuario, setUsuario] = useState(null); //_id, nome, email, imagem, token
  const [avatar, setAvatar] = useState();
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    function loadStorage(){
      const storageUser = localStorage.getItem('AuthUser');

      if(storageUser){
        let user = JSON.parse(storageUser);
        setUsuario(user.usuario);
        setLoading(false);
      }
  
      setLoading(false);
    }
    
    loadStorage();

  }, [])


  //Fazendo login do usuario
  async function signIn(email, password){
    setLoadingAuth(true);

    await api.post('/usuarios', {emial: email, senha: password})
    .then(async (responseData)=> {

      let data = {
        id: responseData.id,
        nome: responseData.nome,
        email: responseData.user.email,
        token: responseData.token
      };

      setUsuario(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success('Bem vindo de volta!');


    })
    .catch((error)=>{
      console.log(error);
      toast.error('Ops algo deu errado!');
      setLoadingAuth(false);
    })

  }


  //Cadastrando um novo usuario
  async function signUp(email, password, nome){
    setLoadingAuth(true);

    await api.post('/usuarios', {email: email, senha: password, nome: nome})
    .then( async (response)=>{

        let data = {
          id: response.id,
          nome: response.nome,
          email: response.email,
          token: response.token
        };

        setUsuario(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success('Bem vindo a plataforma!');

    })
    .catch((error)=>{
      console.log(error);
      toast.error('Ops algo deu errado!');
      setLoadingAuth(false);
    })

  }



  function storageUser(data){
    localStorage.setItem('AuthUser', JSON.stringify(data));
  }



  //Logout do usuario
  async function signOut(){
    localStorage.removeItem('AuthUser');
    setUsuario(null);
  }


  return(
    <AuthContext.Provider 
    value={{ 
      signed: !!usuario,  
      usuario,
      avatar, 
      loading, 
      signUp,
      signOut,
      signIn,
      loadingAuth,
      setUsuario,
      setAvatar,
      storageUser
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
