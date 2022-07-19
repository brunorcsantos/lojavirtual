import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  api  from '../../services/api';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProdutoProvider from '../../contexts/Produto'
import { ProdutoContext } from '../../contexts/Produto';
import ImageComponent from '../../components/Image/ImageComponent';
import { Box } from '@mui/material';




function Produtos(){
    const [produtos, setProdutos] = useState([]);
    const {setProduto} = React.useContext(ProdutoContext);
    

    useEffect(() => {
        console.log("Funcionou")
        async function getProdutos() {
            const response = await api.get('/produtos');
            setProdutos(response.data)
          }
          getProdutos();
    
      
    },[])
    

    return(
        
        <div className='container'>
            <ProdutoProvider>
            {produtos.map((produto) => {
                return(
                    <Card sx={{ maxWidth: 345,
                    display: 'inline-block',
                    margin: 4 }} >
                        <Box>
                        <ImageComponent tipo={'produtos'} id={produto._id}/>
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {produto.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {produto.caracteristica}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            
                            <Link to={`/anuncios/${produto._id}`}  >
                            <Button size="small">Anuncios</Button>
                            </Link>
                            <Link to={`/produto/${produto._id}`}>
                            <Button size="small">Saiba mais</Button>
                            </Link> 
                        </CardActions>
                    </Card>
                )
            })}
            </ProdutoProvider>
        </div>
        
    )
}

export default Produtos;



