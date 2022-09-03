import React from 'react'
import ItemCount from './ItemCount';



const Item = ({title, img}) => {
  return (
    <article>
        <h3>{title}</h3>

        <img src={img} alt="" style ={{width:"15rem"}} />
        <ItemCount/>
    </article>
  )
}

export default Item;