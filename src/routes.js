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
import Footer from './common/footer/Footer';
import Perfil from './pages/Perfil/perfil';
import CriarAnuncio from './pages/CriarAnuncio/CriarAnuncio';
import MeusAnuncios from './pages/MeusAnuncios/MeusAnuncios';
import Carrinho from './pages/Carrinho/Carrinho'






function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                
                <Route path="/" element={ <Home/> } />
                <Route path='/anuncios' element={ <Anuncios/> } />
                <Route path='/anuncios/:id_anuncio' element={ <Anuncio/> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='/produtos' element={ <Produtos/> } />
                <Route path='/produtos/:id_produto' element={ <Produto/> } />
                <Route path='/cadastro' element= { <Cadastro/> } />
                <Route path='/endereco' element= { <Endereco/> } />
                
                <Route path='/perfil' element= { <Perfil/> } />
                <Route path='/CriarAnuncio' element= { <CriarAnuncio/> } />
                <Route path='/MeusAnuncios' element= { <MeusAnuncios/> } />
                <Route path='/carrinho' element = {<Carrinho/>}/>
                
                <Route path='*' element={<Erro/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;