import { useState, createContext, useEffect, useContext } from 'react';
import Anuncio from '../pages/Anuncio';
import api from '../services/api'
import { AuthContext } from './Auth';


export const CarrinhoContext = createContext({});

function CarrinhoProvider({children}){
  const [idUsuario, setIdUsuario] = useState('');
  const [anuncios, setAnuncios] = useState([]);
  const [preco_total, setPrecoTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { usuario } = useContext(AuthContext);

  useEffect(()=>{

    function loadCarrinho(){
        if(usuario != null){
            api.get('/carrinhos/' + usuario.id)
            .then( (response) => {

                let carrinho = response.data;

                setPrecoTotal(carrinho.preco_total);
                setIdUsuario(carrinho.comprador);
                setAnuncios(carrinho.anuncios);
            } )
            .catch( (err) => {
                console.log(err)
            })
        
        setLoading(false);
        }
    }
    
    loadCarrinho();
  }, [])


  function difference(a, b) {
    return Math.abs(a - b);
  }

  const pushCarrinho = function adicionarCarrinho(anuncio, quantidade){
    // let listAnuncio = anuncios;
    // let possuiNoCarrinho = false;

    const config = {
        headers : {authorization: usuario.token}
    }

    const requisicao = api.post('/carrinhos/' + usuario.id, {anuncio: anuncio, quantidade: quantidade}, config)
    .then( (response) => {

        let carrinho = response.data;

        setPrecoTotal(carrinho.preco_total);
        setIdUsuario(carrinho.comprador);
        setAnuncios(carrinho.anuncios);
        return response.status;
    } )
    .catch( (err) => {
        console.log("Adcionar carrino");
    } )

    // let i = 0;
    // while(i < listAnuncio.lenght && possuiNoCarrinho == false){
    //     if(listAnuncio[i]._id == anuncio._id){
    //         possuiNoCarrinho = true;
    //     }
    //     i++;
    // }

    // if(possuiNoCarrinho == true){
    //     listAnuncio[i-1].quantidade = 
    //         this.difference(parseInt(listAnuncio[i-1].quantidade), parseInt(quantidade));
    // }else if(possuiNoCarrinho == false ){
    //     let ObjsAnuncio = {
    //         _id: anuncio._id,
    //         nome: anuncio.nome,
    //         preco: anuncio.preco,
    //         autor: anuncio.autor,
    //         produto: anuncio.produto,
    //         quantidade: quantidade
    //     }

    //     listAnuncio.push(ObjsAnuncio);
    // }

    // setAnuncios(listAnuncio);

    return requisicao;
  }

  const deleteCarrinho = function retirarCarrinho(id_anuncio){
    // let listAnuncio = anuncios;
    // let possuiNoCarrinho = false;

    const config = {
        headers : {authorization: usuario.token}
    }

    const requisicao = api.delete('/carrinhos/' + usuario.id + '/anuncio/' + id_anuncio, config)
    .then( (response) => {

            let carrinho = response.data;

        setPrecoTotal(carrinho.preco_total);
        setIdUsuario(carrinho.comprador);
        setAnuncios(carrinho.anuncios);
        return response.status;

    } )
    .catch( (err) => {
        console.log("Adcionar carrino");
    } )

    return requisicao;
  }

  


  return(
    <CarrinhoContext.Provider value={{ 
           setAnuncios,
           deleteCarrinho,
           pushCarrinho,
           anuncios,
           preco_total,
           loading
         }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export default CarrinhoProvider;