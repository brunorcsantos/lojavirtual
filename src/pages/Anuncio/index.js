import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../services/api";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ImageComponent from "../../components/Image/ImageComponent";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Anuncio() {
  const { id_anuncio } = useParams();
  const [value, setValue] = React.useState(2);
  const [anuncio, setAnuncio] = useState({
    _id: "",
    nome: "",
    preco: 0,
    autor: "",
    produto: "",
    avalizacoes: [],
    topico: [
      {
        texto: "",
        autor: "",
        _id: "",
        comentario: [],
        data: "",
      },
    ],
  });

  const [produto, setProduto] = useState({});

  const theme = useTheme();

  useEffect(() => {
    async function loadAnuncio() {
      await api
        .get(`/anuncios/${id_anuncio}`)
        .then((response) => {
          setAnuncio(response.data);
          console.log(response.data);
        })
        .catch(() => {
          console.log("Anúncio não encontrado");
        });
    }
    loadAnuncio();
  }, []);

  //   const addToCart = () =>

  const teste = anuncio;

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container justify="flex-start" spacing={2} wrap="wrap">
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           
            <ImageComponent tipo={'produtos'} id={anuncio.produto}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {anuncio.nome}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <Rating name="read-only" value={value} readOnly />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Id usuário:{anuncio.autor}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <IconButton aria-label="cart">
                  <Link to="/carrinho">
                    <ShoppingCartIcon sx={{ height: 38, width: 38 }} />
                  </Link>
                </IconButton>
              </Typography>
            </Grid>

            <Grid item xs>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <Button variant="contained" endIcon={<AttachMoneyIcon />}>
                  Comprar
                </Button>
              </Typography>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button>-</Button>
                <Button>2</Button>
                <Button>+</Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="subtitle1" component="div">
              R${anuncio.preco}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Anuncio;
