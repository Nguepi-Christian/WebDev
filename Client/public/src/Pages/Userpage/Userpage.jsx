import React, { useContext, useEffect, useState } from 'react'
import './Userpage.css'
import MyCourses from '../../Components/MyCourses/MyCourses'
import MyOrders from '../../Components/MyOrders/MyOrders'
import { Link } from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Userpage() {

    const [mycourse,setCourse] = useState(true)
    const [myorder,setorder] = useState(false)


    const { user } = useContext(AuthContext)
    
    const navigate = useNavigate()

   /*  const Top = () => {
        return(
            <div className="topdetails">
                <Link to="/homepage" style={{textDecoration:"none"}}>
                    <h2 className='udefree'>KnowlageMarketplace</h2>
                </Link>
            </div>
        )
    } */

    useEffect(() => {
      const check = () => {
       !user && navigate('/homepage')
      }

      check()
    }, [])
    

    const LoadComponent = (type) => {
        if(type==="course"){
            setCourse(true)
            setorder(false)
            
        }

        if(type==="order"){
            setCourse(false)
            setorder(true)
          
        }
    }
    

  return (

    <>
        <div className='Userpage'>

            <div className="sidebar">
                <h3 className='dash'>@{user && user.username}</h3>

                <div className='menuitem'>
                    <span className='submenu' onClick={() => LoadComponent("course")}> Courses </span>
                    <span className='submenu' onClick={() => LoadComponent("order")}> Purshases </span>
                    <span className='submenu'> Account </span>
                </div>
            </div>

            <div className='Rightdiv'>
                {
                    (mycourse && <MyCourses /> ) ||
                    (myorder && <MyOrders/> ) 
                    
                }
            </div>
        
        </div>
    </>
  )
}
