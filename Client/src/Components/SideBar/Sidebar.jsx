import React from 'react'
import './Sidebar.css'
import {useState} from 'react'
import {Link} from "react-router-dom"

export default function Sidebar() {

  return (

    <> 
    <div className='Sidebar'>

        <h2 className='title'>Admin Bord</h2>
        <hr />
        <div className='Sideoptions'>
            <h4 className='Sideoptions'>
                Gestionnaires
            </h4> 
            <span className='Sideitem'>
                <Link to="/enseignant" style={{textDecoration:'none' ,color:"white"}}>
                    Enseignants
                </Link>
            </span>
            <span className='Sideitem'>
                <Link to="/cours" style={{textDecoration:'none' ,color:"white"}}>
                    Cours
                </Link>
            </span>
           
            <span className='Sideitem'>
                <Link to="/salle" style={{textDecoration:'none' ,color:"white"}}>
                    Salles
                </Link>
            </span>

            <span className='Sideitem'>
                <Link to="/build" style={{textDecoration:'none' ,color:"white"}}>
                    Elaboration
                </Link>
            </span>
            
        </div>
        <hr />
        <div className='Sideoptions'>
            <h4 className='title'>
                Plus
            </h4>
            <span className='Sideitem'>
                <Link to="/notification" style={{textDecoration:'none' ,color:"white"}}>
                    Notifications
                </Link>
            </span>
            <span className='Sideitem'>
                Reglages
            </span>
            <span className='Sideitem'>
                Log-out
            </span>
        </div>
       
    </div>
    </>
  )
}
