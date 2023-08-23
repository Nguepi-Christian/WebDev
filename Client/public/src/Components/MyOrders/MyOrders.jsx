import React, { useContext, useEffect, useState } from 'react'
import { api } from '../../Config'
import { AuthContext } from '../../Context/AuthContext'
import './MyOrders.css'


export default function MyOrders() {

  const [orders,setOrders] = useState("")

  const OrderItem = ({data}) =>{
    const date = new Date(data.createdAt)

    const day = date.getDay() > 9 ? date.getDate() : "0"+date.getDay()  
    const month = date.getMonth() > 9 ? date.getMonth() : "0"+date.getMonth()  
    const year = date.getFullYear()

    return(
      <div className="order" >
        <span className =""><b>Formation</b> : {data.coursename}</span>
        <span className =""><b>Author</b> : {data.author}</span>
        <span className =""><b>Price</b> : ${data.price}</span>
        <span className=''><b>Date</b> :{" "+day+" / "+month+" / "+year}</span> 
      </div>
    )
  }
 
  const { user } = useContext(AuthContext)
 
  useEffect(() => {
      
    const oders= async () => {
         const res = await api.get('/payement/one/'+user._id)
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
            <OrderItem data={item} key={item._id}/>
          ))
        }
        
      </div>
    </>
  )
}
