import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import './MyCourses.css'


export default function MyCourses() {
  const [word,setWord] = useState("")
  const { user } = useContext(AuthContext)
  
  
  // <span className='action update'><a href={link+'.png'}>save</a></span>
  const Ligne = ({index,name , author , category , part, link}) =>{

    return(
      <tr className ="tr">
        <td className ="tr">{index}</td>
        <td className ="tr">{name}</td>
        <td className ="tr">{author}</td>
        <td className ="tr">{category}</td>
        <td className ="tr">{part}</td>
        <td className='Actions'>
          
          <button className='action update'><a href={link+ '.png'}>Save</a></button>
        </td>                                                                         
      </tr>
    )
  }
 
 /*  const key = ["name" , "capacite" , "faculte"]
  const data =[]
  const Search = (data) =>  {
       return (
              data.filter((items) => 
                key.some((key) => items[key].toLowerCase().includes("word"))
              )
       )
     }

     
  console.log(user && user.courses) */
  
  var i = 0
  
  return (
    <div className='MyCourses'>
         {/* <div className='Search'>
              <input type="search" name="" placeholder='Find your subject' id="" className='inputSearch' onChange={(e)=>setWord(e.target.value)}/>
              <button className="SearchButton">Search</button>
          </div> */}

          <table className="Table">
            <thead>
              <tr className ="tr">
                <th className ="th"></th>
                <th className ="th">Formations</th>
                <th className ="th">Auteur</th>
                <th className ="th">Categorie</th>
                <th className ="th">Part</th>
                <th className ="th">Telecharger</th>
              </tr> 
            </thead>
                                                                                      
            <tbody>
              { 
                user && user.courses.map(element => (
                  
                    element.part.map(item => (
                      
                      <Ligne key={i++} index = {i} name = {element.name} author = {element.creator} category = {element.category} part = {item.name} link = {item.link} /> 
                    )
                  )
                )
              )
              }
            </tbody>
                 
            
          </table>
    </div>
  )
}
