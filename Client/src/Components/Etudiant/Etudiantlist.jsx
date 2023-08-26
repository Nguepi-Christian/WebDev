import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axio_api from '../../axios_conf'
import Topbar from '../Topbar/Topbar'

export default function Etudiantlist() {


    const [data , setData] = useState([])
    const [word,setWord] = useState("")
    const [find,setfind] = useState([])
   
    
    //Delete timetable
    const Delete = async (id) => {
       const data = {
          id : id
       }
       const res = await axio_api.post("/timetable/delete",data)
       console.log(res)
    }
     /* ligne */
     const Ligne = ({data}) =>{
   
       return( 
               <tr className ="tr">
                 <td className ="tr">{data.faculte}</td>
                 <td className ="tr">{data.niveau}</td>
                 <td className ="tr">{data.filiere}</td>
                 <th className ="th">{data.specialite}</th>
                 <th className ="th">{data.semestre}</th>
                 <td className='Actions'>
                   <Link to={"/list/detail/"+data._id}>
                     <button className='action update'>voir</button>
                   </Link>
                 </td>                                                                         
             </tr>
       ) 
     }


      /*end here*/
     const key = ["faculte" , "niveau" , "filiere" , "specialite" ,"semestre" ]
     //charger les emplois de temps disponible 
     useEffect(()=>{
   
       const Search = (data) =>  {
         return (
                data.filter((items) => 
                  key.some((key) => items[key].toLowerCase().includes(word))
                )
         )
       }
   
       const fecth_timetable =  async () => {
           const res = await axio_api.get("/timetable/all")
           setData(Search(res.data))
           
       };
       fecth_timetable()
       },[word])
   


  return (
    <>
        <Topbar/>

        <div className="bottomdiv"> 

              <h3>Recements Crées</h3>   
              
              <div className='Search'>
                <input type="search" name="" placeholder='Rechercher un emploi ' id="" onChange={(e)=>setWord(e.target.value)} className='inputSearch'/>
                <button className="SearchButton">Search</button>
              </div>

              <table className="Table recent">
                <thead>
                  <tr className ="tr">
                      <th className ="th">Faculte</th>
                      <th className ="th">Niveau</th>
                      <th className ="th">Filiere</th>
                      <th className ="th">Sepcialite</th>
                      <th className ="th">Semestre</th>
                      <th className ="th">Actions</th>                                                                         
                  </tr>
                </thead>
                <tbody>
                {
                  data && data.map((element, index) => (
                      <Ligne key={index} data={element}/>
                ))}

                </tbody>
                 
                  
              </table>
          </div>
 
    </>
  )
}
