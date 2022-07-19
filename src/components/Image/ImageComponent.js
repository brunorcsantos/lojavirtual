import React, { useEffect, useState, useContext } from 'react';
import  api  from '../../services/api';
import CardMedia from '@mui/material/CardMedia';

// const Img = styled("img")({
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%",
//   });

function ImageComponent({tipo, id}){
    const [imagem, setImagem] = useState();
    let isURL = false;
    let feito = false;
    

    useEffect(() => {
        async function getImagem() {
            
            if(feito == false){
                let finalRoute = '';
                if(tipo == 'usuarios'){
                    finalRoute = 'avatar';

                }else if(tipo == 'produtos'){
                    finalRoute = 'imagem';
                }
                console.log('Aqui' + id) 
                api.get('/' + tipo + '/' + id + '/' + finalRoute)
                    .then( response => {
                        console.log(response.data)
                        const base64String = btoa(String.fromCharCode(...new Uint8Array(response.data.img.data.data)));
                        setImagem(base64String)
                        if(response.data.nome == 'urlImage'){
                            isURL = true;
                        }
                        feito = true;
                    })
                    .catch(error => {
                        setImagem("https://autolivraria.com.br/bc/wp-content/uploads/2016/07/Chevrolet-Prisma-01.jpg");
                        isURL = true;
                    })
                }
          }
          getImagem();
    }, [])

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

export default ImageComponent;
