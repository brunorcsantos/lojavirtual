import { useEffect, useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/carrinho.png';
import { Link } from 'react-router-dom'
import "./produtos.css";



function Produtos(){
    const[produtos, setProdutos] = useState([]);

    useEffect(() => {

        async function getProdutos(){
            const response = await api.get("/produtos")
            setProdutos(response.data);
        }        
        getProdutos();
        
        
    });

    
    
     
 
    
    
    return(
        <div className='container'>
            <div className='lista-produtos'>
                {produtos.map((produto, index) => {
                    return(
                        <article key={index}>
                            <strong>{produto.nome}</strong>
                            <img src={logo} />
                            <Link to={`/produto/${produto._id}`}>Acessar Produto</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Produtos;