import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../../services/api';
import './produto.css'




function Produto(){
    const{ id } = useParams();
    const [produto, setProduto] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadProduto(){
            await api.get(`/produtos/${id}`)
            .then((response) => {
                setProduto(response.data);
                setLoading(false);
            }).catch(() => {
                console.log("Produto não encontrado!")
            });
        }
        loadProduto();

        return() => {
            console.log("Componente foi desmontado!")
        }
    }, [])
    
    if(loading){
        return(
            <div className='produto-info'>
                <h1>Carregando Produto...</h1>
            </div>
        )
    }
    
    
    return(
        <div className='produto-info'>
            <h1>{produto.nome}</h1>
            <img src='https://quatrorodas.abril.com.br/wp-content/uploads/2018/02/chevrolet-prisma-advantage.jpg?resize=650,433' alt={produto.nome} className='img' />
            <div className='tabela-produto'>
                <h3>Características</h3> <hr/>
                <span className='caracteristicas'>{produto.caracteristica}</span> <hr/>
                <span className='categoria'>Categoria: {produto.categoria}</span> <hr/>
                <span className='sub-categoria'>Sub-categoria: {produto.sub_categoria}</span> <br/>
            </div>
            
        </div>
    )
}

export default Produto;