import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  api  from '../../services/api';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Produtos(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function getProdutos() {
            const response = await api.get('/produtos');
            setProdutos(response.data)
          }
          getProdutos();
    
      
    })
    

    return(
        <div className='container'>
            {produtos.map((produto) => {
                return(
                    <Card sx={{ maxWidth: 345,
                    display: 'inline-block',
                    margin: 4 }} >
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://autolivraria.com.br/bc/wp-content/uploads/2016/07/Chevrolet-Prisma-01.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {produto.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {produto.caracteristica}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/anuncios/:id_produto">
                            <Button size="small">Anuncios</Button>
                            </Link>
                            <Link to="/produto/:id_produto">
                            <Button size="small">Saiba mais</Button>
                            </Link>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default Produtos;



