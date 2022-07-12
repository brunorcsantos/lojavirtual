import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Anuncios from './pages/Anuncios';
import Login from './pages/Login';
import Anuncio from './pages/Anuncio';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import Erro from './pages/Erro';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';
import Footer from './components/Footer/footer';







function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/anuncios' element={ <Anuncios/> } />
                <Route path='/anuncio/:_id_anuncio' element={ <Anuncio/> } />
                <Route path='/login' element={ <Login/> } />
                <Route path='/produtos' element={ <Produtos/> } />
                <Route path='/produto/:id' element={ <Produto/> } />
                <Route path='/cadastro' element= { <Cadastro/> } />

                
                <Route path='*' element={<Erro/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;