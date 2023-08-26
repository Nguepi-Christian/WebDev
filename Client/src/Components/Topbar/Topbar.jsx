import React, { useEffect } from 'react'
import './Topbar.css'
import {Link} from "react-router-dom"

export default function Topbar() {

  return (
    <div className="Topbar" >
      <span className="Apptitle">
        <Link to="/" style={{textDecoration:'none' ,color:"white"}}>
          Timetable Pro
        </Link>
      </span>
    </div>
  )

}
