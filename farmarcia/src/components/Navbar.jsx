import React from 'react'
import './Navbar.css'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='Navbar-container'>
      <div className='logoPequena'><Logo/></div>
      <h1>Farmárcia</h1>
      <button className='Home'>Home</button>
      <button className='Sobre'>Sobre</button>
      <button className='Produtos'>Produtos</button>
      <button className='Servicos'>Serviços</button>
    </div>
  )
}

export default Navbar