import React, { useEffect, useState } from 'react'
import { api } from '../../Config'
import './MyOrders.css'


export default function MyOrders() {

  const [orders,setOrders] = useState("")

  const OrderItem = ({data}) =>{

    return(
      <div className="order">
        <span className =""><b>Formation</b> : {data.name}</span>
        <span className =""><b>Auteur</b> :{data.author}</span>
        <span className =""><b>Prix</b> : ${data.price}</span>
        <span className=''><b>Date</b> :</span> 
      </div>
    )
  }
 
  
  useEffect(() => {
      
    const oders= async () => {
         const res = await api.get('/payement/all')
         setOrders(res.data)
    }


    oders()

  }, [])



  return (
    <>
      <div className="ordertop">
        <h2 className='ordertoptitle'>Purshases</h2>
      </div>
      <div className='Orders'>
        {
          orders && orders.map((item)=>(
            <OrderItem data={item}/>
          ))
        }
        
      </div>
    </>
  )
}
