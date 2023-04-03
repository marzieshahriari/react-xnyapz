import React,{useState} from "react";
import "./style.css";
import {data} from './data';

export default function App() {
  const [name, setName] = useState(data);

  const removeItem = (id)=>{
    let newItem = name.filter((item)=> item.id !== id)
    setName(newItem)
  }
 
  return (
    <>
      {
        name.map((item)=>{
          const {id,name} = item;
          return (
            <div className="list" key={id}>
              <h2>{name}</h2>
              <button className="remove" onClick={()=> removeItem(id)}>remove</button>
            </div>  
          );
        })
         
      }
      <button className="btn" onClick = {()=> setName([])}>clear list</button> 
    </>
  );
}
