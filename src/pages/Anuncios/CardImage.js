import { useEffect, useState, useContext } from 'react';
import  api  from '../../services/api';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';



function CardImage({anuncio}){
    const [imagem, setImagem] = useState([]);
    


    let count = 0;
    useEffect(() => {
        async function getAnuncios() {
            api.get('/produtos/' + anuncio.produto + '/imagem')
            .then( response => {
                setImagem("https://images2.alphacoders.com/837/837293.jpg");
                console.log(response.data)
                const base64String = btoa(String.fromCharCode(...new Uint8Array(response.data.img.data.data)));
                setImagem(base64String)
                
                
            })
            .catch(error => {
                setImagem("https://autolivraria.com.br/bc/wp-content/uploads/2016/07/Chevrolet-Prisma-01.jpg");
            })
          }
          getAnuncios();
    }, [count])

    return(

            <CardMedia
                component="img"
                
                height="140"
                image= {`data:image/png;base64,${imagem}`}
                alt="green iguana"
            />
    )
}

export default CardImage;

