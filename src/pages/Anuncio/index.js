import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api'
import { Paper } from '@material-ui/core';
import { Box } from '@mui/system';


function Anuncio(){
    const {id_anuncio} =useParams();
    const [anuncio, setAnuncio] = useState({})
    const [loading, setLoading] = useState(true)
    const [produto, setProduto] = useState({})

    useEffect(() => {
        async function loadAnuncio(){
            await api.get(`/anuncios/${id_anuncio}`)
            .then((response)=> {
                setAnuncio(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log(("Anúncio não encontrado"))
            })
        }
        loadAnuncio();
    })

    

    if(loading){
        return(
            <div>
                <h1>Carregando detalhes do Anuncio. Aguarde...</h1>
            </div>
        )
    }
    
    return(
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 'auto',
          width: 600,
          height: 400,
          marginTop: 5,
          marginBottom: 5,
        },
      }}
    >
      <Paper elevation={8} />
    </Box>
    )
}

export default Anuncio;