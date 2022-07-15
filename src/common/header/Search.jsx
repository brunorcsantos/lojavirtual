import React from 'react';
import logo from '../../assets/lobtec_sem-tagline_posi_RGB_148x40.png';
import { Link } from 'react-router-dom'

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt='Sistema Logo'/>
          </div>

          <div className="search-box f_flex">
            <i className = 'fa fa-search'></i>
            <input type="text" placeholder="Procure um item e entre..."/>
            <span> Todas as categorias</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
