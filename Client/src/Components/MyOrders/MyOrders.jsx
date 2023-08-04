import React, { useState } from 'react'
import './MyOrders.css'


export default function MyOrders() {



  const [word,setWord] = useState("")


  const Ligne = ({data}) =>{

    return(
      <tr className ="tr">
        <td className ="tr">Developemment web</td>
        <td className ="tr">Dr Aura</td>
        <td className ="tr">Web et Applications</td>
        <td className ="tr">$18</td>
        <td className='tr'>10 jiun 2023</td>                                                                         
      </tr>
    )
  }
 
  const key = ["nom" , "capacite" , "faculte"]
  const data =[]
  const Search = (data) =>  {
       return (
              data.filter((items) => 
                key.some((key) => items[key].toLowerCase().includes("word"))
              )
       )
     }
  




  return (
    <div className='Orders'>

          <table className="Table">
              <tr className ="tr">
              <th className ="th">Formations</th>
              <th className ="th">Auteur</th>
              <th className ="th">Categorie</th>
              <th className ="th">Prix</th>
              <th className ="th">Date d'achat</th>                                                           
            </tr>
                 
            <Ligne/>
            <Ligne/>
            <Ligne/>
            <Ligne/>
            <Ligne/>
            <Ligne/>
            <Ligne/>
            <Ligne/>
          </table>
    </div>
  )
}
