import { Link } from 'react-router-dom';
import './footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Empresa</h4>
                        <ul>
                            <li><Link to="*">Sobre Nós</Link></li>
                            <li><Link to="*">Nossos Serviços</Link></li>
                            <li><Link to="*">Politica de Privacidade</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ajuda</h4>
                        <ul>
                            <li><Link to="*">Atendimento</Link></li>
                            <li><Link to="*">Reclamações</Link></li>
                            <li><Link to="*">Perguntas Frequentes</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Anuncios</h4>
                        <ul>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li><Link to="/anuncios">Anuncios</Link></li>
                            <li><Link to="/categoria">Categorias</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Siga-nos</h4>
                        <div className="social-links">
                           <div>
                                <a href="https://pt-br.facebook.com/"><i class="fab fa-facebook-f"/></a>
                                <a href="https://twitter.com/"><i class="fab fa-twitter"/></a>
                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"/></a>
                                <a href="https://br.linkedin.com/"><i class="fab fa-linkedin"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;