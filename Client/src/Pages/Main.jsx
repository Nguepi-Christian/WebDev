import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'


export default function Main() {
  return (
    <div className='typemain'>
        <h1>UNIVERSITE DE YAOUNDE 1</h1>
        <h2>Welcome,Selectionnez Pour Continuer</h2>
     
        <div className='typeaccount'>
            <div className='accounttype'>
                <Link to="/admin/login" style={{textDecoration:'none',color:"white"}}>
                    Admin
                </Link>
            </div>

            <div className='accounttype' >
                <Link to="/user/login" style={{textDecoration:'none',color:"white"}}>
                    Enseignant
                </Link>
            </div >

            <div className='accounttype'>
                <Link to="/etudiant" style={{textDecoration:'none',color:"white"}}>
                    Etudiant
                </Link>
            </div>
        </div>

        <h4>Copyright 2023 by @teanScrum</h4>

    </div>
  )
}
