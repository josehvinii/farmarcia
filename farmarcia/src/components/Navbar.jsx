import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar-container'>
       <div class="logo">Farmárcia</div>
        <ul class="nav-links">
        <img src="./images/farmarcia-logo-pq.avif" alt=""  />
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>
  )
}

export default Navbar