import { useEffect, useState, useContext } from 'react';
import  api  from '../../services/api';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';



function CardImage({anuncio}){
    const [imagem, setImagem] = useState();
    let isURL = false;
    


    let count = 0;
    useEffect(() => {
        async function getAnuncios() {
            api.get('/produtos/' + anuncio.produto + '/imagem')
            .then( response => {
                console.log(response.data)
                const base64String = btoa(String.fromCharCode(...new Uint8Array(response.data.img.data.data)));
                setImagem(base64String)
                if(response.data.nome == 'urlImage'){
                    isURL = true;
                }
                
                
            })
            .catch(error => {
                setImagem("https://autolivraria.com.br/bc/wp-content/uploads/2016/07/Chevrolet-Prisma-01.jpg");
                isURL = true;
            })
          }
          getAnuncios();
    }, [count])

    return(
        <>
        {isURL ?
            <CardMedia
                component="img"
                height="140"
                image= {imagem}
                alt="green iguana"
            />

            :
            <CardMedia
                component="img"
                height="140"
                image= {`data:image/png;base64,${imagem}`}
                alt="green iguana"
            />

        }
        </>
    )
}

export default CardImage;

