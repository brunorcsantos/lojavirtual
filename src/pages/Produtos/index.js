import { useEffect, useState } from 'react';
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
                            image="/static/images/cards/contemplative-reptile.jpg"
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
                            <Button size="small">{produto.categoria}</Button>
                            <Button size="small">Saiba mais</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default Produtos;



