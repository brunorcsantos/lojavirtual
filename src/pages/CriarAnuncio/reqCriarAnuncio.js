
import { useState } from "react"
import api from "../../services/api"

async function ReqCriarAnuncio(nome, categoria, sub_categoria, caracteristica){


	let jsonBody = {nome: nome, categoria: categoria, sub_categoria: sub_categoria, caracteristica: caracteristica}
    console.log(jsonBody)
	api.post("/produtos", jsonBody);

}

module.exports = ReqCriarAnuncio()



