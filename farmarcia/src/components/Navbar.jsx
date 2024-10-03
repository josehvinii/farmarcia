import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar-container'>
      <img className='logoPequena' src="./images/farmarcia-logo-pq.avif" alt=""  />
      <h1>Farmárcia</h1>
      <button className='Home'>Home</button>
      <button className='Sobre'>Sobre</button>
      <button className='Produtos'>Produtos</button>
      <button className='Servicos'>Serviços</button>
    </div>
  )
}

export default Navbar