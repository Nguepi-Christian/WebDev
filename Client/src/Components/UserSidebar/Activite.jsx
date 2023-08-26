import React, { useState } from 'react'
import { useEffect } from 'react';
import axio_api from '../../axios_conf';

export default function Activite() {
  const [planing,setPlaning] = useState([])
  const [word,setWord] = useState ("")
  var [data,setdata] = useState([])
  
  useEffect(()=>{
  
    const fecth_planing = async ()=>{
      const res  = await axio_api.get("/planing/all")
      setPlaning(res.data)
      console.log(planing)
     //setdata(planing.find((item) => item.subject === "paul"))
      //console.log(data)
    }

    fecth_planing()
},[])

useEffect(()=>{

const fecth_timetable =  async () => {
  const res = await axio_api.get("/timetable/all")
  console.log(res.data.length)
  if(res.data.length === 0){
    const res  = await axio_api.get("/planing/deleteall")
    console.log(res.data)
  }
};

fecth_timetable()
},[])
console.log(planing)
/**/
const day = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']
//console.log(planing)
  return (
    <div className="bottomdiv">
      <div className='Search'>
            <input type="search" name="" placeholder='Rechercher un emploi ' id="" onChange={(e)=>setWord(e.target.value)} className='inputSearch'/>
          <button className="SearchButton">Search</button>
      </div>

      <table className="Table recent">
                <thead>
                  <tr className ="tr">
                      <th className ="th">JOURS</th>
                      <th className ="th">COURS</th>
                      <th className ="th">SALLE</th>
                      {/* <th className ="th">FILIERE</th>
                      <th className ="th">NIVEAU</th> */}
                      <th className ="th">DEBUT</th>

                      <th className ="th">FIN</th>                                                                       
                  </tr>
                </thead>
                <tbody>
                    {planing && planing.filter((item) => item.subject.includes("paul")).map((dat,index)=>(
                      <tr className ="tr" key={index}>
                        <td className ="tr">{day[new Date(dat.day).getDay()]}</td>
                        <td className ="tr">{dat.description}</td>
                        <td className ="tr">{dat.event}</td>
                        {/* <td className ="tr">{dat.filiere}</td>
                        <td className ="tr">{dat.niveau}</td> */}                       
                        <th className ="th">{new Date(dat.StartTime).getHours() +" H "+new Date(dat.StartTime).getMinutes()}</th>
                        <th className ="th">{new Date(dat.EndTime).getHours()+" H "+new Date(dat.EndTime).getMinutes()}</th>
                      </tr>
                    ))
                    } 
                
                

                </tbody>
                 
                  
              </table>



    </div>
  )
}
