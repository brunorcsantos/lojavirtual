import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Anuncios from './pages/Anuncios';
import Login from './pages/Login';
import Anuncio from './pages/Anuncio';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Erro from './pages/Erro';
import Header from './common/header/Header';
import Cadastro from './pages/Cadastro';
import Endereco from './pages/Endereco';
import Cart from './pages/Endereco';




function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/anuncios' element={ <Anuncios/> } />
                <Route path='/anuncio/:id' element={ <Anuncio/> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='/produtos' element={ <Produtos/> } />
                <Route path='/produto/:id' element={ <Produto/> } />
                <Route path='/cadastro' element= { <Cadastro/> } />
                <Route path='/endereco' element= { <Endereco/> } />
                <Route path='/cart' element= { <cart/> } />

                
                <Route path='*' element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;