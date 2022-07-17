import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
          <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/anuncios'>Anúncios</Link>
              </li>
              <li>
                <Link to='/produtos'>Produtos</Link>
              </li>
              <li>
                <Link to='/perfil'>Perfil</Link>
              </li>
              <li>
                <Link to='/compras'>Pedidos</Link>
              </li>
              <li>
                <Link to='/CriarAnuncio'>Anuncie</Link>
              </li>
              <li>
                <Link to='/MeusAnuncios'>Meus Anuncios</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
