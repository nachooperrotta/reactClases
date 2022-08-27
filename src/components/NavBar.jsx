import React from 'react'
import CartWidget from './CartWidget'
import ItemListConteiner from './ItemListConteiner'

const  NavBar = () => {
  return (
    <div className='navbar'>
      <a href=" / " className='titulo'>Ignacio Perrotta</a>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contactanos</li>
        <li>Sobre nosotros</li>
        <CartWidget/>
        <ItemListConteiner/>
      </ul>
    </div>
    
  )
}

export default NavBar