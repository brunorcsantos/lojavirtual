import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>NomeLoja</Link>
            <Link className='anuncios' to='/anuncios'>Anuncios</Link>
            <Link className='produtos' to='/produtos'>Nossos Produtos</Link>
            <Link className='login' to='/login'>Login</Link>
        </header>
    )
}

export default Header;