import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import  api  from '../../services/api';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageComponent from '../../components/Image/ImageComponent';







function Carrinho(){
    const [anuncios, setAnuncios] = useState([]);
    



    
    useEffect(() => {
        async function getAnuncios() {
            const response = await api.get('/anuncios');
            setAnuncios(response.data)
          }
          getAnuncios();
    
      
    }, [])
    
    return(
        <div className='container'>
            {anuncios.map((anuncio) => {
                return(
                    <Card sx={{ maxWidth: 345,
                    display: 'inline-block',
                    margin: 4 }} >
                        
                        
                        <ImageComponent tipo ={'produtos'} id={anuncio.produto}/>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {anuncio.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {anuncio.caracteristica}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            
                            <Button size="small">R$ {anuncio.preco}</Button>
                            
                            <Link to={`/anuncios/${anuncio._id}`}>
                            <Button size="small" >Saiba mais</Button>
                            </Link>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default Carrinho;