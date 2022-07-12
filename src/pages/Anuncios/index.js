import { useEffect, useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/carrinho.png';
import { Link } from 'react-router-dom'



function Anuncios(){
    const[anuncios, setAnuncios] = useState([]);
    
    useEffect(() => {

        async function getAnuncios(){
            const response = await api.get("/anuncios")
            setAnuncios(response.data);
        }        
        getAnuncios();
        
        
    });

    
    
     
 
    
    
    return(
        <div className='container'>
            <div className='lista-anuncios'>
                {anuncios.map((anuncio, index) => {
                    return(
                        <article key={index}>
                            <strong>{anuncio.nome}</strong>
                            <img src={logo} />
                            <Link to={`/anuncio/${anuncio._id}`}>Acessar Anuncio</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}


export default Anuncios;