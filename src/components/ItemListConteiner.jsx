import React from 'react';
import { useState , useEffect } from 'react';
import itemJson from "../myItems.json";
import ItemList from "./ItemList";

/*PARA BOTON 

  const ItemListConteiner = ( {texto} ) => {

  const onAdd = (quantity) => {
    console.log("Compraste ${quantity} unidades");
  }

  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  );
} */

const ItemListConteiner = () => {
  const [items, setItems] = useState([])

    const getItems = (data, time) => 
      new Promise ((resolve, reject)=>{
        setTimeout (()=>{
          if  (data) {
            resolve(data);
          } else{
            reject("Error");
          }
        }, time);
      });

    useEffect (()=>{
      getItems(itemJson, 2000).then((res)=>{
        setItems(res)
      }).catch((err)=> console.log(err, ": No hay items"))
    }, []);



    return  <div>
      <ItemList items={items} />
    </div>;

  
}

export default ItemListConteiner;