import * as React from 'react';
import Calendar from '../../Components/Calendar/Calendar';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/SideBar/Sidebar';
import './Homepage.css'
import { useEffect } from 'react';
import axio_api from '../../axios_conf';
import { useState } from 'react';
import {Link} from "react-router-dom"


function Homepage() {

 const [data , setData] = useState([])
 const [word,setWord] = useState("")
 const [find,setfind] = useState([])

 const [planing,setPlaning] = useState([])
 const [salle,setSalles] = useState([])
 const [cours,setCours] = useState([])
 const [enseignant,setEnseignant] = useState([])

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
                <Link to={"/edit/"+data._id}>
                  <button className='action update'>Editer</button>
                </Link>
                <button className='action delete' onClick={()=>Delete(data._id)}>delete</button>
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



     //load all data timetable of db
   useEffect(()=>{
    const fecth_timetable =  async () => {
        const res = await axio_api.get("/timetable/all")
        setData(res.data)
    };

    const fecth_salle =  async () => {
      const res = await axio_api.get("/salles/all")
      setSalles(res.data)
      
   };

   const fecth_cours =  async () => {
    const res = await axio_api.get("/cours/all")
    setCours(res.data)
    //console.log(res)
   };
    const fecth_planing = async ()=>{
      const res  = await axio_api.get("/planing/all")
      setPlaning(res.data)
    }

    const fecth_enseignant = async ()=>{
      const res  = await axio_api.get("/enseignant/all")
      setEnseignant(res.data)
    }

    fecth_salle()
    fecth_cours()
    fecth_timetable()
    fecth_planing()
    fecth_enseignant()
},[])





  return (
    
    <div className="Homepage">
      <Topbar/>  
      <div className='HomeWrapper'>
        <Sidebar/>

        <div className="Center">
            <div className='Topdiv'>

              <div className="featuredItem">
                <span className="featuredTitle">Enseignants</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{}</span>
                </div>
                <span className="featuredSub"> </span>
              </div>

              <div className="featuredItem">
                <span className="featuredTitle">Cours</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{}</span>
                </div>
                <span className="featuredSub"> </span>
              </div>

              <div className="featuredItem">
                <span className="featuredTitle">Salles</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{}</span>
                </div>
                <span className="featuredSub"> </span>
              </div>

              <div className="featuredItem">
                <span className="featuredTitle">Autres</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney">{}</span>
                </div>
                <span className="featuredSub"> </span>
              </div>

            </div>

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

        </div>
        
      </div>
       
    </div>
      
  
  );
}

export default Homepage;



