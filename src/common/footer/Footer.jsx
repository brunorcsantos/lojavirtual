import React from "react"
import "./style.css"

function Footer(){
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Lobtec</h1>
            <p>São mais de 35 anos de atuação<br/> no segmento de consultoria de<br/> soluções integradas, sempre<br/> oferecendo serviços de processos<br/> e tecnologia de alta performance.</p>
          </div>

          <div className='box'>
            <h2>Sobre</h2>
            <ul>
              <li>Nossos serviços</li>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Atendimento ao Cliente</h2>
            <ul>
              <li>Help Desk </li>
              <li>Como Comprar </li>
              <li>Rastreie seu Pedido </li>
              <li>Reembolsos</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Entre em contato</h2>
            <ul>
              <li>Rua Vergueiro, 1759 - 2º andar Paraíso São Paulo - SP CEP: 04101-000</li>
              <li>+55 (11) 3135-6090</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
