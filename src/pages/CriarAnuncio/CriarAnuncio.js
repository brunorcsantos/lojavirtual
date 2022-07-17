import React from 'react';
import './CriarAnuncio.css';
import { Grid, TextField, Button, Card, CardContent, Typography} from '@material-ui/core';
import {useState} from 'react';
import api from "../../services/api"


function App() {
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [sub_categoria, setSub_categoria] = useState('')
    const [caracteristica, setCaracteristica] = useState('')

    async function ReqCriarAnuncio(){


        let jsonBody = {nome: nome, categoria: categoria, sub_categoria: sub_categoria, caracteristica: caracteristica}
        let res = await api.post("/produtos", jsonBody);
        alert(res.data);
    
    }


  return (
    <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">

       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
           
          </Typography> 
            <form>
              <Grid container spacing={1}>

              <Grid item xs={12}>
                  <TextField value={nome} onChange={(e)=> [setNome(e.target.value)]} type="Titulo do Produto" placeholder="Titulo do Produto" label="Titulo do Produto" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value={categoria} onChange={(e)=> [setCategoria(e.target.value)]} type="Categoria" placeholder="Categoria" label="Categoria" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value={sub_categoria} onChange={(e)=> [setSub_categoria(e.target.value)]} type="sub_categoria" placeholder="sub_categoria" label="sub_categoria" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField value={caracteristica} onChange={(e)=> [setCaracteristica(e.target.value)]} label="Caracteristica" multiline rows={4} placeholder="Caracteristica" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button value={nome} onClick={ ReqCriarAnuncio} type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;

