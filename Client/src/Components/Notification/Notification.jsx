import React, { useEffect, useState } from 'react'
import axio_api from '../../axios_conf'
import Topbar from '../Topbar/Topbar'

export default function Notification() {
    const [reservation,setReservation] = useState([])
    
    useEffect(()=>{
            const fetch = async ()=>{
                const res = await axio_api.get("/reservation/all")
                setReservation(res.data);

            }

        fetch()
    },[])

    const remove = async (id ) =>{
        const data = {
            id : id
        }
        const res = await axio_api.post("/reservation/delete",data)
        alert(res.data)

    }
    const Reservation = ({data}) =>{

        return(
                <div className="notificatonelement">
                    <div className='notificationdetails'>
                        <span>Par Dr {data.enseignant}</span>
                        <span>Salle {data.salle}</span>
                        <span>debut {data.hd}</span>
                        <span>fin {data.hf}</span>
                        <span>Description : {data.description}</span>
                        <span>{data.filiere}</span>
                        <span>{data.niveau}</span>
                        <span>{data.faculte}</span>
                        <span>{data.semestre} </span>
                    </div>

                    <div className="modalfooter">
                        <button className='action delete' name={data._id} onClick={(e)=>remove(e.target.name)}>Rejeter</button>
                        <button className='action update'>Valider</button>
                    </div>
                </div>
        )
    }

  return (
    <div>
        <Topbar/>
            <div className='ButonContainer'>
                <h2>Notifications et Reservation</h2>
            </div>
        <div>
            
        {
            reservation && reservation.map((item) => (
                <Reservation data={item}/>
            ))
        }

        </div>
    </div>
  )
}
