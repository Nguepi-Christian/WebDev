import React, { useEffect } from 'react'
import { useState } from 'react'
import axio_api from '../../axios_conf'
import NotificationComponent from './NotificationComponent'

export default function Notifications() {

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



  return (
    <div>
      
      {/* <NotificationComponent targetDate={new Date('2022-01-01T12:00:00')}/> */}

      <div>
          
      </div>

    </div>
  )
}
