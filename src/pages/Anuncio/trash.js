<Grid container spacing={2}>
  <Grid item xs={8}>
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {anuncio.nome}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="cart">
            <Link to="/carrinho">
              <ShoppingCartIcon sx={{ height: 38, width: 38 }} />
            </Link>
          </IconButton>
          <Link to="/compra">
            <Button variant="contained">Comprar</Button>
          </Link>
          <Card>
            <CardContent>
              {anuncio.topico
                ? anuncio.topico.map((topico) => {
                    return <Typography>{topico.texto}</Typography>;
                  })
                : ""}
            </CardContent>
          </Card>
          {/* <Typography variant="body2" color="text.secondary">
                        {anuncio.topico[0].texto}
                    </Typography> */}
        </Box>
      </Box>
      <CardImage anuncio={anuncio} />
    </Card>
  </Grid>
</Grid>;
